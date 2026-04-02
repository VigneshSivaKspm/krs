export function HeroSection() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-0 sm:pt-4 lg:pt-8 pb-6 sm:pb-12 lg:pb-16"
      aria-label="K.R. Saravanakumar - TVK Town Panchayat Secretary Introduction"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient blobs */}
        <div className="absolute top-20 right-10 w-60 h-60 sm:w-80 sm:h-80 bg-red-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 sm:w-80 sm:h-80 bg-amber-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12 lg:gap-16">
          
          {/* Left Content Section */}
          <div className="flex-1 space-y-4 sm:space-y-8 text-center lg:text-left">
            
            {/* Flag and Text Image */}
            <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4">
             
              <div className="bg-white px-4 sm:px-6 py-1 sm:py-2 rounded-lg">
                <img 
                  src="/assets/text.png" 
                  alt="Tamilaga Vetri Kazhagam TVK Logo - தமிழக வெற்றி கழகம் - Political Party Logo" 
                  title="Tamilaga Vetri Kazhagam - TVK - Tamil Nadu Political Party"
                  className="h-16 sm:h-20 w-auto object-contain"
                  loading="eager"
                  width="240"
                  height="80"
                  decoding="async"
              />
              </div>
            </div>

            

            
          </div>
 

          {/* Right Image & Name Section */}
          <div className="flex-1 flex flex-col items-center justify-center gap-1 sm:gap-2">
            
            {/* Top Images Row - Anandha, Sengottayan & Pradeepkumar */}
            <div className="flex items-center justify-between w-full px-0">
              {/* Left Top - Anandha Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500/15 to-red-600/15 blur-2xl"></div>
                <img 
                  src="/assets/Aanandh.jpeg"
                  alt="Anandha - Tamilaga Vettri Kazhagam TVK Leader - Tamil Nadu Political Organization Member"
                  title="Anandha - TVK Leadership Member - Tamilaga Vettri Kazhagam"
                  className="relative w-full h-full object-cover rounded-full border-2 border-red-600/30 shadow-xl"
                  loading="eager"
                  width="300"
                  height="300"
                  decoding="async"
                />
              </div>
              
              {/* Center-Left Top - Kasengottayan Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/15 to-yellow-500/15 blur-2xl"></div>
                <img 
                  src="/assets/K-A-Sengottayan.webp"
                  alt="K.A. Sengottayan - Chief Coordinator Tamilaga Vettri Kazhagam TVK - Tamil Nadu Political Leader"
                  title="K.A. Sengottayan - TVK Chief Coordinator - Tamilaga Vettri Kazhagam Leadership"
                  className="relative w-full h-full object-cover rounded-full border-2 border-red-600/30 shadow-xl"
                  loading="eager"
                  width="300"
                  height="300"
                  decoding="async"
                />
              </div>
              
              {/* Right Top - Pradeepkumar Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0 bg-gradient-to-br from-red-600/80 to-yellow-500/80 rounded-full overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/15 to-yellow-500/15 blur-2xl"></div>
                <img 
                  src="/assets/Pradeepkumar.png"
                  alt="A. Pradeep Kumar - Erode West District Secretary Tamilaga Vettri Kazhagam TVK - Tamil Nadu Political Organization"
                  title="A. Pradeep Kumar - TVK Erode West District Secretary - Tamilaga Vettri Kazhagam Leadership"
                  className="relative w-full h-full object-contain rounded-full border-2 border-red-600/30 shadow-xl scale-150 origin-top"
                  loading="eager"
                  width="300"
                  height="300"
                  decoding="async"
                />
              </div>
            </div>

            {/* Center Image - Saravanakumar */}
            <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/20 to-yellow-500/20 blur-2xl"></div>
              
              
              {/* Image */}
              <img 
                src="/assets/saravanan.png"
                alt="K.R. Saravanakumar - KRS - TVK Town Panchayat Secretary Kasipalayam Gobichettipalayam Erode District Tamil Nadu - சரவணகுமார் - Tamilaga Vettri Kazhagam"
                title="K.R. Saravanakumar - KRS - Saravanakumar - Saravanan - சரவணகுமார் - TVK Political Leader Erode"
                className="relative w-full h-full object-cover rounded-full border-2 border-red-600/30 shadow-2xl"
                itemProp="image"
                loading="eager"
                width="400"
                height="400"
                decoding="async"
              />
            </div>

          
            {/* Name - KRS Format Below Image */}
            <div className="space-y-2 sm:space-y-3 text-center">
              {/* Hidden H1 for SEO */}
              <h1 className="sr-only" itemProp="name">
                K.R. Saravanakumar - KRS - TVK Town Panchayat Secretary Kasipalayam Gobichettipalayam Erode - சரவணகுமார் - Saravanakumar - Saravanan
              </h1>
              
              <div className="flex flex-row items-center justify-center gap-8 sm:gap-16" aria-label="KRS - Kasipalayam Ramalingam Saravanakumar">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-600" aria-hidden="true">
                    K
                  </span>
                  <span className="text-xs text-gray-600 font-medium">Kasipalayam</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <span className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500" aria-hidden="true">
                    R
                  </span>
                  <span className="text-xs text-gray-600 font-medium">Ramalingam</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <span className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-600" aria-hidden="true">
                    S
                  </span>
                  <span className="text-xs text-gray-600 font-medium" itemProp="givenName">Saravanakumar</span>
                </div>
              </div>
            </div>
            {/* Position Badge */}
            <div className="pt-1 sm:pt-2 flex justify-center px-2">
              <div className="inline-flex items-center justify-center px-2 sm:px-4 py-1 sm:py-1.5 bg-[#991B1B] rounded text-center shadow-lg">
                <span className="text-xs sm:text-sm text-white font-semibold line-clamp-2" itemProp="jobTitle">பேரூராட்சி கழக செயலாளர் காசிபாளையம்</span>
              </div>
            </div>
            
            {/* Tagline */}
            <div className="space-y-2 sm:space-y-4 text-center lg:text-center">
              <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                ஆட்சி அல்ல, அர்ப்பணிப்பு
              </h2>
              <p className="text-sm sm:text-xl text-gray-600 font-light">
                Governance is Not Power, It is Responsibility
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}