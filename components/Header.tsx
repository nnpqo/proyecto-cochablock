'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-white animate-pulse-gentle" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                <path d="M17 12L17.5 14L19 14.5L17.5 15L17 17L16.5 15L15 14.5L16.5 14L17 12Z"/>
                <path d="M7 12L7.5 14L9 14.5L7.5 15L7 17L6.5 15L5 14.5L6.5 14L7 12Z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient-primary">Civecoin</h1>
              <p className="text-xs text-sage-600 -mt-1">Reciclaje Tokenizado — Tokens Civecoin</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-sage-700 hover:text-primary-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#como-funciona" className="text-sage-700 hover:text-primary-600 transition-colors font-medium">
              Cómo Funciona
            </a>
            <a href="#servicios" className="text-sage-700 hover:text-primary-600 transition-colors font-medium">
              Servicios
            </a>
            <a href="#impacto" className="text-sage-700 hover:text-primary-600 transition-colors font-medium">
              Impacto
            </a>
            <a href="#contacto" className="text-sage-700 hover:text-primary-600 transition-colors font-medium">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 text-sage-700 hover:text-primary-600 font-medium transition-colors">
              Iniciar Sesión
            </button>
            <button className="btn-ecoblock-primary px-6 py-2">Empezar Ahora</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sage-700 hover:text-primary-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-sage-200">
              <a
                href="#inicio"
                className="block px-3 py-2 text-sage-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#como-funciona"
                className="block px-3 py-2 text-sage-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo Funciona
              </a>
              <a
                href="#servicios"
                className="block px-3 py-2 text-sage-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#impacto"
                className="block px-3 py-2 text-sage-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Impacto
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-sage-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full px-4 py-2 text-primary-600 hover:text-primary-700 font-medium transition-colors text-left">
                  Iniciar Sesión
                </button>
                <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300">
                  Empezar Ahora
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}