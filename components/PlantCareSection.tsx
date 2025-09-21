'use client';

export default function PlantCareSection() {
  const steps = [
    {
      icon: "🔍",
      title: "Identifica",
      description: "Separa y clasifica tus materiales reciclables por tipo"
    },
    {
      icon: "🚶‍♂️", 
      title: "Acércate al Lugar",
      description: "Lleva tu basura clasificada a uno de nuestros centros de acopio"
    },
    {
      icon: "💳",
      title: "Conecta tu Wallet",
      description: "Vincula tu billetera digital para recibir los tokens"
    },
    {
      icon: "🪙",
      title: "Recibe tus Tokens",
      description: "Obtén tokens Civecoin instantáneamente: 1 Token = 1 Boliviano"
    },
    {
      icon: "🏪",
      title: "Canjea en Empresas Aliadas",
      description: "Usa tus tokens en nuestra red de comercios afiliados"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-emerald-400"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-emerald-300"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-emerald-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main content area */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Text content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Convierte Residuos
              <br />
              En Dinero Real
            </h2>
            
            <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
              Nuestro proceso de reciclaje tokenizado es simple y efectivo. 
              Convierte tus residuos en valor económico mientras contribuyes 
              a un planeta más sostenible.
            </p>

            {/* Steps to start */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-emerald-200">
                Pasos para empezar a ganar:
              </h3>
              
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-fadeInUp" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0 animate-bounce-gentle" style={{ animationDelay: `${index * 300}ms` }}>
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                      <p className="text-emerald-200 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Comenzar a Reciclar
            </button>
          </div>
          
          {/* Right side - Simple value info and Bonus system */}
          <div className="space-y-6">
            
            {/* Simple token value - small, beautiful and representative */}
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full px-6 py-3 shadow-lg">
                <span className="text-white text-sm font-semibold flex items-center">
                  🪙 1 Token = 1 Bs 💰
                </span>
              </div>
            </div>

            {/* Bonus system */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
                🎁 Sistema de Bonos
              </h3>
              
              <div className="space-y-6">
                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-700 text-sm font-medium">Nivel Básico</span>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">+2 Tokens</span>
                  </div>
                  <div className="text-emerald-800 text-lg font-semibold mb-2">5kg acumulados</div>
                  <div className="w-full bg-emerald-200 rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-700 text-sm font-medium">Nivel Intermedio</span>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">+5 Tokens</span>
                  </div>
                  <div className="text-emerald-800 text-lg font-semibold mb-2">10kg acumulados</div>
                  <div className="w-full bg-emerald-200 rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '66%' }}></div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-700 text-sm font-medium">Nivel Avanzado</span>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">+10 Tokens</span>
                  </div>
                  <div className="text-emerald-800 text-lg font-semibold mb-2">25kg acumulados</div>
                  <div className="w-full bg-emerald-200 rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-100 rounded-xl border-2 border-emerald-300">
                <p className="text-emerald-800 text-sm text-center">
                  � <strong>Bonos acumulativos:</strong> Mientras más recicles, más bonos obtienes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white animate-fadeInUp delay-600">
            <div className="text-3xl font-bold text-emerald-300 mb-2">99%</div>
            <p className="text-emerald-200">Eficiencia de Reciclaje</p>
          </div>
          <div className="text-white animate-fadeInUp delay-800">
            <div className="text-3xl font-bold text-emerald-300 mb-2">10+</div>
            <p className="text-emerald-200">Centros de Acopio</p>
          </div>
          <div className="text-white animate-fadeInUp delay-1000">
            <div className="text-3xl font-bold text-emerald-300 mb-2">∞</div>
            <p className="text-emerald-200">Impacto Ambiental Positivo</p>
          </div>
        </div>
      </div>
    </section>
  );
}