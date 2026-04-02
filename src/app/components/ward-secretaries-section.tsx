import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import { Phone } from "lucide-react";

const wardSecretaries = [
  {
    id: 1,
    name: "D. யுவராஜ்",
    englishName: "D. Yuvaraj",
    ward: "Ward 1",
    fatherName: "G. தேவராஜ்",
    address: "12 B, கருப்பராயன் கோவில் தெரு, கிருஷ்ணா நகர், காசிபாளையம் (P.O), கோபிச்செட்டிபாளையம்",
    phone: "7358816317",
    image: "/assets/Yuvaraj.jpeg",
  },
  {
    id: 2,
    name: "ஞா. அருண் சிவா",
    englishName: "Gna. Arun Siva",
    ward: "Ward 2",
    address: "1/1, அரசு பள்ளி எதிரில், காமராஜ் நகர், காசிபாளையம் – 638454",
    phone: "8675833983",
    image: "/assets/Arun Siva.jpeg",
  },
  {
    id: 3,
    name: "பிரகாஷ்",
    englishName: "Prakash",
    ward: "Ward 4",
    address: "ஓடக்காடு, காசிபாளையம், கோபிச்செட்டிபாளையம், ஈரோடு",
    phone: "9791910246",
    image: "/assets/prakash.jpeg",
  },
  {
    id: 4,
    name: "K. குணசேகர்",
    englishName: "K. Gunasekhar",
    ward: "Ward 5",
    address: "பள்ளம் பாளையம் ரோடு, சக்தி நகர், கோபிச்செட்டிபாளையம், ஈரோடு – 638454",
    phone: "9360192177",
    image: "/assets/gunasekaran.jpeg",
  },
  {
    id: 5,
    name: "A. சுரேஷ்",
    englishName: "A. Suresh",
    ward: "Ward 6",
    address: "9/5, நேரு தெரு, காந்தி நகர், காசிபாளையம் (P.O), கோபிச்செட்டிபாளையம் (T.K), ஈரோடு – 638454",
    phone: "9894595936",
    image: "/assets/A-Suresh.jpeg",
  },
  {
    id: 6,
    name: "சண்முகசுந்தரம் M",
    englishName: "M. Sanmugasundaram",
    ward: "Ward 7",
    address: "12, நஞ்சை கவுண்டர் ஸ்ட்ரீட், கா.கணபதிபாளையம், காசிபாளையம் (P.O), கோபிச்செட்டிபாளையம் (T.K), ஈரோடு (D.T) – 638454",
    phone: "9488839252",
    image: "/assets/sanmugasundaram.jpeg",
  },
  {
    id: 7,
    name: "R. சிவகுமார்",
    englishName: "R. Sivakumar",
    ward: "Ward 8",
    fatherName: "K. ராசன்",
    address: "116/170, இந்திரா நகர், மதுரைவீரன் கோவில் தெரு, காசிபாளையம் – 638454, கோபி (T.K), ஈரோடு மாவட்டம்",
    phone: "9894595936",
    image: "/assets/Sivakumar.jpeg",
  },
  {
    id: 8,
    name: "கோவ்ரிசங்கர்",
    englishName: "Gowrishankar",
    ward: "Ward 13",
    address: "28 K பிள்ளையார் கோயில் வீதி, காசிபாளையம், கோபிச்செட்டிபாளையம், ஈரோடு – 638454",
    phone: "9360192177",
    image: "/assets/gowrishankar.jpeg",
  },
  {
    id: 9,
    name: "V. ரவி பிரசாந்த்",
    englishName: "V. Ravi Prasanth",
    ward: "Ward 14",
    address: "9/7, காளியப்பா தெரு, காசிபாளையம் (P.O), கோபி (T.K), ஈரோடு – 638454",
    phone: "8870229133",
    image: "/assets/Raviprasath.jpeg",
  },
  {
    id: 10,
    name: "மனோஜ்",
    englishName: "Manoj",
    ward: "Ward 15",
    address: "மாரியம்மன் கோவில் வீதி, எரம்பாளையம், கோபிச்செட்டிபாளையம், ஈரோடு",
    phone: "9360314140",
    image: "/assets/manoj.jpeg",
  },
];



