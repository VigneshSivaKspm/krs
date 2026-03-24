export function HeroSection() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black pt-0 sm:pt-4 lg:pt-8 pb-6 sm:pb-12 lg:pb-16"
      aria-label="K.R. Saravanakumar - TVK Town Panchayat Secretary Introduction"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient blobs */}
        <div className="absolute top-20 right-10 w-60 h-60 sm:w-80 sm:h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 sm:w-80 sm:h-80 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
                  alt="Tamilaga Vettri Kazhagam TVK Logo - தமிழக வெற்றி கழகம்" 
                  title="Tamilaga Vettri Kazhagam - TVK"
                  className="h-16 sm:h-20 w-auto object-contain"
                  loading="eager"
                  width="200"
                  height="80"
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
                  alt="Anandha - TVK Leader"
                  title="Anandha - Tamilaga Vettri Kazhagam"
                  className="relative w-full h-full object-cover rounded-full border-2 border-red-600/30 shadow-xl"
                  loading="eager"
                  width="300"
                  height="300"
                />
              </div>
              
              {/* Center-Left Top - Kasengottayan Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/15 to-yellow-500/15 blur-2xl"></div>
                <img 
                  src="/assets/K-A-Sengottayan.webp"
                  alt="K.A. Sengottayan - TVK Leader"
                  title="K.A. Sengottayan - Tamilaga Vettri Kazhagam"
                  className="relative w-full h-full object-cover rounded-full border-2 border-red-600/30 shadow-xl"
                  loading="eager"
                  width="300"
                  height="300"
                />
              </div>
              
              {/* Right Top - Pradeepkumar Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0 bg-gradient-to-br from-red-600/80 to-yellow-500/80 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/15 to-yellow-500/15 blur-2xl"></div>
                <img 
                  src="/assets/Pradeepkumar.png"
                  alt="Pradeepkumar - TVK Leader"
                  title="Pradeepkumar - Tamilaga Vettri Kazhagam"
                  className="relative w-full h-full object-contain rounded-full border-2 border-red-600/30 shadow-xl"
                  loading="eager"
                  width="300"
                  height="300"
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
                alt="K.R. Saravanakumar (KRS) - TVK Town Panchayat Secretary Kasipalayam Gobichettipalayam Erode - சரவணகுமார்"
                title="K.R. Saravanakumar - Saravanakumar - Saravanan - KRS - சரவணகுமார்"
                className="relative w-full h-full object-cover rounded-full border-2 border-red-600/30 shadow-2xl"
                itemProp="image"
                loading="eager"
                width="400"
                height="400"
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
                  <span className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500" aria-hidden="true">
                    K
                  </span>
                  <span className="text-xs text-gray-400 font-medium">Kasipalayam</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <span className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400" aria-hidden="true">
                    R
                  </span>
                  <span className="text-xs text-gray-400 font-medium">Ramalingam</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <span className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500" aria-hidden="true">
                    S
                  </span>
                  <span className="text-xs text-gray-400 font-medium" itemProp="givenName">Saravanakumar</span>
                </div>
              </div>
            </div>
 {/* Position Badge */}
            <div className="pt-2 sm:pt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2 bg-red-700 rounded">
                <span className="text-sm sm:text-base text-white font-semibold" itemProp="jobTitle">கழக பேரூராட்சி செயலாளர்</span>
              </div>
            </div>
            {/* Tagline */}
            <div className="space-y-2 sm:space-y-4 text-center lg:text-center">
              <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white leading-tight">
                ஆட்சி அல்ல, அர்ப்பணிப்பு
              </h2>
              <p className="text-sm sm:text-xl text-gray-300 font-light">
                Governance is Not Power, It is Responsibility
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}