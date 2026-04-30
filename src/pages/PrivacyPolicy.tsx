import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
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
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              How Reliant Integrated Services Ltd collects, uses, and protects your personal information.
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
                  Reliant Integrated Services Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of personal information when you interact with us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and postal address.</li>
                  <li><strong>Booking Details:</strong> Moving dates, pickup and delivery addresses, inventory details, and special requirements.</li>
                  <li><strong>Payment Information:</strong> We do not store card details; payments are processed securely through trusted third-party providers.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, operating system, and pages visited on our website.</li>
                  <li><strong>Communications:</strong> Records of correspondence when you contact us via email, phone, or our contact form.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li>Process and fulfil your moving bookings and service requests.</li>
                  <li>Communicate with you regarding your booking confirmations, updates, and queries.</li>
                  <li>Send you quotes, invoices, and service-related notifications.</li>
                  <li>Improve our website, services, and customer experience.</li>
                  <li>Comply with legal and regulatory obligations.</li>
                  <li>Send promotional materials and updates, where you have given consent.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">3. Legal Basis for Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under the UK General Data Protection Regulation (UK GDPR), we process your personal data under the following legal bases:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li><strong>Contract Performance:</strong> Processing necessary to fulfil your booking and service contract.</li>
                  <li><strong>Legitimate Interests:</strong> Improving our services and communicating about relevant offerings.</li>
                  <li><strong>Legal Obligation:</strong> Compliance with applicable UK laws and regulations.</li>
                  <li><strong>Consent:</strong> Where you have given explicit consent for marketing communications.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">4. Sharing Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li><strong>Service Providers:</strong> Trusted third parties who assist in delivering our services (e.g., payment processors, IT support), bound by confidentiality agreements.</li>
                  <li><strong>Legal Authorities:</strong> Where required by law, court order, or regulatory authority.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our business assets.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. Booking records are typically retained for six years in line with UK tax and legal requirements. After this period, your data will be securely deleted or anonymised.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">6. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li>Understand how visitors use our website (analytics cookies).</li>
                  <li>Remember your preferences and settings.</li>
                  <li>Ensure the website functions correctly (essential cookies).</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You can control and manage cookies through your browser settings. Disabling cookies may affect the functionality of our website.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under UK GDPR, you have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                  <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data where there is no compelling reason for its continued processing.</li>
                  <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data in certain circumstances.</li>
                  <li><strong>Right to Data Portability:</strong> Receive your personal data in a structured, commonly used format.</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:rintegservices@gmail.com" className="text-accent hover:underline">rintegservices@gmail.com</a>. We will respond within 30 days.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">8. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by updating the date at the top of this page. We encourage you to review this policy periodically.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted rounded-xl p-6 space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Reliant Integrated Services Ltd</strong></p>
                  <p>Romford, United Kingdom</p>
                  <p>Email: <a href="mailto:rintegservices@gmail.com" className="text-accent hover:underline">rintegservices@gmail.com</a></p>
                  <p>Phone: <a href="tel:+4407466711733" className="text-accent hover:underline">07466711733</a></p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) — the UK's supervisory authority for data protection — at <strong>ico.org.uk</strong>.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
