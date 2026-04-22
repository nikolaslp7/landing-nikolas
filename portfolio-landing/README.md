# Portfolio Landing - Nikolas Linares
Solución desarrollada para el caso técnico de Frontend Developer Junior. El proyecto consiste en una landing page dinámica que consume datos de una hoja de cálculo y gestiona un formulario de contacto con validaciones personalizadas.
# Tecnologías Utilizadas
* **React 18 + Vite**: Para un desarrollo ágil y una estructura de componentes moderna.
* **TypeScript**: Implementación de tipado estricto para evitar errores en tiempo de ejecución (interfaces para proyectos y eventos de formulario).
* **Tailwind CSS**: Estilizado responsivo y utilitario.
* **Google Sheets API (CSV)**: Consumo dinámico de datos externos.

## Funcionalidades Clave

1.  **Consumo de Datos Dinámicos**: Se implementó un Custom Hook (`useProjects`) que realiza un fetch a un Google Sheet público, transformando el formato CSV a objetos de TypeScript.
2.  **Manejo de Estados (UX)**: El sistema gestiona tres estados críticos:
    * *Loading*: Animación de carga mientras se obtienen los proyectos.
    * *Error*: Interfaz de aviso en caso de fallos en la red o en el enlace.
    * *Success*: Renderizado automático de las cards una vez obtenidos los datos.
3.  **Formulario con Validación Manual**: Se desarrolló una lógica de validación campo por campo sin librerías externas (Zod o React Hook Form), asegurando:
    * Nombre (mínimo 3 caracteres).
    * Email (formato válido vía Regex).
    * Mensaje (mínimo 10 caracteres).
4.  **Diseño Responsive**: Grid adaptativo que cambia de 1 a 3 columnas según el tamaño de la pantalla.
5.  **Navegación Fluida**: Implementación de scroll suave (smooth scroll) mediante JavaScript y CSS.

## Instalación y Ejecución

1.  Clonar el repositorio o descomprimir el archivo.
2.  Instalar las dependencias necesarias:
    
    npm install
  
3.  Ejecutar el proyecto en modo desarrollo:
    
    npm run dev
    
4.  Abrir el navegador en `http://localhost:5173`.


Desarrollado por **Nikolas Linares** - 2026.