'use client';

import { useState, useEffect } from 'react';
import WaveDivider from './WaveDivider';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-sage-50 to-earth-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-300 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-earth-300 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-sage-300 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary-200 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating leaves decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-1/4 left-1/4 w-16 h-16 text-primary-300 opacity-30 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM18.5 9.5C17.41 8.56 15.92 8 14.31 8.14C14.75 9 15 10 15 11.1C15 15.97 11.97 20 7.1 20C5.18 20 3.39 19.32 2 18.16V21H4C4 19.9 4.9 19 6 19S8 19.9 8 21H10V18.16C8.61 19.32 6.82 20 4.9 20C0.03 20 -3 15.97 -3 11.1C-3 10 -2.75 9 -2.31 8.14C-3.92 8 -5.41 8.56 -6.5 9.5L-5 11L-6.5 12.5C-5.41 13.44 -3.92 14 -2.31 13.86C-2.75 13 -3 12 -3 10.9C-3 6.03 0.03 2 4.9 2C6.82 2 8.61 2.68 10 3.84V1H8C8 2.1 7.1 3 6 3S4 2.1 4 1H2V3.84C3.39 2.68 5.18 2 7.1 2C11.97 2 15 6.03 15 10.9C15 12 14.75 13 14.31 13.86C15.92 14 17.41 13.44 18.5 12.5L17 11L18.5 9.5Z"/>
        </svg>
        <svg className="absolute top-1/3 right-1/4 w-12 h-12 text-earth-400 opacity-40 animate-float" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8 animate-bounce-gentle">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
            🌱 Revoluciona el reciclaje con blockchain
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-primary">Eco</span>
            <span className="text-gradient-earth">Block</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-sage-700 mb-8">
            Reciclaje Tokenizado
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-sage-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Convierte tu basura reciclable en <span className="text-primary-600 font-semibold">tokens digitales</span>. 
            Gana mientras ayudas al planeta. Un sistema revolucionario que recompensa tu 
            <span className="text-earth-600 font-semibold"> compromiso ambiental</span>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">1M+</div>
              <div className="text-sage-600">Kg Reciclados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-earth-600 mb-2">50K+</div>
              <div className="text-sage-600">Usuarios Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">₹2M+</div>
              <div className="text-sage-600">Tokens Distribuidos</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="btn-ecoblock-primary text-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Comenzar Ahora
            </button>
            <button className="btn-ecoblock-outline text-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Cómo Funciona
            </button>
          </div>

          {/* Video preview or image placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-nature rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8 md:p-12">
                <div className="aspect-video bg-sage-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-gentle">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sage-600 font-medium">Mira cómo funciona EcoBlock</p>
                    <p className="text-sage-500 text-sm">Video explicativo - 2 min</p>
                  </div>
                </div>
                
                {/* Process preview icons */}
                <div className="flex justify-between items-center text-center">
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-sage-600">Trae tu basura</p>
                  </div>
                  
                  <div className="px-4">
                    <svg className="w-6 h-6 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-earth-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-sage-600">Verificamos</p>
                  </div>
                  
                  <div className="px-4">
                    <svg className="w-6 h-6 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-sage-600">Recibes tokens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <WaveDivider flip={false} color="#f4ede0" className="absolute bottom-0 left-0 right-0" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <svg className="w-6 h-6 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}