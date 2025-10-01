// Datos personales del CV
export const personalInfo = {
  name: "Daviana Martinez",
  title: "Contadora",
  email: "devian0559@gmail.com",
  location: "Porlamar, Nueva Esparta, Venezuela",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https:s//github.com/wlachoo",
  portfolio: "https://tu-portfolio.com",
  summary: "Desarrollador apasionado con experiencia en tecnologías modernas. Especializado en crear soluciones web innovadoras y escalables."
};

// Navegación del CV
export const navItems = [
  { label: "Sobre Mí", href: "#about" },
  { label: "Mis Proyectos", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

// Habilidades técnicas
export const skills = [
  {
    category: "Transforma tu vida",
    technologies: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Viaja conmigo", 
    technologies: ["Node.js", "Python", "Express.js", "Django", "REST APIs", "GraphQL"]
  },
  {
    category: "Expande tu mente",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  }
];

// Experiencia laboral
export const experience = [
  {
    company: "Empresa Actual",
    position: "Desarrollador Full Stack",
    period: "2022 - Presente",
    location: "Ciudad, País",
    description: "Desarrollo de aplicaciones web completas usando React y Node.js",
    achievements: [
      "Lideré el desarrollo de 3 proyectos principales",
      "Mejoré el rendimiento de la aplicación en un 40%",
      "Implementé nuevas funcionalidades que aumentaron la satisfacción del usuario"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    company: "Empresa Anterior",
    position: "Desarrollador Frontend",
    period: "2020 - 2022",
    location: "Ciudad, País", 
    description: "Desarrollo de interfaces de usuario responsivas y modernas",
    achievements: [
      "Creé componentes reutilizables que redujeron el tiempo de desarrollo",
      "Colaboré con el equipo de diseño para mejorar la UX",
      "Mantuve una cobertura de tests del 90%"
    ],
    technologies: ["React", "TypeScript", "Styled Components", "Jest"]
  }
];

// Proyectos destacados
export const projects = [
  {
    name: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con carrito de compras, pagos y panel de administración",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/tu-usuario/ecommerce",
    demo: "https://tu-proyecto.vercel.app",
    features: [
      "Sistema de autenticación completo",
      "Integración con pasarela de pagos",
      "Panel de administración",
      "Responsive design"
    ]
  },
  {
    name: "Task Management App",
    description: "Aplicación para gestión de tareas con colaboración en tiempo real",
    image: "/api/placeholder/400/300",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    github: "https://github.com/tu-usuario/task-manager",
    demo: "https://tu-tasks.vercel.app",
    features: [
      "Colaboración en tiempo real",
      "Notificaciones push",
      "Filtros y búsqueda avanzada",
      "Exportación de reportes"
    ]
  },
  {
    name: "Weather Dashboard",
    description: "Dashboard meteorológico con pronósticos detallados y mapas interactivos",
    image: "/api/placeholder/400/300", 
    technologies: ["React", "Chart.js", "OpenWeather API"],
    github: "https://github.com/tu-usuario/weather-dashboard",
    demo: "https://weather-dash.vercel.app",
    features: [
      "Pronósticos de 7 días",
      "Mapas interactivos",
      "Gráficos de datos meteorológicos",
      "Geolocalización automática"
    ]
  }
];

// Educación
export const education = [
  {
    institution: "Universidad Tecnológica",
    degree: "Ingeniería en Sistemas",
    period: "2018 - 2022",
    location: "Ciudad, País",
    description: "Especialización en desarrollo de software y arquitectura de sistemas"
  },
  {
    institution: "Bootcamp de Desarrollo Web",
    degree: "Full Stack Developer",
    period: "2020",
    location: "Online",
    description: "Programa intensivo de 6 meses enfocado en tecnologías modernas"
  }
];

// Certificaciones
export const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credential: "AWS-DEV-123456"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022", 
    credential: "META-REACT-789012"
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2021",
    credential: "FCC-JS-345678"
  }
];

// Referencias/Testimonios
export const testimonials = [
  {
    name: "María González",
    position: "Tech Lead",
    company: "TechCorp",
    text: "Excelente desarrollador con gran capacidad de aprendizaje y trabajo en equipo. Siempre entrega proyectos de alta calidad.",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Carlos Rodríguez", 
    position: "Product Manager",
    company: "StartupXYZ",
    text: "Trabajar con él fue una experiencia increíble. Su atención al detalle y habilidades técnicas son excepcionales.",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Ana Martínez",
    position: "CTO",
    company: "InnovateLab",
    text: "Un profesional excepcional que siempre va más allá de lo esperado. Altamente recomendado.",
    image: "/api/placeholder/100/100"
  }
];

// Enlaces del footer
export const footerLinks = {
  social: [
    { name: "LinkedIn", url: "https://linkedin.com/in/tu-perfil", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/tu-usuario", icon: "github" },
    { name: "Twitter", url: "https://twitter.com/tu-usuario", icon: "twitter" },
    { name: "Email", url: "mailto:tu.email@ejemplo.com", icon: "mail" }
  ],
  quickLinks: [
    { name: "Portfolio", url: "https://tu-portfolio.com" },
    { name: "Blog", url: "https://tu-blog.com" },
    { name: "Contacto", url: "#contact" }
  ]
};
