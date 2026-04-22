import { useState } from 'react';
import type { FormEvent } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const newErrors = { nombre: '', email: '', mensaje: '' };
    let esValido = true;

    // Validación de Nombre
    if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
      esValido = false;
    }

    // Validación de Email con Regex
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Introduce un correo electrónico válido';
      esValido = false;
    }

    // Validación de Mensaje
    if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
      esValido = false;
    }

    setErrors(newErrors);
    return esValido;
  };

  // Usamos FormEvent<HTMLFormElement> para evitar el error de "deprecated"
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validar()) {
      setEnviado(true);
      // Limpiamos el formulario tras el éxito
      setFormData({ nombre: '', email: '', mensaje: '' });
      
      // Ocultamos el mensaje de éxito después de 5 segundos
      setTimeout(() => setEnviado(false), 5000);
    }
  };

  return (
    <section id="contacto" className="max-w-xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Contacto</h2>
      
      {enviado && (
        <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg mb-6 text-center animate-bounce">
          ¡Mensaje enviado con éxito! Gracias por contactarme.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre Completo</label>
          <input 
            type="text" 
            value={formData.nombre}
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
            className={`w-full border-b-2 py-2 outline-none transition-colors ${errors.nombre ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
            placeholder="Ej. Nikolas Linares"
          />
          {errors.nombre && <p className="text-red-500 text-xs mt-1 font-medium">{errors.nombre}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={`w-full border-b-2 py-2 outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Mensaje</label>
          <textarea 
            value={formData.mensaje}
            onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
            className={`w-full border-b-2 py-2 outline-none transition-colors h-32 resize-none ${errors.mensaje ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
            placeholder="Cuéntame sobre tu proyecto..."
          />
          {errors.mensaje && <p className="text-red-500 text-xs mt-1 font-medium">{errors.mensaje}</p>}
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}