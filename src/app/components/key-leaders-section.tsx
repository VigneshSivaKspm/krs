import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";

const leaders = [
  {
    name: "டாக்டர் பி. ஆர். அம்பேத்கர்",
    englishName: "Dr. B. R. Ambedkar",
    role: "Father of the Indian Constitution",
    shortBio: [
      "சாதி அடிப்படையிலான பாகுபாடுகளுக்கு எதிராக போராடிய, இந்திய அரசியலமைப்பின் தந்தை.",
      "சமூக நீதிக்கான போராட்டத்தில் மிகப்பெரிய புரட்சியாளராக திகழ்ந்தார்.",
      "ஒவ்வொரு இந்தியருக்கும் சம உரிமைகளை வழங்கும் நோக்கத்தை ஏற்படுத்தினார்.",
    ],
    englishBio: "Fought against caste discrimination and regarded as the Father of the Indian Constitution. A revolutionary in the struggle for social justice, Ambedkar's vision ensures equality for all.",
    image: "/leaders/ambedkar.jpg",
  },
  {
    name: "பெரியார் ஈ. வே. ராமசாமி",
    englishName: "Periyar E. V. Ramasamy",
    role: "Social Reformer",
    shortBio: [
      "சமூக சீர்திருத்த வீரர் மற்றும் தன்னலமற்ற போராளி.",
      "தலித் விடுதலை, சமத்துவம் மற்றும் மதச்சார்பின்மைக்கு ஆற்றல் அளித்தவர்.",
      "பெண்கள் உரிமைகள், சமத்துவம் மற்றும் அற்றவர்களுக்கு ஆதரவான சமூக மாற்றத்தின் அடிப்படையாளர்.",
    ],
    englishBio: "A social reformer and fearless activist, Periyar empowered Dalits, promoted equality and women's rights, and inspired social change based on rationalism and justice.",
    image: "/leaders/evrperiyar.webp",
  },
  {
    name: "காமராஜர்",
    englishName: "K. Kamaraj",
    role: "Education Revolutionary",
    shortBio: [
      "தமிழ்நாட்டின் கல்வி புரட்சியாளர்.",
      "கல்வி, தொழில்நுட்ப வளர்ச்சி மற்றும் பொதுத்திட்டங்கள் மூலம் சமூக முன்னேற்றத்தை உறுதிப்படுத்தினார்.",
      "தொழிற்சாலைகள் மற்றும் திட்டங்கள் மூலம் பொருளாதார வளர்ச்சியையும் மக்களுக்கு வழங்கினார்.",
    ],
    englishBio: "The architect of Tamil Nadu's education revolution. Through schools and public programs, Kamaraj brought knowledge and economic opportunities to every citizen.",
    image: "/leaders/kamarajar.jpg",
  },
  {
    name: "வேலு நாச்சியார்",
    englishName: "Velu Nachiyar",
    role: "First Female Ruler of India",
    shortBio: [
      "இந்தியாவின் முதல் பெண்மணி அரசு தலைவர்.",
      "அடிமைத்தனத்திற்கு எதிராக குரல் கொடுத்த போராளி.",
      "மகளிரின் தன்னம்பிக்கையையும் கட்சியின் சேவை எண்ணத்தையும் ஊக்கப்படுத்தினார்.",
    ],
    englishBio: "India's first female ruler and a fearless warrior against slavery. Velu Nachiyar's courage inspires women's empowerment and dedicated public service.",
    image: "/leaders/velunachiyar.jpg",
  },
  {
    name: "அஞ்சலை அம்மாள்",
    englishName: "Anjalai Ammal",
    role: "Women's Rights Advocate",
    shortBio: [
      "சமூக சேவை மற்றும் மகளிர் உரிமைக்கான பங்களிப்பு.",
      "பெண்களின் கல்வி, சமூகநல திட்டங்கள் மற்றும் சமூக அமைதிக்கு முக்கிய பங்களிப்பாளராக இருந்தார்.",
    ],
    englishBio: "Dedicated to social service and women's rights, Anjalai Ammal laid the foundation for women's education and social welfare initiatives.",
    image: "/leaders/anjalaiammal.jpg",
  },
];

