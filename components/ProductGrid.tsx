'use client';

export default function ProductGrid() {
  const products = [
    {
      name: "Botellas Vidrio",
      image: "/—Pngtree—summer beer glass bottle_4757327.png",
      pricePerKg: "15.00",
      tokens: "15",
      description: "Botellas y envases de vidrio",
      category: "Vidrio"
    },
    {
      name: "Latas Aluminio",
      image: "/—Pngtree—3d aluminium stainless beer can_5738698.png", 
      pricePerKg: "12.00",
      tokens: "12",
      description: "Latas de bebidas y conservas",
      category: "Aluminio"
    },
    {
      name: "Cartón",
      image: "/pngwing.com(1).png",
      pricePerKg: "8.00", 
      tokens: "8",
      description: "Cajas y empaques de cartón",
      category: "Papel"
    },
    {
      name: "Libros y Papel",
      image: "/book-4.png",
      pricePerKg: "6.00",
      tokens: "6",
      description: "Papel, libros y documentos",
      category: "Papel"
    },
    {
      name: "Botellas Plástico",
      image: "/pngwing.com(2).png",
      pricePerKg: "4.00",
      tokens: "4",
      description: "Botellas PET y envases",
      category: "Plástico"
    },
    {
      name: "Metal",
      image: "/pngwing.com.png",
      pricePerKg: "18.00",
      tokens: "18",
      description: "Cobre, hierro y otros metales",
      category: "Metal"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-emerald-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-green-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-teal-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-emerald-100 rounded-full px-6 py-3 mb-5">
            <span className="text-emerald-700 text-sm font-semibold">♻️ Precios por Kilogramo</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-5 leading-tight">
            Materiales <span className="text-emerald-600">Aceptados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada kilogramo de material reciclable tiene un valor específico. 
            <strong className="text-emerald-600"> 1 Token = 1 Boliviano</strong> de valor real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-3 left-6 z-20">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  {product.category}
                </span>
              </div>

              <div className="relative z-10 flex justify-center mb-[-60px] group-hover:mb-[-65px] transition-all duration-500">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-48 w-auto object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-emerald-200 rounded-full blur-2xl opacity-20 scale-75 group-hover:scale-90 transition-all duration-500"></div>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-white via-emerald-50 to-green-100 rounded-3xl pt-18 pb-6 px-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 animate-fadeInUp border border-emerald-200/50 backdrop-blur-sm">
                <div className="text-center relative">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-3 mb-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/5 rounded-full translate-y-5 -translate-x-5"></div>
                    
                    <div className="relative z-10">
                      <div className="text-white text-center">
                        <div className="text-3xl font-bold mb-1">🪙 {product.tokens}</div>
                        <div className="text-emerald-200 text-sm">Tokens por kilogramo</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-6 h-6 bg-emerald-400/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-green-400/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}