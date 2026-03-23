import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";

const leaders = [
  {
    name: "டாக்டர் பி. ஆர். அம்பேத்கர்",
    englishName: "Dr. B. R. Ambedkar",
    role: "Father of the Indian Constitution & Social Reformer",
    shortBio: [
      "பல்வேறு சமூக குழுக்களுக்கான ஒற்றுமை, சமத்துவம் மற்றும் சமாஜ நீதி ஆகியவற்றிற்காக வாழ்ந்தார்.", 
      "இந்திய அரசியலமைப்பின் முக்கிய கட்டுமானக் குழுவின் தலைவர் மற்றும் முதல்வரான சட்ட அமைச்சர் ஆவார்.", 
      "சமூக மற்றும் சட்ட ரீதியான பாகுபாடுகளுக்கு எதிராகப் போராடி ஒடுக்கப்பட்டவர்களின் உரிமைகளை விருத்தி செய்தார்."
    ],
    englishBio: "Dr. B. R. Ambedkar was a leading Indian social reformer and the principal architect of the Indian Constitution, who fought against caste discrimination and championed social justice, equality and empowerment of marginalized communities.",
    image: "/leaders/ambedkar.jpg",
  },
  {
    name: "பெரியார் ஈ. வே. ராமசாமி",
    englishName: "Periyar E. V. Ramasamy",
    role: "Social Reformer & Dravidian Movement Leader",
    shortBio: [
      "சமாதானம், சமத்துவம் மற்றும் புதுமைப் பார்வையை ஆதரித்து சமூக சொந்தக் சிந்தனையை உருவாக்கினார்.", 
      "சுயமரியாதை இயக்கத்தை தொடங்கி சாதி அடிப்படையிலான ஒழுக்கத்தை எதிர்த்து போராடினார்.", 
      "பெண்களின் உரிமைகள், சம சாதாரண வாழ்க்கை மற்றும் மதக்கூட structures‑ஐ விமர்சித்து சமூக மாற்றம் தூண்டினார்.",
    ],
    englishBio: "Periyar E. V. Ramasamy was a prominent Indian social reformer and founder of the Self‑Respect Movement. He campaigned against caste inequality and religious orthodoxy and promoted rationalism, self‑respect and gender equality through social reform efforts.",
    image: "/leaders/evrperiyar.webp",
  },
  {
    name: "காமராஜர்",
    englishName: "K. Kamaraj",
    role: "Education Reformer & Politician",
    shortBio: [
      "தமிழ்நாட்டின் கல்வி முன்னேற்றத்தில் முக்கிய பங்கு வகித்தார்.", 
      "பள்ளிகள் மற்றும் பொது கல்வி மூலம் சமூக முன்னேற்றத்தை ஊக்குவித்தார்.", 
      "ஊழல் ஒழிப்பு மற்றும் பொதுத்திட்டங்களை மேம்படுத்தி மக்கள் நலன் குறித்து பணியாற்றினார்.",
    ],
    englishBio: "K. Kamaraj was a key Indian political leader and education reformer who strengthened public schooling and uplifted educational and social standards in Tamil Nadu.",
    image: "/leaders/kamarajar.jpg",
  },
  {
    name: "வேலு நாச்சியார்",
    englishName: "Velu Nachiyar",
    role: "First Queen to Fight British Rule",
    shortBio: [
      "இந்தியாவில் பிரிட்டிஷ் ஆட்சி எதிர்ப்பு யுத்தத்தில் முதல் பெண்மணி அரசியல் போராளி.", 
      "கோமுத்ரில் தனது ராஜ்யத்தை நிர்வகித்து சுதந்திரப் போராட்டத்தில் பங்கு கொண்டார்.", 
      "பெண்களின் தன்னம்பிக்கை மற்றும் விடுதலைக்கான சிந்தனையை ஊக்க வைத்தார்.",
    ],
    englishBio: "Velu Nachiyar was an Indian queen and the first female ruler to fight against British colonial forces, inspiring women’s empowerment and resistance against oppression.",
    image: "/leaders/velunachiyar.jpg",
  },
  {
    name: "அஞ்சலை அம்மாள்",
    englishName: "Anjalai Ammal",
    role: "Women's Rights Advocate",
    shortBio: [
      "பெண்களின் கல்வி மற்றும் சமூக நலனுக்கான பணி மூலம் மக்களுக்கு சேவை செய்தார்.", 
      "மகளிர் உரிமைகள், சமத்துவம் மற்றும் சமூக மேம்பாடு குறித்து விழிப்புணர்வு ஏற்படுத்தினார்.",
    ],
    englishBio: "Anjalai Ammal was known for her dedicated work in advocating women’s rights and social welfare, promoting education and equality in society.",
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
