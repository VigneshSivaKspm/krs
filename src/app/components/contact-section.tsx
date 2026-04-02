import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Get in <span className="text-red-800">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-amber-600 font-bold">Your Voice Matters to Us</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Person */}
          <div className="flex items-center justify-center lg:order-2 order-1">
            <div className="bg-gradient-to-br from-amber-50 to-red-50 border-2 border-amber-200 p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
              <div className="mb-6">
                <img
                  src="/assets/saravanan2.jpeg"
                  alt="KR Saravanakumar B.Sc Computer Science - Contact Person - Tamilaga Vettri Kazhagam TVK - Tamil Nadu"
                  title="KR Saravanakumar - B.Sc CS - Contact Representative - TVK Kasipalayam Office"
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-amber-500 shadow-md"
                  width="128"
                  height="128"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">KR Saravanakumar</h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">B.Sc Computer Science</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Dedicated to serving the community with transparency and dedication
              </p>
              <div className="border-t-2 border-amber-200 pt-4">
                <p className="text-xs text-gray-500 italic">Committed to citizen engagement and community development</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 lg:order-1 order-2">
            <div className="bg-amber-50 border-2 border-amber-200 p-6 sm:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#991B1B] flex items-center justify-center flex-shrink-0 rounded-lg shadow">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm sm:text-base">+91 86676 70083</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 flex items-center justify-center flex-shrink-0 rounded-lg shadow">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base">contact@krsaravanan.in</p>
                    <p className="text-gray-600 text-sm sm:text-base">tvk.krsaravanan@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#991B1B] flex items-center justify-center flex-shrink-0 rounded-lg shadow">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Office Address</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Near Bus Stop, Kasipalayam Main Road,<br />
                      Kasipalayam, Gobichettipalayam,<br />
                      638454, Erode
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-[#991B1B] border-2 border-red-800 p-6 sm:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between text-amber-100">
                  <span>Monday - Friday</span>
                  <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-amber-100">
                  <span>Saturday</span>
                  <span className="text-white font-bold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-amber-100">
                  <span>Sunday</span>
                  <span className="text-amber-400 font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
