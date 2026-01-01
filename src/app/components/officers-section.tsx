import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import { Phone, ShieldCheck } from "lucide-react";
const leadershipMembers = [
  {
    id: 1,
    role: "துணைச் செயலாளர்",
    englishRole: "Deputy Secretary",
    name: "சி. ரமேஷ்",
    englishName: "S. Ramesh",
    address: "East Wing, Public Relations Office",
    phone: "+91 9876543404",
    image: "/leadership/deputy-2.jpg",
  },
  {
    id: 2,
    role: "துணைச் செயலாளர்",
    englishRole: "Deputy Secretary",
    name: "மு. பாஸ்கர்",
    englishName: "M. Bhaskar",
    address: "West Wing, Operational Command",
    phone: "+91 9876543403",
    image: "/leadership/deputy-1.jpg",
  },
  {
    id: 3,
    role: "இணைச் செயலாளர்",
    englishRole: "Joint Secretary",
    name: "கே. விஜயன்",
    englishName: "K. Vijayan",
    address: "Central Wing, Administration Block",
    phone: "+91 9876543402",
    image: "/leadership/joint-sec.jpg",
  },
  {
    id: 4,
    role: "பொருளாளர்",
    englishRole: "Treasurer",
    name: "அ. இராம்குமார்",
    englishName: "A. Ramkumar",
    address: "HQ Office, Finance Department Tower",
    phone: "+91 9876543401",
    image: "/leadership/treasurer.jpg",
  }
];

export function LeadershipCommitteeSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const updateCarousel = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  useEffect(() => {
    if (!api) return;
    api.on("select", updateCarousel);
    updateCarousel();
    return () => {
      api.off("select", updateCarousel);
    };
  }, [api]);

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\s/g, "")}`;
  };

  const handleWhatsApp = (phone: string) => {
    const phoneNumber = phone.replace(/\s/g, "").replace("+", "");
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <section id="leadership-committee" className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex justify-center mb-4">
             <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Main Leadership
             </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
            தலைமை நிர்வாகிகள்
          </h2>
          <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-red-700 font-bold">Core Leadership Team</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 sm:mb-8"></div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 text-left px-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              கழகத்தின் முக்கிய முடிவுகளை எடுக்கும் மற்றும் வழிநடத்தும் தலைமை நிர்வாகிகள். இவர்களின் வழிகாட்டுதலின் கீழ் கழகம் பீடு நடை போடுகிறது.
            </p>
            <p className="text-sm sm:text-base text-yellow-500 italic">
              "The core leadership team that guides and governs our organization. Under their stewardship, we move forward with strength and vision."
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {leadershipMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden bg-neutral-950 border-2 border-yellow-600/50 hover:border-yellow-500 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = "none";
                          img.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-center"><div class="text-white"><div class="text-4xl mb-2">👤</div><p class="text-xs text-gray-400">Leadership Image</p></div></div>';
                        }}
                      />
                      {/* Role Ribbon */}
                      <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 font-bold text-[10px] uppercase">
                        {member.englishRole}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <ShieldCheck size={16} className="text-yellow-500" />
                          <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider">{member.role}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-xs sm:text-sm text-red-500 font-semibold">{member.englishName}</p>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-1 flex-shrink-0 rounded-full bg-red-700"></div>
                        <p className="text-xs sm:text-sm text-white/70">{member.address}</p>
                      </div>

                      {/* Phone Number */}
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 flex-shrink-0">📞</div>
                        <p className="text-xs sm:text-sm text-white font-medium">{member.phone}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 sm:gap-3 pt-2">
                        <Button
                          onClick={() => handleCall(member.phone)}
                          className="flex-1 bg-red-700 hover:bg-red-800 text-white font-bold py-2 rounded flex items-center justify-center gap-2 transition-colors text-sm"
                        >
                          <Phone size={16} />
                          <span className="hidden sm:inline">Call</span>
                        </Button>
                        <Button
                          onClick={() => handleWhatsApp(member.phone)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded flex items-center justify-center gap-2 transition-colors text-sm"
                        >
                          <img 
                            src="https://cdn-icons-png.flaticon.com/512/220/220236.png" 
                            alt="WhatsApp" 
                            className="w-4 h-4" 
                          />
                          <span className="hidden sm:inline">WhatsApp</span>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex absolute left-0 top-1/3 transform -translate-y-1/2 -translate-x-12 lg:-translate-x-16 border-2 border-yellow-500 hover:bg-yellow-600" />
            <CarouselNext className="hidden md:flex absolute right-0 top-1/3 transform -translate-y-1/2 translate-x-12 lg:translate-x-16 border-2 border-yellow-500 hover:bg-yellow-600" />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8 flex-wrap">
            {leadershipMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "bg-yellow-500 w-3 h-3"
                    : "bg-neutral-600 hover:bg-neutral-500 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}