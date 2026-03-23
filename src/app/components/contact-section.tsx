import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Get in <span className="text-red-700">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-yellow-500 font-bold">Your Voice Matters to Us</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-neutral-950 border-2 border-neutral-800 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-white/70 text-sm sm:text-base">+91 86676 70083</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-white/70 text-sm sm:text-base">contact@krsaravanan.in</p>
                    <p className="text-white/70 text-sm sm:text-base">tvk.krsaravanan@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Office Address</h4>
                    <p className="text-white/70 text-sm sm:text-base">
                      Near Bus Stop, Kasipalayam Main Road,<br />
                      Kasipalayam, Gobichettipalayam,<br />
                      638454, Erode
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-neutral-950 border-2 border-yellow-500 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between text-white/80">
                  <span>Monday - Friday</span>
                  <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Saturday</span>
                  <span className="text-white font-bold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Sunday</span>
                  <span className="text-red-600 font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
