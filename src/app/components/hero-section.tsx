export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-12 lg:pb-16">
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
                  alt="Text" 
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
            </div>

            

            
          </div>
  {/* Position Badge */}
            <div className="pt-2 sm:pt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2 bg-red-700 rounded">
                <span className="text-sm sm:text-base text-white font-semibold">Town Panchayat Secretary</span>
              </div>
            </div>

          {/* Right Image & Name Section */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-8">
            {/* Image */}
            <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/20 to-yellow-500/20 blur-2xl"></div>
              
              
              {/* Image */}
              <img 
                src="/assets/saravanan.png"
                alt="K.R.Saravanan"
                className="relative w-full h-full object-cover rounded-full border-2 border-red-600/30 shadow-2xl"
              />
            </div>

          
            {/* Name - KRS Format Below Image */}
            <div className="space-y-2 sm:space-y-3 text-center">
              <div className="flex flex-row items-center justify-center gap-8 sm:gap-16">
                <div className="flex flex-col items-center gap-1">
                  <h1 className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                    K
                  </h1>
                  <span className="text-xs text-gray-400 font-medium">Kasipalayam</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <h1 className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
                    R
                  </h1>
                  <span className="text-xs text-gray-400 font-medium">Ramalingam</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <h1 className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                    S
                  </h1>
                  <span className="text-xs text-gray-400 font-medium">Saravanakumar</span>
                </div>
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