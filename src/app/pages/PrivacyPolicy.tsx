import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-yellow-500 mb-2">Privacy Policy</h1>
          <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-white/70">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">Introduction</h2>
              <p>
                This Privacy Policy explains how K.R. Saravanakumar (KRS) and Tamilaga Vettri Kazhagam (TVK) 
                collect, use, disclose, and safeguard your information when you visit our website at 
                <strong> krsaravanakumar.in</strong>, including any other media form, media channel, mobile 
                website, or mobile application related or connected thereto.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">1. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways. The information we collect on our site may include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information when you fill out forms or contact us.</li>
                <li><strong>Usage Data:</strong> Browsing history, pages visited, time spent on pages, and links clicked.</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                <li><strong>Location Data:</strong> General location information based on IP address (not precise GPS location).</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">2. How We Use Information</h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, maintain, and improve our website and services</li>
                <li>To respond to your inquiries and send you requested information</li>
                <li>To send you promotional emails and updates (with your consent)</li>
                <li>To analyze website usage and optimize user experience</li>
                <li>To comply with legal obligations and enforce our terms of service</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">3. Data Protection & Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the internet or electronic storage is completely secure. We cannot guarantee 
                absolute security of your data.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">4. Data Sharing & Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following cases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With service providers who assist us in operating our website (hosting, analytics, email services)</li>
                <li>When required by law or legal process</li>
                <li>To protect the rights, privacy, safety, or property of our organization, users, or the public</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">5. Cookies & Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
                Cookies are small data files stored on your device that help us remember your preferences. You can 
                control cookie settings through your browser, though disabling cookies may affect website functionality.
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to object to data processing</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at the address provided in the Contact section below.
              </p>
            </section>

            {/* Election Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">7. Election Compliance</h2>
              <p>
                This website operates in compliance with the Election Commission of India guidelines. Any political 
                content or election-related material is presented in accordance with applicable election laws and 
                regulations. We do not engage in any activities that violate election commission rules.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                of external sites. We encourage you to review the privacy policies of any third-party websites before 
                providing your personal information.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                legal requirements, or other factors. We will notify you of any material changes by updating the date 
                at the top of this policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-500 mb-3">10. Contact Us</h2>
              <p className="mb-4">If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
              <div className="bg-neutral-900 p-4 rounded border-l-4 border-red-700">
                <p className="font-bold mb-2">K.R. Saravanakumar (KRS)</p>
                <p>Kasipalayam, Gobichettipalayam</p>
                <p>Erode District, Tamil Nadu 638454</p>
                <p>India</p>
                <p className="mt-3">
                  <strong>Email:</strong> <a href="mailto:contact@krsaravanakumar.in" className="text-yellow-400 hover:text-yellow-300">contact@krsaravanakumar.in</a>
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-neutral-900 p-4 rounded border-l-4 border-yellow-500 mt-8">
              <p className="text-sm text-white/60">
                By using this website, you acknowledge that you have read and understood this Privacy Policy and agree 
                to its terms. If you do not agree with any part of this policy, please discontinue use of our website.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
