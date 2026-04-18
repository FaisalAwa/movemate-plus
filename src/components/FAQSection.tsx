import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking at least 2–4 weeks ahead, especially during peak seasons (summer and end of month). That said, we offer same-day and next-day availability when possible — contact us and we\'ll do our best to accommodate you.',
  },
  {
    question: 'Are you insured for high-value items?',
    answer:
      'Yes. All moves are covered by comprehensive goods-in-transit insurance. For antiques, pianos, or other high-value and specialist items, we can arrange additional coverage and use specialist handling techniques.',
  },
  {
    question: 'Do you offer weekend moves?',
    answer:
      'Absolutely. We operate 7 days a week, including weekends and bank holidays, at no extra charge. Just let us know your preferred date and we\'ll make it happen.',
  },
  {
    question: 'Do you provide packing materials?',
    answer:
      'Yes. We supply all necessary packing materials including boxes, bubble wrap, packing tape, and protective blankets. We can pack your entire home or just the fragile items — whatever suits you.',
  },
  {
    question: 'How do you calculate the cost of a move?',
    answer:
      'Our quotes are fixed and based on the volume of items, distance, and any additional services such as packing or storage. There are no hidden fees — you\'ll know the full cost upfront before we start.',
  },
  {
    question: 'Do you offer storage services?',
    answer:
      'Yes. We provide secure, short- and long-term storage solutions at competitive rates. Our facilities are clean, dry, and monitored 24/7.',
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-accent/50 smooth-transition"
              >
                <AccordionTrigger className="text-primary font-medium text-left hover:no-underline hover:text-accent py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
