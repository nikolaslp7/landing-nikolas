import { useState, useEffect } from 'react';
import type { Project } from '../types';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        // Esta es la URL clave: cambiamos /edit por /export?format=csv
        const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1BTyB1wx4gAGxZL4DfnTw9HmWDj6lLo-i/export?format=csv&gid=603647357';
        
        const response = await fetch(SHEET_URL);
        
        if (!response.ok) throw new Error('No se pudo conectar con los datos');
        
        const csvText = await response.text();
        
        // Dividimos por filas y limpiamos
        const rows = csvText.split('\n');
        
        // El CSV de Google Sheets a veces usa comillas, las limpiamos con este regex
        const formattedProjects: Project[] = rows
          .slice(1) // Saltamos la cabecera (title, category)
          .filter(row => row.trim() !== '')
          .map(row => {
            // Limpia comillas dobles y separa por coma
            const columns = row.split(',').map(col => col.replace(/^"|"$/g, '').trim());
            return {
              title: columns[0] || 'Sin título',
              category: columns[1] || 'General'
            };
          });

        setProjects(formattedProjects);
      } catch (err) {
        setError('Error al cargar los proyectos reales');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, isLoading, error };
}