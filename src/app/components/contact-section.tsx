import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

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
                    <p className="text-white/70 text-sm sm:text-base">+91 98765 43210</p>
                    <p className="text-white/70 text-sm sm:text-base">+91 97531 24680</p>
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
                      TVK District Office,<br />
                      Main Road, Ariyalur,<br />
                      Tamil Nadu - 621704
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

          {/* Contact Form */}
          <div className="bg-neutral-950 border-2 border-neutral-800 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-white/70">Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-2 border-neutral-700 focus:border-red-700 text-white px-4 py-3 outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-2 border-neutral-700 focus:border-red-700 text-white px-4 py-3 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black border-2 border-neutral-700 focus:border-red-700 text-white px-4 py-3 outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-2 border-neutral-700 focus:border-red-700 text-white px-4 py-3 outline-none transition-colors"
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Request Support</option>
                      <option value="complaint">File Complaint</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-black border-2 border-neutral-700 focus:border-red-700 text-white px-4 py-3 outline-none transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-700 text-white font-bold py-3 sm:py-4 flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
