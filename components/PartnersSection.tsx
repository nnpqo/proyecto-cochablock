'use client';

export default function PartnersSection() {
  const partners = [
    { 
      id: 1, 
      name: "Hupermall", 
      logo: "/Screenshot_From_2025-09-21_01-05-43-removebg-preview.png", 
      description: "Socio estratégico en reciclaje" 
    },
    { 
      id: 2, 
      name: "IC Norte", 
      logo: "/Screenshot_From_2025-09-21_01-06-07-removebg-preview.png", 
      description: "Innovación en sostenibilidad" 
    },
    { 
      id: 3, 
      name: "Fidalga", 
      logo: "/Screenshot_From_2025-09-21_01-06-28-removebg-preview.png", 
      description: "Gestión ambiental avanzada" 
    },
    { 
      id: 4, 
      name: "Hipermaxi", 
      logo: "/Screenshot_From_2025-09-21_01-08-05-removebg-preview.png", 
      description: "Economía circular" 
    }
  ];

  const testimonials = [
    {
      name: "María González",
      company: "Hupermall",
      text: "Civecoin ha transformado nuestra forma de gestionar los residuos en Cochabamba. Los tokens nos permiten incentivar el reciclaje de manera efectiva.",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Rivera", 
      company: "IC Norte",
      text: "Una plataforma innovadora que conecta sostenibilidad con economía real en nuestra ciudad. El valor 1:1 de los tokens genera confianza total.",
      avatar: "👨‍💼"
    },
    {
      name: "Ana Martínez",
      company: "Hipermaxi", 
      text: "La solución perfecta para empresas cochabambinas comprometidas con el medio ambiente. Nuestros empleados están muy motivados.",
      avatar: "👩‍🔬"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-emerald-50">
      <div className="container mx-auto px-6">
        
        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4 animate-fadeInUp">
            Empresas Aliadas
          </h2>
          <p className="text-emerald-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Trabajamos con las empresas más innovadoras para crear un ecosistema 
            de reciclaje tokenizado que beneficie a todos.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="group cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gradient-to-br from-white via-emerald-50 to-orange-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-5 hover:scale-105 p-8 text-center border border-white/50 hover:border-emerald-200 overflow-hidden backdrop-blur-sm">
                {/* Floating background elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-emerald-300/20 to-orange-300/20 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-orange-300/20 to-emerald-300/20 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-emerald-200/10 to-orange-200/10 rounded-full blur-2xl group-hover:rotate-180 transition-all duration-1000"></div>
                
                <div className="relative z-10">
                  {/* Image container with floating effect */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto relative">
                      {/* Glow effect behind image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-orange-400/30 rounded-2xl blur-lg scale-110 group-hover:scale-125 transition-all duration-500"></div>
                      
                      {/* Main image */}
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 filter group-hover:brightness-110 group-hover:contrast-110"
                      />
                      
                      {/* Floating particles */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-500 opacity-60"></div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 text-xl mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                    {partner.description}
                  </p>
                  
                  {/* Floating trust badge */}
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-emerald-200/50 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-emerald-700 text-xs font-semibold">Aliado Verificado</span>
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/20 via-orange-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section - improved styling */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 rounded-full px-6 py-3 mb-6">
              <span className="text-emerald-700 text-sm font-semibold">💬 Testimonios</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Lo que dicen nuestros <span className="text-emerald-600">aliados</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white via-emerald-50 to-green-100 rounded-3xl shadow-xl hover:shadow-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp border border-emerald-200/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-emerald-400/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-green-400/20 rounded-full animate-pulse delay-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl mr-4 shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">{testimonial.name}</h4>
                      <p className="text-emerald-600 text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex text-amber-400 text-lg">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white animate-fadeInUp">
          <h3 className="text-3xl font-bold mb-4">
            ¿Quieres ser nuestro aliado?
          </h3>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestra red de empresas comprometidas con la sostenibilidad 
            y descubre cómo puedes beneficiarte del reciclaje tokenizado.
          </p>
          <button className="bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contactar Equipo Comercial →
          </button>
        </div>

        {/* Footer section */}
        <div className="mt-20 pt-12 border-t border-emerald-200">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Company info */}
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold text-emerald-800 mb-4 animate-fadeInUp">Civecoin Cochabamba</h4>
              <p className="text-emerald-600 mb-6 leading-relaxed animate-fadeInUp delay-200">
                La plataforma líder en reciclaje tokenizado en Cochabamba. Convertimos residuos en valor, 
                creando un futuro más sostenible para nuestra ciudad.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 animate-fadeInUp delay-400">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-sm font-bold">📧</span>
                </div>
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-sm font-bold">📱</span>
                </div>
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-sm font-bold">🌐</span>
                </div>
              </div>
            </div>

            {/* Contact - Only icons */}
            <div className="animate-fadeInUp delay-800">
              <ul className="space-y-2 text-emerald-600">
                <li>📧 hola@civecoin.bo</li>
                <li>📱 +591 4 123 4567</li>
                <li>📍 Punto de Acopio</li>
                <li>🏢 Cochabamba, Bolivia</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-emerald-200 text-center text-emerald-500 text-sm animate-fadeInUp delay-1000">
            <p>&copy; 2024 Civecoin Cochabamba. Todos los derechos reservados. | Hecho con ❤️ en Bolivia</p>
          </div>
        </div>
      </div>
    </section>
  );
}