export function KeyLeadersSection() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leaders[0] | null>(null);
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
    <section id="leaders" className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
            கொள்கை முன்னோடி தலைவர்கள்
          </h2>
          <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-red-700 font-bold">Key Ideological Leaders</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 sm:mb-8"></div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 text-left px-4">
            <p className="text-sm sm:text-base text-white/80">
              தமிழக வெற்றி கழகத்தின் கொள்கை மற்றும் சிந்தனை முன்மாதிரிகளாக அமைந்த சில முக்கிய தலைவர்களின் வரலாற்றுப் பாதைகள் மற்றும் அவர்களின் தியாகம் நமக்கு ஒவ்வொரு நாளும் ஊக்கமாக உள்ளது.
            </p>
            <p className="text-sm sm:text-base text-yellow-500 italic">
              "The historical paths and sacrifices of key leaders who shaped Tamilaga Vettri Kazhagam's ideology inspire us every day."
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {leaders.map((leader, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden group bg-neutral-950 border-2 border-neutral-800 hover:border-red-700 transition-colors h-full">
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img
                        src={leader.image}
                        alt={leader.englishName}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80">
                        <span className="inline-block px-3 py-1 bg-red-700 text-xs sm:text-sm text-white font-bold">
                          {leader.role}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">{leader.name}</h3>
                      <p className="text-base sm:text-lg text-yellow-500 mb-3 sm:mb-4">{leader.englishName}</p>
                      <Button
                        onClick={() => setSelectedLeader(leader)}
                        variant="outline"
                        className="w-full border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold transition-colors"
                      >
                        Read More
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex absolute left-0 top-1/3 transform -translate-y-1/2 -translate-x-12 lg:-translate-x-16 border-2 border-red-700 hover:bg-red-700" />
            <CarouselNext className="hidden md:flex absolute right-0 top-1/3 transform -translate-y-1/2 translate-x-12 lg:translate-x-16 border-2 border-red-700 hover:bg-red-700" />
          </Carousel>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {leaders.map((_, index) => (
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

        <div className="text-center mt-10 sm:mt-12 max-w-4xl mx-auto px-4">
          <p className="text-sm sm:text-base text-white/70 mb-2">
            இந்த தலைவர்கள் தமிழ்நாட்டின் ஒவ்வொரு பகுதியிலும் சமூகநீதிக்கான கொள்கைகள், சமத்துவம் மற்றும் மனிதநேயத்தின் அடிப்படையில் பணியாற்ற நமக்கு ஆற்றல் அளிக்கின்றனர்.
          </p>
          <p className="text-sm sm:text-base text-yellow-500/70 italic">
            "These leaders inspire us to work for social justice, equality, and humanity across Tamil Nadu."
          </p>
        </div>
      </div>

      {/* Leader Detail Modal */}
      <Dialog open={!!selectedLeader} onOpenChange={() => setSelectedLeader(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-black border-2 border-red-700 mx-2 sm:mx-4 p-4 sm:p-6 rounded-lg w-[calc(100%-1rem)] sm:w-auto">
          {selectedLeader && (
            <>
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-2xl text-white text-center sm:text-left">
                  {selectedLeader.name}
                  <br />
                  <span className="text-base sm:text-xl text-yellow-500">{selectedLeader.englishName}</span>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Detailed information about {selectedLeader.englishName}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 sm:space-y-4">
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.englishName}
                  className="w-full h-40 sm:h-64 object-cover border-2 border-neutral-800 rounded"
                />
                <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-red-700 text-xs sm:text-sm text-white font-bold rounded">
                  {selectedLeader.role}
                </div>
                <div className="space-y-2">
                  {selectedLeader.shortBio.map((bio, idx) => (
                    <p key={idx} className="text-xs sm:text-base text-white/90 leading-relaxed">{bio}</p>
                  ))}
                </div>
                <p className="text-xs sm:text-base text-yellow-500 italic border-l-4 border-yellow-500 pl-3 sm:pl-4">
                  {selectedLeader.englishBio}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
