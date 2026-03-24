import { Card } from "./ui/card";

const organizationalLeaders = [
  {
    id: 1,
    name: "N. ஆனந்த்",
    englishName: "N. Aanandh",
    fullName: "N. ஆனந்த்",
    position: "கழக பொதுச் செயலாளர்",
    englishPosition: "General Secretary",
     image: "/assets/Aanandh.jpeg",
  },
  {
    id: 2,
    name: "K. A. செங்கோட்டையன்",
    englishName: "K. A. Sengottayan",
    fullName: "K. A. செங்கோட்டையன்",
    position: "மாநில நிர்வாகக் குழு கழக ஒருங்கிணைப்பாளர் மற்றும் கழக தலைமை ஒருங்கிணைப்பாளர்",
    englishPosition: "Chief Coordinator & West Zone Coordinator",
    image: "/assets/K-A-Sengottayan.webp",
  },
  {
    id: 3,
    name: "M. பாலாஜி",
    englishName: "M. Balaji",
    fullName: "M. பாலாஜி",
    position: "ஈரோடு மாநகர மாவட்டக் கழகச் செயலாளர்",
    englishPosition: "Erode Central District Secretary",
    image: "/assets/M-Balaji.png",
  },
  {
    id: 4,
    name: "A. பிரதீப் குமார்",
    englishName: "A. Pradeep Kumar",
    fullName: "A. பிரதீப் குமார்",
    position: "ஈரோடு மேற்கு மாவட்டக் கழகச் செயலாளர்",
    englishPosition: "Erode West District Secretary",
    image: "/assets/Pradeepkumar.png",
  },
];

export function OrganizationalLeadersSection() {

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

        {/* Grid Layout - All 4 Cards Visible on Initial Load */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {organizationalLeaders.map((leader, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-neutral-950 border-2 border-red-700/50 hover:border-red-500 transition-all duration-300 h-full flex flex-col"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      if (img.parentElement) {
                        img.parentElement.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center text-center"><div class="text-white"><div class="text-4xl mb-2">👤</div><p class="text-xs text-gray-400">Photo</p></div></div>';
                      }
                    }}
                  />
                </div>

                {/* Position Badge */}
                <div className="bg-gradient-to-r from-red-700 to-red-600 px-3 sm:px-4 py-2 overflow-hidden">
                  <span className="text-white font-bold text-xs sm:text-sm block whitespace-nowrap animate-marquee">
                    {leader.position}
                  </span>
                  {leader.englishPosition && (
                    <p className="text-white text-xs mt-1 opacity-90 block whitespace-nowrap animate-marquee">
                      {leader.englishPosition}
                    </p>
                  )}
                </div>

                {/* Content */}
                <div className="px-3 sm:px-4 pb-3 flex-1 flex flex-col justify-between">
                  {/* Name */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white overflow-hidden">
                      <span className="inline-block whitespace-nowrap animate-marquee">
                        {leader.name}
                      </span>
                    </h3>
                    <p className="text-xs text-yellow-500 font-semibold line-clamp-1">
                      {leader.englishName}
                    </p>
                  </div>
                </div>
              </Card>
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
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
