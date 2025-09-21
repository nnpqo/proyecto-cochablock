'use client';

import { useState } from 'react';
import WaveDivider from './WaveDivider';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        <path d="M17 12L17.5 14L19 14.5L17.5 15L17 17L16.5 15L15 14.5L16.5 14L17 12Z"/>
        <path d="M7 12L7.5 14L9 14.5L7.5 15L7 17L6.5 15L5 14.5L6.5 14L7 12Z"/>
      </svg>
    ),
    title: "Tokens Instantáneos",
    description: "Recibe tokens EcoBlock al instante por cada kilogramo de material reciclable que traigas.",
    color: "primary",
    stats: "0.5-2 tokens/kg"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
      </svg>
    ),
    title: "Múltiples Materiales",
    description: "Aceptamos plástico, papel, cartón, vidrio, metales y electrónicos. Cada tipo tiene su valor.",
    color: "earth",
    stats: "6 tipos diferentes"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z"/>
      </svg>
    ),
    title: "Blockchain Seguro",
    description: "Tus tokens están respaldados por tecnología blockchain, garantizando transparencia y seguridad.",
    color: "sage",
    stats: "100% seguro"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: "Verificación Automática",
    description: "Sistema automatizado de pesaje y verificación para garantizar mediciones precisas.",
    color: "primary",
    stats: "99.9% precisión"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Programa de Recompensas",
    description: "Canjea tus tokens por productos, descuentos, o dinero real. Múltiples opciones disponibles.",
    color: "earth",
    stats: "50+ opciones"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM18.5 9.5C17.41 8.56 15.92 8 14.31 8.14C14.75 9 15 10 15 11.1C15 15.97 11.97 20 7.1 20C5.18 20 3.39 19.32 2 18.16V21H4C4 19.9 4.9 19 6 19S8 19.9 8 21H10V18.16C8.61 19.32 6.82 20 4.9 20C0.03 20 -3 15.97 -3 11.1C-3 10 -2.75 9 -2.31 8.14C-3.92 8 -5.41 8.56 -6.5 9.5L-5 11L-6.5 12.5C-5.41 13.44 -3.92 14 -2.31 13.86C-2.75 13 -3 12 -3 10.9C-3 6.03 0.03 2 4.9 2C6.82 2 8.61 2.68 10 3.84V1H8C8 2.1 7.1 3 6 3S4 2.1 4 1H2V3.84C3.39 2.68 5.18 2 7.1 2C11.97 2 15 6.03 15 10.9C15 12 14.75 13 14.31 13.86C15.92 14 17.41 13.44 18.5 12.5L17 11L18.5 9.5Z"/>
      </svg>
    ),
    title: "Impacto Ambiental",
    description: "Seguimiento en tiempo real de tu contribución al medio ambiente y CO2 reducido.",
    color: "sage",
    stats: "Tu huella verde"
  }
];

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colors = {
      primary: {
        bg: isHovered ? 'bg-primary-600' : 'bg-primary-100',
        text: isHovered ? 'text-white' : 'text-primary-600',
        icon: isHovered ? 'text-white' : 'text-primary-600',
        border: 'border-primary-200',
        shadow: 'shadow-primary'
      },
      earth: {
        bg: isHovered ? 'bg-earth-600' : 'bg-earth-100',
        text: isHovered ? 'text-white' : 'text-earth-600',
        icon: isHovered ? 'text-white' : 'text-earth-600',
        border: 'border-earth-200',
        shadow: 'shadow-earth'
      },
      sage: {
        bg: isHovered ? 'bg-sage-600' : 'bg-sage-100',
        text: isHovered ? 'text-white' : 'text-sage-600',
        icon: isHovered ? 'text-white' : 'text-sage-600',
        border: 'border-sage-200',
        shadow: 'shadow-sage'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="servicios" className="py-20 section-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <svg className="w-4 h-4 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            ¿Por qué elegir EcoBlock?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
            Servicios que <span className="text-gradient-primary">Transforman</span>
          </h2>
          
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Descubre cómo nuestro ecosistema revoluciona el reciclaje con tecnología blockchain
            y recompensas tangibles por tu compromiso ambiental.
          </p>
        </div>

  {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isHovered = hoveredCard === index;
            const colors = getColorClasses(feature.color, isHovered);
            
            return (
              <div
                key={index}
                className={`
                  relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  ${colors.bg} ${colors.border}
                  transform hover:scale-105 ${isHovered ? colors.shadow : 'hover:shadow-xl'}
                `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background decoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <div className={`w-16 h-16 ${colors.icon}`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                  ${isHovered ? 'bg-white/20' : 'bg-white'} ${colors.icon}
                `}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${colors.text}`}>
                  {feature.title}
                </h3>
                
                <p className={`mb-6 transition-colors duration-300 ${
                  isHovered ? 'text-white/90' : 'text-sage-600'
                }`}>
                  {feature.description}
                </p>

                {/* Stats */}
                <div className={`
                  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
                  ${isHovered ? 'bg-white/20 text-white' : 'bg-white text-sage-600'}
                `}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {feature.stats}
                </div>

                {/* Hover arrow */}
                <div className={`
                  absolute bottom-6 right-6 transition-all duration-300
                  ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
                `}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4">
              ¿Listo para empezar a ganar?
            </h3>
            <p className="text-sage-600 mb-8 text-lg">
              Únete a miles de usuarios que ya están transformando el reciclaje en recompensas
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-primary flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Crear Cuenta Gratis
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-sage-600 text-sage-700 hover:bg-sage-600 hover:text-white font-semibold rounded-full transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Más Información
              </button>
            </div>
          </div>
        </div>
      </div>
      <WaveDivider flip={true} color="#f7f8f7" />
    </section>
  );
}