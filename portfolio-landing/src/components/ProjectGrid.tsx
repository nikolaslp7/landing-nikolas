import { useProjects } from '../hooks/useProjects';
import { ProjectCard } from './ProjectCard';

export function ProjectGrid() {
  // Aquí usamos el hook que creaste hace un rato
  const { projects, isLoading, error } = useProjects();

  // Estado 1: Cargando
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-xl text-gray-500 font-semibold animate-pulse">Cargando proyectos desde Google Sheets...</p>
      </div>
    );
  }

  // Estado 2: Error
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-2xl mx-auto mt-10">
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    );
  }

  // Estado 3: Éxito (Mostramos las tarjetas)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-10">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}