export function WardSecretariesSection() {
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
    const cleanPhone = phone.replace(/\s/g, "");
    window.location.href = `tel:${cleanPhone}`;
  };

  const handleWhatsApp = (phone: string) => {
    const phoneNumber = phone.replace(/\s/g, "").replace("+91", "91");
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <section id="ward-secretaries" className="py-16 sm:py-20 lg:py-24 bg-[#7F1D1D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
            வார்டு செயலாளர்கள்
          </h2>
          <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-amber-400 font-bold">Ward Secretaries</p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6 sm:mb-8"></div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 text-left px-4">
            <p className="text-sm sm:text-base text-amber-100 leading-relaxed">
              ஒவ்வொரு வார்டின் நலனுக்காகவும் அர்ப்பணிப்புடன் பணியாற்றும் நமது வார்டு செயலாளர்கள். உங்கள் குறைகளைத் தெரிவிக்கவோ, ஆலோசனைகள் பெறவோ அல்லது உதவி கோரவோ இவர்களை நேரடியாகத் தொடர்பு கொள்ளலாம்.
            </p>
            <p className="text-sm sm:text-base text-amber-300 italic font-medium">
              "Our dedicated ward secretaries work tirelessly for the welfare of every ward. Please contact them directly to raise concerns, seek advice, or request assistance."
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-8">
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {wardSecretaries.map((secretary, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden bg-red-900/60 border-2 border-amber-400/30 hover:border-amber-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                      <img
                        src={secretary.image}
                        alt={`${secretary.englishName} - ${secretary.ward} Secretary - Tamilaga Vettri Kazhagam TVK - Kasipalayam - ${secretary.address}`}
                        title={`${secretary.englishName} - ${secretary.ward} Secretary - TVK - Contact: ${secretary.phone}`}
                        className="w-full h-full object-cover"
                        width="300"
                        height="300"
                        decoding="async"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = "none";
                          img.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-center"><div class="text-gray-500"><div class="text-4xl mb-2">👤</div><p class="text-xs text-gray-400">Photo</p></div></div>';
                        }}
                      />
                    </div>

                    {/* Ward Badge */}
                    <div className="bg-gradient-to-r from-[#991B1B] to-red-700 px-4 py-2">
                      <span className="text-white font-bold text-base">{secretary.ward}</span>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                      {/* Name */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-1">{secretary.name}</h3>
                        <p className="text-xs sm:text-sm text-amber-300 font-semibold">{secretary.englishName}</p>
                        {secretary.fatherName && (
                          <p className="text-xs text-amber-200/70 mt-1">தந்தை: {secretary.fatherName}</p>
                        )}
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-1 flex-shrink-0 rounded-full bg-amber-500"></div>
                        <p className="text-xs sm:text-sm text-amber-100">{secretary.address}</p>
                      </div>

                      {/* Phone Number */}
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 flex-shrink-0">📞</div>
                        <p className="text-xs sm:text-sm text-white font-medium">{secretary.phone}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 sm:gap-3 pt-2">
                        <Button
                          onClick={() => handleCall(secretary.phone)}
                          className="flex-1 bg-red-700 hover:bg-red-800 text-white font-bold py-2 sm:py-2 rounded flex items-center justify-center gap-2 transition-colors text-sm"
                        >
                          <Phone size={16} />
                          <span className="hidden sm:inline">Call</span>
                        </Button>
                        <Button
                          onClick={() => handleWhatsApp(secretary.phone)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-2 rounded flex items-center justify-center gap-2 transition-colors text-sm"
                        >
                          <img 
                            src="https://cdn-icons-png.flaticon.com/512/220/220236.png" 
                            alt="WhatsApp" 
                            className="w-4 h-4" 
                          />
                          <span className="hidden sm:inline">Chat</span>
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
            {wardSecretaries.map((_, index) => (
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
          <p className="text-sm sm:text-base text-amber-100 mb-2">
            உங்கள் பகுதியின் வளர்ச்சிக்கும், சமூக நீதிக்கும் பாடுபட நாங்கள் எப்போதும் தயாராக இருக்கிறோம்.
          </p>
          <p className="text-sm sm:text-base text-amber-300 italic font-medium">
            "We are always committed to the development of your locality and the cause of social justice."
          </p>
        </div>
      </div>
    </section>
  );
}
