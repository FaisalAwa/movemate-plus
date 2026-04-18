import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, ChevronLeft, ChevronRight, X, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import seedReviews from '@/data/reviews.json';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const STORAGE_KEY = 'rinteg_user_reviews';

function loadUserReviews(): Review[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUserReview(review: Review) {
  const existing = loadUserReviews();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, review]));
}

function StarRating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          onMouseEnter={() => onChange && setHovered(star)}
          onMouseLeave={() => onChange && setHovered(0)}
          className={onChange ? 'cursor-pointer' : 'cursor-default'}
          aria-label={`${star} star`}
        >
          <Star
            size={onChange ? 24 : 18}
            className={
              star <= (hovered || value)
                ? 'fill-accent text-accent'
                : 'fill-muted text-muted-foreground/30'
            }
          />
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className="bg-card p-6 rounded-xl shadow-md flex flex-col gap-3 h-full"
    >
      <StarRating value={review.rating} />
      <p className="text-muted-foreground flex-1">"{review.text}"</p>
      <div>
        <p className="font-semibold text-primary">{review.name}</p>
        <p className="text-sm text-muted-foreground">{review.location}</p>
      </div>
    </motion.div>
  );
}

export const Testimonials = () => {
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', location: '', rating: 5, text: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLDivElement>(null);

  const PER_PAGE = 3;

  useEffect(() => {
    const userReviews = loadUserReviews();
    setAllReviews([...seedReviews, ...userReviews]);
  }, []);

  const totalPages = Math.ceil(allReviews.length / PER_PAGE);
  const visible = allReviews.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.location.trim()) e.location = 'Location is required.';
    if (!form.text.trim() || form.text.trim().length < 20)
      e.text = 'Review must be at least 20 characters.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const newReview: Review = {
      id: `u_${Date.now()}`,
      name: form.name.trim(),
      location: form.location.trim(),
      rating: form.rating,
      text: form.text.trim(),
      date: new Date().toISOString().split('T')[0],
    };

    saveUserReview(newReview);
    setAllReviews((prev) => [...prev, newReview]);
    setSubmitted(true);
    setForm({ name: '', location: '', rating: 5, text: '' });
    setErrors({});
    // go to last page to show new review
    setPage(Math.floor((allReviews.length) / PER_PAGE));
  };

  const closeForm = () => { setShowForm(false); setSubmitted(false); setErrors({}); };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-3">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">Real reviews from real customers</p>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 min-h-[220px]">
          <AnimatePresence mode="wait">
            {visible.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent smooth-transition disabled:opacity-30"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm text-muted-foreground">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent smooth-transition disabled:opacity-30"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Leave a review button */}
        <div className="flex justify-center mb-2">
          <button
            onClick={() => { setShowForm(true); setSubmitted(false); setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100); }}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 smooth-transition shadow"
          >
            <Star size={16} className="fill-accent-foreground" />
            Leave a Review
          </button>
        </div>

        {/* Review form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 max-w-xl mx-auto bg-card rounded-2xl shadow-lg p-8 relative"
            >
              <button
                onClick={closeForm}
                aria-label="Close form"
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary smooth-transition"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <CheckCircle size={48} className="text-accent" />
                  <h3 className="text-xl font-semibold text-primary">Thank you for your review!</h3>
                  <p className="text-muted-foreground">Your feedback is now visible on the page.</p>
                  <button
                    onClick={closeForm}
                    className="mt-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 smooth-transition"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-primary mb-6">Share Your Experience</h3>
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Your Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="e.g. John Smith"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 smooth-transition"
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Your Location <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.location}
                        onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                        placeholder="e.g. Hackney, London"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 smooth-transition"
                      />
                      {errors.location && <p className="text-destructive text-xs mt-1">{errors.location}</p>}
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Rating <span className="text-destructive">*</span>
                      </label>
                      <StarRating value={form.rating} onChange={(v) => setForm((f) => ({ ...f, rating: v }))} />
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Your Review <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={form.text}
                        onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
                        placeholder="Tell us about your experience..."
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 smooth-transition resize-none"
                      />
                      {errors.text && <p className="text-destructive text-xs mt-1">{errors.text}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 smooth-transition shadow"
                    >
                      <Send size={16} />
                      Submit Review
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
