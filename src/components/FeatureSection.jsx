import { skills } from "../constants";
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Users, 
  Globe,
  // Frontend icons
  FileText,
  Palette,
  // Backend icons
  Terminal,
  Zap,
  // Database icons
  HardDrive,
  // Tool icons
  GitBranch,
  Cloud,
  // Methodology icons
  Target,
  // Language icons
  MessageCircle,
  // New category icons
  Sparkles,
  Plane,
  Brain
} from "lucide-react";

// Función para obtener el icono correspondiente a cada tecnología
const getTechIcon = (tech) => {
  const iconMap = {
    // Frontend
    'React': <Code className="w-4 h-4" />,
    'Vue.js': <Code className="w-4 h-4" />,
    'JavaScript': <FileText className="w-4 h-4" />,
    'TypeScript': <FileText className="w-4 h-4" />,
    'HTML5': <FileText className="w-4 h-4" />,
    'CSS3': <Palette className="w-4 h-4" />,
    'Tailwind CSS': <Palette className="w-4 h-4" />,
    
    // Backend
    'Node.js': <Server className="w-4 h-4" />,
    'Python': <Terminal className="w-4 h-4" />,
    'Express.js': <Server className="w-4 h-4" />,
    'Django': <Server className="w-4 h-4" />,
    'REST APIs': <Zap className="w-4 h-4" />,
    'GraphQL': <Zap className="w-4 h-4" />,
    
    // Databases
    'MongoDB': <Database className="w-4 h-4" />,
    'PostgreSQL': <Database className="w-4 h-4" />,
    'MySQL': <Database className="w-4 h-4" />,
    'Redis': <HardDrive className="w-4 h-4" />,
    
    // Tools
    'Git': <GitBranch className="w-4 h-4" />,
    'Docker': <Cloud className="w-4 h-4" />,
    'AWS': <Cloud className="w-4 h-4" />,
    'Vercel': <Cloud className="w-4 h-4" />,
    'Figma': <Palette className="w-4 h-4" />,
    'VS Code': <Code className="w-4 h-4" />,
    
    // Methodologies
    'Agile': <Target className="w-4 h-4" />,
    'Scrum': <Users className="w-4 h-4" />,
    'TDD': <Target className="w-4 h-4" />,
    'CI/CD': <Zap className="w-4 h-4" />,
    'DevOps': <Wrench className="w-4 h-4" />,
    
    // Languages
    'Español (Nativo)': <MessageCircle className="w-4 h-4" />,
    'Inglés (Avanzado)': <Globe className="w-4 h-4" />,
    'Portugués (Intermedio)': <MessageCircle className="w-4 h-4" />
  };
  
  return iconMap[tech] || <Code className="w-4 h-4" />;
};

// Función para obtener el icono de la categoría
const getCategoryIcon = (category) => {
  const categoryIcons = {
    'Transforma tu vida': <Sparkles className="w-6 h-6" />,
    'Viaja conmigo': <Plane className="w-6 h-6" />,
    'Expande tu mente': <Brain className="w-6 h-6" />
  };
  
  return categoryIcons[category] || <Code className="w-6 h-6" />;
};

const FeatureSection = () => {
  return (
    <div id="skills" className="relative mt-20 border-b border-slate-700 min-h-[800px]">
      <div className="text-center">
        <span className="bg-slate-900 text-custom-primary rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Mis Proyectos
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          <span className="bg-gradient-to-r from-custom-primary to-custom-primary-dark text-transparent bg-clip-text">
            Mis Proyectos
          </span>
        </h2>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
          Tecnologías y herramientas que domino para crear soluciones innovadoras
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {skills.map((skillCategory, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-custom-primary transition-colors duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="text-custom-primary mr-2">
                {getCategoryIcon(skillCategory.category)}
              </div>
              <h3 className="text-xl font-semibold text-custom-primary">
                {skillCategory.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {skillCategory.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="bg-slate-700 text-white px-3 py-2 rounded-full text-sm hover:bg-custom-primary hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
