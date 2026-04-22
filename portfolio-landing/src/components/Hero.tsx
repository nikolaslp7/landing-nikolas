export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    // Evitamos el comportamiento por defecto del botón
    e.preventDefault();
    
    const section = document.querySelector('#contacto');
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <section className="text-center py-24 bg-white">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Nikolas Linares
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Desarrollador Frontend especializado en crear soluciones digitales modernas y eficientes con React y TypeScript.
      </p>
      <button 
        onClick={scrollToContact}
        className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
      >
        Contáctame
      </button>
    </section>
  );
}