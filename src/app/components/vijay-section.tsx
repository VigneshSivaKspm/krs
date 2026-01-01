export function VijaySection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-neutral-950">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-700"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              A Leader, <span className="text-red-700">An Inspiration</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-yellow-500 mb-8 sm:mb-12 font-bold">
              Thalapathy Vijay
            </h3>
{/* Right Image */}
          <div className="flex items-center justify-center">
            <img
              src="/assets/vijay.png"
              alt="Thalapathy Vijay"
              className="w-full max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>
            <div className="space-y-6 sm:space-y-8 text-white">
              <div className="p-4 sm:p-6 bg-black border-2 border-neutral-800">
                <h4 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-red-700 font-bold">Early Life</h4>
                <ul className="space-y-2 text-base sm:text-lg text-white/80">
                  <li>• Born in Chennai, Tamil Nadu</li>
                  <li>• Son of S. A. Chandrasekhar, film director</li>
                </ul>
              </div>

              <div className="p-4 sm:p-6 bg-black border-2 border-neutral-800">
                <h4 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-red-700 font-bold">Cinema Journey</h4>
                <ul className="space-y-2 text-base sm:text-lg text-white/80">
                  <li>• Began acting as a child</li>
                  <li>• Became one of Tamil cinema's biggest stars</li>
                  <li>• Known for socially conscious films</li>
                </ul>
              </div>

              <div className="p-4 sm:p-6 bg-black border-2 border-neutral-800">
                <h4 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-red-700 font-bold">Political Vision & TVK Formation</h4>
                <ul className="space-y-2 text-base sm:text-lg text-white/80">
                  <li>• Founded Tamilaga Vettri Kazhagam (TVK) in 2024</li>
                  <li>• Focused on transparency, social justice, and youth empowerment</li>
                  <li>• Inspires young leaders across Tamil Nadu</li>
                </ul>
              </div>

              <div className="bg-black border-l-4 border-yellow-500 p-4 sm:p-6 mt-8 sm:mt-12">
                <p className="text-lg sm:text-xl md:text-2xl mb-2 text-white">
                  எல்லா ஆட்சியும் மக்கள் நலனுக்காகவே இருக்க வேண்டும்
                </p>
                <p className="text-base sm:text-lg text-yellow-500 italic">
                  "Every governance must serve the people."
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
