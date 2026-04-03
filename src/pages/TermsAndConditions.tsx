import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              cx="20%"
              cy="30%"
              r="200"
              fill="white"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.circle
              cx="80%"
              cy="70%"
              r="150"
              fill="white"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Terms &amp; <span className="text-accent">Conditions</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

              <div>
                <p className="text-muted-foreground text-sm mb-4">Last updated: April 2026</p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  These Terms and Conditions ("Terms") govern your use of the services provided by Reliant Integrated Services Ltd ("Company", "we", "our", or "us"), registered in England and Wales, operating from Romford, United Kingdom. By booking or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">1. Definitions</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li><strong>"Customer" / "You":</strong> The individual or organisation booking our services.</li>
                  <li><strong>"Services":</strong> Moving, packing, furniture assembly, cleaning, painting, decorating, flooring, landscaping, and any other services provided by us.</li>
                  <li><strong>"Booking":</strong> A confirmed request for Services submitted via our website, phone, or email.</li>
                  <li><strong>"Goods":</strong> Any items, furniture, belongings, or property handled by us during the provision of Services.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">2. Bookings and Confirmation</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li>All bookings are subject to availability and confirmed only upon our written or verbal acceptance.</li>
                  <li>You are responsible for providing accurate information at the time of booking, including addresses, access details, and a full inventory of Goods.</li>
                  <li>We reserve the right to decline or cancel any booking that we are unable to fulfil safely or legally.</li>
                  <li>Quotes are based on the information provided. Additional charges may apply if the actual scope of work differs from what was described.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">3. Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li>Payment is due as agreed at the time of booking, unless otherwise stated in writing.</li>
                  <li>We accept payment by bank transfer, cash, or other agreed methods.</li>
                  <li>A deposit may be required to secure your booking date. Deposits are non-refundable unless the cancellation is made by us.</li>
                  <li>Outstanding balances must be settled on the day of service unless a credit arrangement has been agreed in advance.</li>
                  <li>We reserve the right to charge interest on overdue invoices at 8% per annum above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">4. Cancellation and Rescheduling</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li><strong>Cancellations with more than 48 hours notice:</strong> No charge, deposit may be retained as a booking fee.</li>
                  <li><strong>Cancellations within 48 hours of the scheduled service:</strong> A cancellation fee of up to 50% of the agreed price may be charged.</li>
                  <li><strong>Cancellations on the day of service:</strong> Full service charge may apply at our discretion.</li>
                  <li>Rescheduling requests are subject to availability and must be made at least 24 hours in advance.</li>
                  <li>We reserve the right to cancel or reschedule services in exceptional circumstances (e.g., severe weather, vehicle breakdown). In such cases, we will offer an alternative date or a full refund.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">5. Customer Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li>Ensure safe and legal access to all properties on the scheduled date and time.</li>
                  <li>Disclose any items that require special handling (e.g., antiques, pianos, hazardous materials, high-value items).</li>
                  <li>Ensure all Goods are adequately packed before our team arrives, unless packing services have been booked.</li>
                  <li>Not include prohibited items such as flammable materials, explosives, perishable food, animals, or illegal substances.</li>
                  <li>Obtain any necessary parking permits or suspensions for loading/unloading areas.</li>
                  <li>Be present or have a representative present throughout the service.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">6. Our Liability</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li>We carry Goods in Transit insurance. Our liability for loss or damage to Goods is limited to the insurance coverage in place at the time of the move.</li>
                  <li>We are not liable for damage caused by inadequate packing by the Customer, inherent defect in the Goods, or normal wear and tear.</li>
                  <li>We are not liable for indirect or consequential losses, including loss of earnings, loss of business, or loss of opportunity.</li>
                  <li>We are not liable for delays caused by circumstances beyond our control, including traffic, adverse weather, or access difficulties.</li>
                  <li>Claims for damage or loss must be reported to us in writing within 7 days of the completion of services.</li>
                  <li>Our total liability shall not exceed the total value of the contract for the specific service in question.</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">7. Damage and Claims</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li>Any damage noticed at the time of delivery must be reported immediately to our team and noted on the job sheet before signing.</li>
                  <li>Claims made after the 7-day window may not be accepted.</li>
                  <li>We may require photographic evidence and a detailed description of the damage.</li>
                  <li>We reserve the right to inspect claimed damaged items before processing any claim.</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">8. Parking and Access</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Customer is responsible for arranging suitable parking for our vehicles at both the collection and delivery addresses. Any parking fines or penalties incurred due to the Customer's failure to provide adequate parking arrangements will be charged to the Customer.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">9. Delays and Waiting Time</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li>If our team is required to wait at a property due to reasons outside our control (e.g., delays with keys, previous occupants not vacating), an additional waiting time charge may apply.</li>
                  <li>Waiting time will be charged at our standard hourly rate, prorated per 30 minutes.</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">10. Health and Safety</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li>Our team has the right to refuse to move any items they deem unsafe or that could cause injury.</li>
                  <li>Customers must inform us of any known hazards at the property (e.g., narrow staircases, unstable flooring, asbestos).</li>
                  <li>We reserve the right to refuse or halt services if conditions are deemed unsafe for our team.</li>
                </ul>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">11. Sub-Contracting</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to sub-contract all or part of the services to a reputable third party. We remain fully responsible to you for the performance of the services and will ensure any sub-contractor is adequately insured and trained.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">12. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on our website, including text, images, logos, and branding, is the property of Reliant Integrated Services Ltd and is protected by copyright law. You may not reproduce, distribute, or use our content without prior written permission.
                </p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">13. Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of our services is also governed by our <a href="/privacy-policy/" className="text-accent hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.
                </p>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">14. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to update these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.
                </p>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">15. Governing Law and Disputes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales. We encourage you to contact us in the first instance to resolve any disputes amicably.
                </p>
              </div>

              {/* Section 16 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">16. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-muted rounded-xl p-6 space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Reliant Integrated Services Ltd</strong></p>
                  <p>Romford, United Kingdom</p>
                  <p>Email: <a href="mailto:rintegservices@gmail.com" className="text-accent hover:underline">rintegservices@gmail.com</a></p>
                  <p>Phone: <a href="tel:+4407466711733" className="text-accent hover:underline">07466711733</a></p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
