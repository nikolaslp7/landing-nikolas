import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { ContactForm } from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Hero />
      
      <main className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
          <ProjectGrid />
        </div>
      </main>

      <div className="bg-white border-t border-gray-200">
        <ContactForm />
      </div>

      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>© 2026 Nikolas Linares </p>
      </footer>
    </div>
  );
}