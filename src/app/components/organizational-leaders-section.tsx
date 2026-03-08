import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";

const organizationalLeaders = [
  {
    id: 1,
    name: "N. ஆனந்த்",
    englishName: "N. Aanandh",
    fullName: "N. ஆனந்த்",
    position: "பொதுச் செயலாளர்",
    englishPosition: "General Secretary",
     image: "/assets/Aanandh.jpeg",
  },
  {
    id: 2,
    name: "K. A. செங்கோட்டையன்",
    englishName: "K. A. Sengottayan",
    fullName: "K. A. செங்கோட்டையன்",
    position: "முதன்மை ஒருங்கிணைப்பாளர் & மேற்கு மண்டல ஒருங்கிணைப்பாளர்",
    englishPosition: "Chief Coordinator & West Zone Coordinator",
    image: "/assets/K-A-Sengottayan.webp",
  },
  {
    id: 3,
    name: "M. பாலாஜி",
    englishName: "M. Balaji",
    fullName: "M. பாலாஜி",
    position: "ஈரோடு மத்திய மாவட்ட செயலாளர்",
    englishPosition: "Erode Central District Secretary",
    image: "/assets/M-Balaji.png",
  },
  {
    id: 4,
    name: "A. பிரதீப் குமார்",
    englishName: "A. Pradeep Kumar",
    fullName: "A. பிரதீப் குமார்",
    position: "ஈரோடு மேற்கு மாவட்ட செயலாளர்",
    englishPosition: "Erode West District Secretary",
    image: "/assets/Pradeepkumar.png",
  },
];

export function OrganizationalLeadersSection() {
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

  return (
    <section id="organizational-leaders" className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex justify-center mb-4">
            <span className="bg-red-700 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Organization Leaders
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
            தமிழக வெற்றி கழகத்தின் தலைவர்கள்
          </h2>
          <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-yellow-500 font-bold">TVK Leadership</p>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6 sm:mb-8"></div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 text-left px-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              தமிழக வெற்றி கழகத்தை வழிநடத்திச் செல்லும் நமது தலைவர்கள் மற்றும் ஒருங்கிணைப்பாளர்கள். இவர்களின் விமர்சனமான நேતৃத்வத்தின் கீழ் கழகம் வலிமையுடன் முன்னெடுத்து செல்கிறது.
            </p>
            <p className="text-sm sm:text-base text-yellow-500 italic">
              "Our visionary leaders and coordinators guide Tamilaga Vettri Kazhagam towards a better future. Under their stewardship, we work for the welfare of all Tamil people."
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {organizationalLeaders.map((leader, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden bg-neutral-950 border-2 border-red-700/50 hover:border-red-500 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = "none";
                          img.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-center"><div class="text-white"><div class="text-4xl mb-2">👤</div><p class="text-xs text-gray-400">Photo</p></div></div>';
                        }}
                      />
                    </div>

                    {/* Position Badge */}
                    <div className="bg-gradient-to-r from-red-700 to-red-600 px-4 py-2">
                      <span className="text-white font-bold text-sm">{leader.position}</span>
                      {leader.englishPosition && (
                        <p className="text-white text-xs mt-1 opacity-90">{leader.englishPosition}</p>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                      {/* Name */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{leader.name}</h3>
                        <p className="text-xs sm:text-sm text-yellow-500 font-semibold">{leader.englishName}</p>
                      </div>

                     

             
                    
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex absolute left-0 top-1/3 transform -translate-y-1/2 -translate-x-12 lg:-translate-x-16 border-2 border-red-700 hover:bg-red-700" />
            <CarouselNext className="hidden md:flex absolute right-0 top-1/3 transform -translate-y-1/2 translate-x-12 lg:translate-x-16 border-2 border-red-700 hover:bg-red-700" />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8 flex-wrap">
            {organizationalLeaders.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "bg-red-700 w-3 h-3"
                    : "bg-neutral-600 hover:bg-neutral-500 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-10 sm:mt-12 max-w-4xl mx-auto px-4">
          <p className="text-sm sm:text-base text-white/70 mb-2">
            தமிழ் மக்களின் நலனுக்కும், வளர்ச்சிக்குமுந்தான் இவர்கள் பணிபுரிகிறார்கள்.
          </p>
          <p className="text-sm sm:text-base text-yellow-500/70 italic">
            "Dedicated to the welfare and progress of Tamil people."
          </p>
        </div>
      </div>
    </section>
  );
}
