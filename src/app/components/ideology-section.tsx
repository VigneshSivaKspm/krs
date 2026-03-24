import { Scale, Users, Eye, Shield, Ban, ShieldCheck } from "lucide-react";

const principles = [
  {
    tamil: "சமூக நீதியை மேம்படுத்துதல்",
    english: "Promoting Social Justice",
    icon: Scale,
  },
  {
    tamil: "சமத்துவத்தை உறுதி செய்தல்",
    english: "Ensuring Equality",
    icon: Users,
  },
  {
    tamil: "இளைஞர் முன்னேற்றம்",
    english: "Youth Empowerment",
    icon: Users,
  },
  {
    tamil: "பெண்கள் பாதுகாப்பு",
    english: "Women's Safety",
    icon: ShieldCheck,
  },
  {
    tamil: "போதையில்லா தமிழகம்",
    english: "Drug-Free Tamil Nadu",
    icon: Ban,
  },
  {
    tamil: "வெளிப்படையான ஆட்சியை முன்னெடுத்தல்",
    english: "Transparent Governance",
    icon: Eye,
  },
  {
    tamil: "ஊழல் ஒழிப்பு",
    english: "Anti-Corruption",
    icon: Shield,
  },
];

export function IdeologySection() {
  return (
    <section id="ideology" className="py-16 sm:py-20 lg:py-24 bg-[#7F1D1D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            கொள்கை <br /> <span className="text-amber-400">Our Guiding Principles</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 max-w-7xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="group bg-red-900/60 border-2 border-amber-400/30 hover:border-amber-400 hover:shadow-lg p-3 sm:p-4 transition-all duration-300 rounded-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-500 group-hover:bg-amber-400 flex items-center justify-center mb-2 sm:mb-3 rounded-lg transition-colors duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold mb-1 text-white line-clamp-2">{principle.tamil}</h3>
                  <p className="text-xs text-amber-300 font-medium line-clamp-1">{principle.english}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
