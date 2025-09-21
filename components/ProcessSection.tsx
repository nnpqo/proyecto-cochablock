'use client';

import { useState, useEffect } from 'react';

const steps = [
  {
    number: "01",
    title: "Recolecta y Clasifica",
    description: "Separa tus materiales reciclables: plástico, papel, vidrio, metales y electrónicos. Limpia los envases para maximizar su valor.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
      </svg>
    ),
    tips: ["Separa por tipo de material", "Limpia los envases", "Retira etiquetas cuando sea posible"],
    color: "primary"
  },
  {
    number: "02",
    title: "Visita nuestro Centro",
    description: "Trae tus materiales a cualquiera de nuestros centros de acopio. Abiertos 7 días a la semana para tu conveniencia.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    tips: ["15 centros en la ciudad", "Horario: 7AM - 9PM", "Parking gratuito disponible"],
    color: "earth"
  },
  {
    number: "03",
    title: "Pesaje Automático",
    description: "Nuestro sistema automatizado pesa y verifica la calidad de tus materiales utilizando tecnología de última generación.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    tips: ["Proceso completamente automatizado", "Verificación de calidad en tiempo real", "Pesaje preciso al gramo"],
    color: "sage"
  },
  {
    number: "04",
    title: "Recibe tus Tokens",
    description: "Al instante recibes tokens EcoBlock en tu billetera digital. Cada material tiene un valor específico basado en el mercado.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        <path d="M17 12L17.5 14L19 14.5L17.5 15L17 17L16.5 15L15 14.5L16.5 14L17 12Z"/>
        <path d="M7 12L7.5 14L9 14.5L7.5 15L7 17L6.5 15L5 14.5L6.5 14L7 12Z"/>
      </svg>
    ),
    tips: ["Transferencia instantánea", "Historial completo en blockchain", "Valores actualizados diariamente"],
    color: "primary"
  },
  {
    number: "05",
    title: "Usa tus Recompensas",
    description: "Canjea tus tokens por dinero real, productos eco-friendly, descuentos en tiendas aliadas o dona a causas ambientales.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    tips: ["Múltiples opciones de canje", "Sin comisiones por transacción", "Programa de fidelización"],
    color: "earth"
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: 'bg-primary-600',
        bgLight: 'bg-primary-100',
        text: 'text-primary-600',
        border: 'border-primary-600'
      },
      earth: {
        bg: 'bg-earth-600',
        bgLight: 'bg-earth-100',
        text: 'text-earth-600',
        border: 'border-earth-600'
      },
      sage: {
        bg: 'bg-sage-600',
        bgLight: 'bg-sage-100',
        text: 'text-sage-600',
        border: 'border-sage-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Proceso Simplificado
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
            ¿Cómo <span className="text-gradient-primary">Funciona</span>?
          </h2>
          
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            En solo 5 pasos simples, convierte tu basura reciclable en tokens digitales. 
            Un proceso transparente, rápido y completamente automatizado.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-sage-200">
              <div 
                className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const colors = getColorClasses(step.color);
                const isActive = index <= activeStep;
                
                return (
                  <div
                    key={index}
                    className={`text-center cursor-pointer transition-all duration-500 ${
                      isActive ? 'transform scale-105' : ''
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Step circle */}
                    <div className={`
                      relative w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500
                      ${isActive ? `${colors.bg} text-white shadow-xl` : 'bg-white border-2 border-sage-200 text-sage-400'}
                    `}>
                      <div className="text-xl font-bold">{step.number}</div>
                      {isActive && (
                        <div className="absolute -inset-2 rounded-full animate-pulse-gentle bg-white/30"></div>
                      )}
                    </div>

                    {/* Step content */}
                    <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                      <h3 className="text-lg font-bold text-sage-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-sage-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Accordion */}
        <div className="lg:hidden mb-16">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            const isOpen = index === activeStep;
            
            return (
              <div
                key={index}
                className={`
                  mb-4 rounded-2xl border-2 overflow-hidden transition-all duration-300
                  ${isOpen ? `${colors.border} shadow-xl` : 'border-sage-200'}
                `}
              >
                <div
                  className={`
                    p-6 cursor-pointer transition-all duration-300
                    ${isOpen ? colors.bgLight : 'bg-white hover:bg-sage-50'}
                  `}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                        ${isOpen ? `${colors.bg} text-white` : 'bg-sage-100 text-sage-500'}
                      `}>
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-sage-500">{step.number}</div>
                        <h3 className={`text-lg font-bold ${isOpen ? colors.text : 'text-sage-800'}`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      } ${isOpen ? colors.text : 'text-sage-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {isOpen && (
                  <div className="px-6 pb-6 bg-white">
                    <p className="text-sage-600 mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-center text-sm text-sage-500">
                          <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-nature rounded-2xl p-1 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4">
                Comienza tu Viaje Ecológico Hoy
              </h3>
              <p className="text-sage-600 mb-8 text-lg">
                Únete a la revolución del reciclaje y empieza a ganar tokens por cuidar el planeta.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5 min</div>
                  <div className="text-sage-600">Tiempo promedio por visita</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-earth-600 mb-2">24/7</div>
                  <div className="text-sage-600">Acceso a tu billetera</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-600 mb-2">0%</div>
                  <div className="text-sage-600">Comisiones por transacción</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-primary flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Empezar Ahora
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-earth-600 text-earth-700 hover:bg-earth-600 hover:text-white font-semibold rounded-full transition-all duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Encontrar Centro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}