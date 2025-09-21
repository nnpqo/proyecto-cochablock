'use client';

import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration * 60); // 60 FPS
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const stats = [
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        <path d="M17 12L17.5 14L19 14.5L17.5 15L17 17L16.5 15L15 14.5L16.5 14L17 12Z"/>
        <path d="M7 12L7.5 14L9 14.5L7.5 15L7 17L6.5 15L5 14.5L6.5 14L7 12Z"/>
      </svg>
    ),
    value: 2547892,
    suffix: "",
    prefix: "₹",
    title: "Tokens Distribuidos",
    description: "En recompensas por reciclaje",
    color: "primary"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
      </svg>
    ),
    value: 1248756,
    suffix: " kg",
    prefix: "",
    title: "Material Reciclado",
    description: "Recuperado del medio ambiente",
    color: "earth"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM18.5 9.5C17.41 8.56 15.92 8 14.31 8.14C14.75 9 15 10 15 11.1C15 15.97 11.97 20 7.1 20C5.18 20 3.39 19.32 2 18.16V21H4C4 19.9 4.9 19 6 19S8 19.9 8 21H10V18.16C8.61 19.32 6.82 20 4.9 20C0.03 20 -3 15.97 -3 11.1C-3 10 -2.75 9 -2.31 8.14C-3.92 8 -5.41 8.56 -6.5 9.5L-5 11L-6.5 12.5C-5.41 13.44 -3.92 14 -2.31 13.86C-2.75 13 -3 12 -3 10.9C-3 6.03 0.03 2 4.9 2C6.82 2 8.61 2.68 10 3.84V1H8C8 2.1 7.1 3 6 3S4 2.1 4 1H2V3.84C3.39 2.68 5.18 2 7.1 2C11.97 2 15 6.03 15 10.9C15 12 14.75 13 14.31 13.86C15.92 14 17.41 13.44 18.5 12.5L17 11L18.5 9.5Z"/>
      </svg>
    ),
    value: 3456,
    suffix: " ton",
    prefix: "",
    title: "CO₂ Reducido",
    description: "Emisiones evitadas",
    color: "sage"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H15v9h5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5v-3C14 6.67 13.33 6 12.5 6h-5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H9V22h3.5v-10.5zM6 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2z"/>
      </svg>
    ),
    value: 52341,
    suffix: "",
    prefix: "",
    title: "Usuarios Activos",
    description: "Comunidad EcoBlock",
    color: "primary"
  }
];

const impactCards = [
  {
    title: "Bosques Salvados",
    value: "847",
    unit: "árboles",
    description: "Equivalente en papel reciclado",
    icon: "🌲",
    color: "sage",
    background: "from-sage-100 to-sage-200"
  },
  {
    title: "Energía Ahorrada",
    value: "125,000",
    unit: "kWh",
    description: "En procesos de reciclaje",
    icon: "⚡",
    color: "earth",
    background: "from-earth-100 to-earth-200"
  },
  {
    title: "Agua Conservada",
    value: "89,432",
    unit: "litros",
    description: "No utilizados en producción",
    icon: "💧",
    color: "primary",
    background: "from-primary-100 to-primary-200"
  }
];

export default function StatsSection() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % impactCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: 'bg-primary-600',
        text: 'text-primary-600',
        border: 'border-primary-600'
      },
      earth: {
        bg: 'bg-earth-600',
        text: 'text-earth-600',
        border: 'border-earth-600'
      },
      sage: {
        bg: 'bg-sage-600',
        text: 'text-sage-600',
        border: 'border-sage-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="impacto" className="py-20 bg-gradient-to-br from-sage-100 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
            </svg>
            Nuestro Impacto Real
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
            Juntos Cambiamos el <span className="text-gradient-earth">Mundo</span>
          </h2>
          
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Cada acción cuenta. Mira el impacto positivo que estamos generando 
            juntos en el planeta con datos reales y transparentes.
          </p>
        </div>

        {/* Main stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border-2 border-transparent hover:border-primary-200 transition-all duration-300 transform hover:scale-105 group"
              >
                {/* Icon */}
                <div className={`
                  w-20 h-20 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                  ${colors.bg} text-white group-hover:scale-110
                `}>
                  {stat.icon}
                </div>

                {/* Value with counter */}
                <div className={`mb-2 ${colors.text}`}>
                  <Counter 
                    end={stat.value} 
                    duration={2} 
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-sage-800 mb-2">{stat.title}</h3>
                <p className="text-sage-600">{stat.description}</p>

                {/* Progress bar animation */}
                <div className="mt-4 h-2 bg-sage-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${colors.bg} rounded-full animate-pulse-gentle`}
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Environmental Impact Cards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-sage-800 mb-12">
            Impacto Ambiental Directo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactCards.map((card, index) => {
              const colors = getColorClasses(card.color);
              const isActive = index === activeCard;
              
              return (
                <div
                  key={index}
                  className={`
                    relative rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden
                    ${isActive ? 'transform scale-105 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
                    bg-gradient-to-br ${card.background}
                  `}
                  onClick={() => setActiveCard(index)}
                >
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 opacity-10 text-8xl">
                    {card.icon}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{card.icon}</div>

                  {/* Content */}
                  <div className={`text-3xl font-bold mb-2 ${colors.text}`}>
                    {card.value}
                  </div>
                  <div className={`text-lg font-medium mb-2 ${colors.text}`}>
                    {card.unit}
                  </div>
                  <h4 className="text-xl font-bold text-sage-800 mb-2">{card.title}</h4>
                  <p className="text-sage-600">{card.description}</p>

                  {/* Active indicator */}
                  {isActive && (
                    <div className={`absolute bottom-4 left-8 right-8 h-1 ${colors.bg} rounded-full`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action with live stats */}
        <div className="bg-gradient-nature rounded-2xl p-1">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              Forma Parte del Cambio
            </h3>
            <p className="text-xl text-sage-600 mb-8 max-w-3xl mx-auto">
              Tu participación hace la diferencia. Cada kilogramo cuenta, cada token 
              representa un paso hacia un futuro más sostenible.
            </p>

            {/* Live counter */}
            <div className="bg-sage-50 rounded-xl p-6 mb-8 max-w-md mx-auto">
              <div className="text-sm text-sage-600 mb-2">En los últimos 30 días:</div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                <Counter end={12847} duration={1.5} suffix=" kg" />
              </div>
              <div className="text-sm text-sage-500">Material reciclado por nuestra comunidad</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-primary flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Únete Ahora
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-earth-600 text-earth-700 hover:bg-earth-600 hover:text-white font-semibold rounded-full transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Ver Estadísticas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}