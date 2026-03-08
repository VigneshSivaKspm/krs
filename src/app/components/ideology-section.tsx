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
    <section id="ideology" className="py-16 sm:py-20 lg:py-24 bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            கொள்கை <br /> <span className="text-red-700">Our Guiding Principles</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="group bg-black border-2 border-neutral-800 hover:border-red-700 p-6 sm:p-8 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-700 flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{principle.tamil}</h3>
                  <p className="text-sm sm:text-base text-yellow-500">{principle.english}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
