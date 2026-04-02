import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import { Phone } from "lucide-react";

const executiveMembers = [
  {
    id: 1,
    name: "செந்திலகுமார்",
    englishName: "Senthilkumar",
    address: "செந்திலகுமார், கோபிச்செட்டிபாளையம், ஈரோடு – 638454",
    phone: "+91 9360192177",
    image: "/assets/senthilkumar.jpeg",
  },
  {
    id: 2,
    name: "R. பாலகிருஷ்ணன்",
    englishName: "R. Balakrishnan",
    address: "குமரன் கார்டு, காசிபாளையம்",
    phone: "+91 9629149921",
    image: "/assets/Balakrishnan.jpeg",
  },
  {
    id: 3,
    name: "V. கோகுலசாரதி",
    englishName: "V. Gokulsarathi",
    address: "153/100, சத்தி மெயின் ரோடு, காசிபாளையம் (P.O), கோபி (T.K), ஈரோடு (D.T) – 638454",
    phone: "+91 8870290453",
    image: "/assets/Gokulsarathi.jpeg",
  },
  {
    id: 4,
    name: "அபிராமி K",
    englishName: "Abhirami K",
    address: "W/o கருப்புசாமி, 4, ஈஸ்வரமூர்த்தி வீதி, காசிபாளையம் பேரூராட்சி, காசிபாளையம் (P.O), கோபிச்செட்டிபாளையம், ஈரோடு – 638454",
    phone: "+91 9489824024",
    image: "/assets/Abhirami.png",
  },
  {
    id: 5,
    name: "C. அருண் பிரசாத்",
    englishName: "C. Arun Prasath",
    address: "102/4, அரசு மேல்நிலைப் பள்ளி எதிரில், சத்தி–கோபி மெயின் ரோடு, காசிபாளையம் (P.O), கோபி (T.K), ஈரோடு (D.T) – 638454",
    phone: "+91 9788319790",
    image: "/assets/ArunPrasath.png",
  },
  {
    id: 6,
    name: "வெங்கடேஷ்",
    englishName: "Venkatesh",
    address: "வி. வெங்கடேஷ், கோபிச்செட்டிபாளையம், ஈரோடு – 638454",
    phone: "+91 9360314140",
    image: "/assets/venkatesh.jpeg",
  },
];

export function ExecutiveCommitteeSection() {
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
    <section id="executive-committee" className="py-16 sm:py-20 lg:py-24 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            செயற்குழு உறுப்பினர்கள்
          </h2>
          <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-red-800 font-bold">Executive Committee Members</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 sm:mb-8"></div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 text-left px-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              தமிழக வெற்றி கழகத்தின் திசைக்குறிப்பை வகுக்கும் மற்றும் குறைவற்ற பணிபுரியும் நமது செயற்குழு உறுப்பினர்கள். அவர்களை நேரடியாக தொடர்பு கொண்டு, உங்கள் யோசனைகளையும் கருத்துக்களையும் பகிர்ந்து கொள்ளலாம்.
            </p>
            <p className="text-sm sm:text-base text-amber-700 italic font-medium">
              "Our executive committee members guide and lead the organization with dedication. You can directly contact them to share your ideas, feedback, and valuable suggestions."
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {executiveMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden bg-white border-2 border-amber-200 hover:border-red-700 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                      <img
                        src={member.image}
                        alt={`${member.englishName} - Executive Committee Member - Tamilaga Vettri Kazhagam TVK - ${member.address}`}
                        title={`${member.englishName} - Executive Committee Member - TVK - Contact: ${member.phone}`}
                        className="w-full h-full object-cover"
                        width="300"
                        height="300"
                        decoding="async"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = "none";
                          img.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-center"><div class="text-gray-500"><div class="text-4xl mb-2">👤</div><p class="text-xs text-gray-400">Image Placeholder</p></div></div>';
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                      {/* Name */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-xs sm:text-sm text-red-700 font-semibold">{member.englishName}</p>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-1 flex-shrink-0 rounded-full bg-amber-500"></div>
                        <p className="text-xs sm:text-sm text-gray-600">{member.address}</p>
                      </div>

                      {/* Phone Number */}
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 flex-shrink-0">📞</div>
                        <p className="text-xs sm:text-sm text-gray-900 font-medium">{member.phone}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 sm:gap-3 pt-2">
                        <Button
                          onClick={() => handleCall(member.phone)}
                          className="flex-1 bg-red-700 hover:bg-red-800 text-white font-bold py-2 sm:py-2 rounded flex items-center justify-center gap-2 transition-colors text-sm"
                        >
                          <Phone size={16} />
                          <span className="hidden sm:inline">Call</span>
                        </Button>
                        <Button
                          onClick={() => handleWhatsApp(member.phone)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-2 rounded flex items-center justify-center gap-2 transition-colors text-sm"
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
            <CarouselPrevious className="hidden md:flex absolute left-0 top-1/3 transform -translate-y-1/2 -translate-x-12 lg:-translate-x-16 border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white" />
            <CarouselNext className="hidden md:flex absolute right-0 top-1/3 transform -translate-y-1/2 translate-x-12 lg:translate-x-16 border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white" />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8 flex-wrap">
            {executiveMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "bg-red-800 w-3 h-3"
                    : "bg-amber-300 hover:bg-amber-400 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-10 sm:mt-12 max-w-4xl mx-auto px-4">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            ஒருங்கிணைந்த சமூக பணிக்காக நாம் எல்லாரும் ஒன்றாக செயல்பட்டு வருகின்றோம்.
          </p>
          <p className="text-sm sm:text-base text-amber-700 italic font-medium">
            "Together, we work united for integrated community development and social progress."
          </p>
        </div>
      </div>
    </section>
  );
}
