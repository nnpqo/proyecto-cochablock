'use client';

import { useState } from 'react';

export default function PartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState<any>(null);

  const partners = [
    { 
      id: 1, 
      name: "Hupermall", 
      logo: "/Screenshot_From_2025-09-21_01-05-43-removebg-preview.png", 
      description: "Centro comercial con cine y moda",
      canjes: {
        title: "Hupermall",
        subtitle: "Centro comercial, cine y tiendas de ropa",
        offers: [
          { 
            categoria: "Descuentos",
            items: [
              "15% desc. en tiendas de ropa",
              "20% desc. en boletos de cine",
              "10% desc. en food court"
            ]
          },
          {
            categoria: "Productos",
            items: [
              "Ropa y accesorios de moda",
              "Calzado deportivo y casual",
              "Productos de belleza y cuidado personal"
            ]
          },
          {
            categoria: "Servicios",
            items: [
              "Parking gratuito con tokens",
              "Descuentos acumulativos por compras",
              "Acceso preferencial en estrenos de cine"
            ]
          }
        ],
        minTokens: "8 tokens mínimo"
      }
    },
    { 
      id: 2, 
      name: "IC Norte", 
      logo: "/Screenshot_From_2025-09-21_01-06-07-removebg-preview.png", 
      description: "Supermercado familiar",
      canjes: {
        title: "Supermercado IC Norte",
        subtitle: "Productos frescos y de calidad",
        offers: [
          { 
            categoria: "Descuentos",
            items: [
              "12% desc. en toda la tienda",
              "18% desc. en productos frescos",
              "15% desc. en carnes y embutidos"
            ]
          },
          {
            categoria: "Productos",
            items: [
              "Frutas y verduras frescas",
              "Carnes, pollo y pescados",
              "Productos de panadería y lácteos"
            ]
          },
          {
            categoria: "Servicios",
            items: [
              "Horarios extendidos hasta las 22:00",
              "Sección de carnicería y fiambrería",
              "Canasta familiar a domicilio"
            ]
          }
        ],
        minTokens: "5 tokens mínimo"
      }
    },
    { 
      id: 3, 
      name: "Fidalga", 
      logo: "/Screenshot_From_2025-09-21_01-06-28-removebg-preview.png", 
      description: "Supermercado de barrio",
      canjes: {
        title: "Supermercado Fidalga",
        subtitle: "Tu supermercado de confianza",
        offers: [
          { 
            categoria: "Descuentos",
            items: [
              "10% desc. en compras generales",
              "15% desc. en productos de limpieza",
              "20% desc. en bebidas y snacks"
            ]
          },
          {
            categoria: "Productos",
            items: [
              "Abarrotes y productos básicos",
              "Bebidas, jugos y gaseosas",
              "Productos de higiene y limpieza"
            ]
          },
          {
            categoria: "Servicios",
            items: [
              "Venta al por mayor y menor",
              "Fiado para clientes frecuentes",
              "Horario continuo de 7:00 a 20:00"
            ]
          }
        ],
        minTokens: "3 tokens mínimo"
      }
    },
    { 
      id: 4, 
      name: "Hipermaxi", 
      logo: "/Screenshot_From_2025-09-21_01-08-05-removebg-preview.png", 
      description: "Economía circular",
      canjes: {
        title: "Hipermaxi",
        subtitle: "Supermercado líder en Bolivia",
        offers: [
          { 
            categoria: "Descuentos",
            items: [
              "12% desc. en toda la tienda",
              "20% desc. en productos ecológicos",
              "15% desc. en electrodomésticos"
            ]
          },
          {
            categoria: "Productos",
            items: [
              "Toda la línea de supermercado",
              "Productos frescos y orgánicos",
              "Tecnología y electrodomésticos"
            ]
          },
          {
            categoria: "Servicios",
            items: [
              "Farmacia y productos médicos",
              "Cajeros automáticos disponibles",
              "Estacionamiento amplio y seguro"
            ]
          }
        ],
        minTokens: "8 tokens mínimo"
      }
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
              onClick={() => setSelectedPartner(partner)}
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
                  
                  {/* Click indicator - styled as white button */}
                  <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-emerald-200/50 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <span className="text-emerald-700 text-sm font-semibold mr-2">Ver Canjes Disponibles</span>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
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
          <button 
            onClick={() => window.open('https://wa.me/59165303314?text=Hola%2C%20me%20interesa%20ser%20parte%20de%20las%20empresas%20aliadas%20de%20Civecoin%20en%20Cochabamba.%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%3F', '_blank')}
            className="group bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              <span className="mr-2">📱</span>
              Contactar por WhatsApp
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Footer section - Redesigned */}
        <div className="mt-20 pt-12 border-t border-emerald-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Company info - Left side */}
            <div className="text-center md:text-left">
              <h4 className="text-3xl font-bold text-emerald-800 mb-4 animate-fadeInUp">
                Civecoin
              </h4>
              <p className="text-emerald-600 mb-6 leading-relaxed animate-fadeInUp delay-200 text-lg">
                La plataforma líder en reciclaje tokenizado en Cochabamba. Convertimos residuos en valor, 
                creando un futuro más sostenible para nuestra ciudad.
              </p>
              
              {/* Social Media Icons - Beautiful design */}
              <div className="flex justify-center md:justify-start space-x-4 animate-fadeInUp delay-400">
                <a 
                  href="mailto:civecoin@gmail.com"
                  className="group w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <span className="text-xl">📧</span>
                </a>
                <a 
                  href="https://wa.me/59165303314"
                  target="_blank"
                  className="group w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <span className="text-xl">�</span>
                </a>
                <div className="group w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
                  <span className="text-xl">🌐</span>
                </div>
                <div className="group w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
                  <span className="text-xl">📸</span>
                </div>
              </div>
            </div>

            {/* Contact info - Right side with beautiful cards */}
            <div className="animate-fadeInUp delay-600">
              <h5 className="text-xl font-bold text-emerald-800 mb-6 text-center md:text-left">
                Información de Contacto
              </h5>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-white to-emerald-50 rounded-xl p-4 shadow-md border border-emerald-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-lg">📧</span>
                    </div>
                    <div>
                      <p className="text-emerald-800 font-semibold">Email</p>
                      <p className="text-emerald-600 text-sm">civecoin@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-white to-emerald-50 rounded-xl p-4 shadow-md border border-emerald-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-lg">📱</span>
                    </div>
                    <div>
                      <p className="text-emerald-800 font-semibold">WhatsApp</p>
                      <p className="text-emerald-600 text-sm">+591 65303314</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-white to-emerald-50 rounded-xl p-4 shadow-md border border-emerald-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div>
                      <p className="text-emerald-800 font-semibold">Ubicación</p>
                      <p className="text-emerald-600 text-sm">Cochabamba, Bolivia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-emerald-200 text-center text-emerald-500 text-sm animate-fadeInUp delay-1000">
            <p>&copy; 2024 Civecoin Cochabamba. Todos los derechos reservados. | Hecho con ❤️ en Bolivia</p>
          </div>
        </div>

        {/* Modal de Información de Canjes */}
        {selectedPartner && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPartner(null)}>
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              {/* Header del Modal */}
              <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-t-3xl">
                <button 
                  onClick={() => setSelectedPartner(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <span className="text-2xl">×</span>
                </button>
                
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-white rounded-2xl p-3 shadow-lg">
                    <img 
                      src={selectedPartner.logo} 
                      alt={selectedPartner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedPartner.canjes.title}</h3>
                    <p className="text-emerald-100 text-lg">{selectedPartner.canjes.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Contenido del Modal */}
              <div className="p-8">
                {/* Información de tokens mínimos */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-8 border border-emerald-200">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">🪙</span>
                    <span className="text-emerald-800 font-bold text-lg">{selectedPartner.canjes.minTokens}</span>
                    <span className="text-emerald-600">para canjear</span>
                  </div>
                </div>

                {/* Categorías de Canjes */}
                <div className="space-y-6">
                  {selectedPartner.canjes.offers.map((categoria, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-6 border border-gray-200">
                      <h4 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                          {categoria.categoria === 'Descuentos' ? '💰' : categoria.categoria === 'Productos' ? '🛍️' : categoria.categoria === 'Servicios' ? '⚙️' : '🎯'}
                        </span>
                        {categoria.categoria}
                      </h4>
                      <ul className="space-y-3">
                        {categoria.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}