import type { Project } from '../types';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const getBadgeColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'web':
        return 'bg-blue-100 text-blue-800';
      case 'mobile':
        return 'bg-green-100 text-green-800';
      case 'diseño':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col h-full justify-between gap-4">
        <h3 className="text-xl font-bold text-gray-800">
          {project.title}
        </h3>
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(project.category)}`}>
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
}