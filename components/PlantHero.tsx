'use client';

export default function PlantHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-50 via-emerald-100 to-orange-50 flex items-center justify-center overflow-hidden">
      {/* Enhanced background with floating recycling elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-teal-300 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-orange-200 animate-float delay-300"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-emerald-400 animate-float delay-500"></div>
        <div className="absolute top-1/4 left-1/3 w-20 h-20 rounded-full bg-orange-300 animate-float delay-700"></div>
        
        {/* Floating recycling icons */}
        <div className="absolute top-1/4 right-1/4 text-4xl animate-float delay-1000">♻️</div>
        <div className="absolute bottom-1/3 left-1/4 text-3xl animate-float delay-1200">🌱</div>
        <div className="absolute top-2/3 right-1/3 text-2xl animate-float delay-1400">🍃</div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left side - Enhanced text content */}
        <div className="lg:w-1/2 text-emerald-800 mb-12 lg:mb-0">
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeInUp delay-200">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700">
              Transforma
            </span>
            <br />
            <span className="text-gray-800">Residuos en</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
              Valor Real
            </span>
          </h1>
          
          <p className="text-gray-600 text-xl mb-8 max-w-lg leading-relaxed animate-fadeInUp delay-400">
            Cada botella, lata o papel que recicles se convierte en <strong className="text-emerald-600">tokens Civecoin</strong>. 
            <br/>¡1 Token = 1 Boliviano garantizado! 💰
          </p>

          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeInUp delay-600">
            <button
  onClick={() => (window.location.href = "http://localhost:3001/")}
  className="group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
>
  <span className="relative z-10 flex items-center">
    Comenzar a Ganar
    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
            
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Centro+de+Acopio+Civecoin+Cochabamba+Bolivia', '_blank')}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white text-emerald-700 border-2 border-emerald-300 hover:border-emerald-500 px-8 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center">
                📍 Ver Punto de Acopio
              </span>
            </button>
          </div>

          {/* Enhanced stats with visual indicators */}
          <div className="grid grid-cols-3 gap-6 animate-fadeInUp delay-800">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-emerald-800 mb-1">6+</div>
              <div className="text-emerald-600 text-sm">Materiales</div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">💎</div>
              <div className="text-2xl font-bold text-emerald-800 mb-1">1:1</div>
              <div className="text-emerald-600 text-sm">Token/Bs</div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">🌟</div>
              <div className="text-2xl font-bold text-emerald-800 mb-1">500+</div>
              <div className="text-emerald-600 text-sm">Usuarios</div>
            </div>
          </div>
        </div>

        {/* Right side - More impactful visual */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fadeInRight">
          <div className="relative">
            {/* Enhanced arch with gradient and effects */}
            <div className="w-96 h-[28rem] bg-gradient-to-br from-white via-emerald-50 to-green-100 rounded-t-full flex items-end justify-center pb-8 shadow-2xl border-4 border-gradient-to-r from-emerald-400 to-orange-400 animate-float relative overflow-hidden">
              
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-orange-200/20 rounded-t-full blur-xl"></div>
              
              {/* Floating recycling symbols inside arch */}
              <div className="absolute top-16 left-8 text-2xl opacity-30 animate-float delay-500">♻️</div>
              <div className="absolute top-24 right-12 text-xl opacity-40 animate-float delay-700">🌱</div>
              <div className="absolute top-40 left-16 text-lg opacity-30 animate-float delay-900">💚</div>
              
              {/* Enhanced plant container */}
              <div className="relative z-10">
                {/* Glowing pot with tokens */}
                <div className="relative w-28 h-20 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 rounded-xl mx-auto shadow-2xl animate-bounce-gentle delay-1000 overflow-hidden">
                  {/* Token shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                  {/* Token symbols on pot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-amber-900 font-bold text-sm">🪙 CIVECOIN</span>
                  </div>
                </div>
                
                {/* Enhanced plant with more dynamic movement */}
                <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 animate-sway">
                  {/* Main stem with gradient */}
                  <div className="w-3 h-20 bg-gradient-to-t from-emerald-700 to-emerald-500 mx-auto rounded-full shadow-lg"></div>
                  
                  {/* Dynamic leaves with better styling */}
                  <div className="absolute -top-6 -left-10 animate-sway delay-200">
                    <div className="w-20 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full transform -rotate-12 shadow-xl hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse delay-1000"></div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-10 -right-8 animate-sway delay-400">
                    <div className="w-18 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full transform rotate-12 shadow-xl hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse delay-1200"></div>
                    </div>
                  </div>
                  
                  {/* Top crown leaves */}
                  <div className="absolute -top-14 left-2 animate-sway delay-600">
                    <div className="w-14 h-10 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full transform rotate-45 shadow-lg hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  
                  <div className="absolute -top-18 left-4 animate-sway delay-800">
                    <div className="w-10 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full transform -rotate-12 shadow-md hover:scale-110 transition-transform duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced floating elements with recycling theme */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-80 animate-float delay-1200 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xs">🪙</span>
            </div>
            <div className="absolute top-16 -right-8 w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-70 animate-float delay-1400 flex items-center justify-center shadow-lg">
              <span className="text-white text-sm">♻️</span>
            </div>
            <div className="absolute bottom-8 -left-10 w-14 h-14 bg-gradient-to-br from-teal-300 to-emerald-400 rounded-full opacity-60 animate-float delay-1600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">1Bs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}