import { ExternalLink, Github, Code, Star } from "lucide-react";
import { projects } from "../constants";

const ProjectsSection = () => {
  return (
    <div id="projects" className="relative mt-20 border-b border-slate-700 min-h-[600px]">
      <div className="text-center">
        <span className="bg-slate-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Proyectos
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Mis{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            Proyectos
          </span>
        </h2>
        <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
          Proyectos destacados que demuestran mis habilidades técnicas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors duration-300 group">
            <div className="aspect-video bg-slate-700 flex items-center justify-center">
              <Code className="w-16 h-16 text-slate-500" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Características:
                </h5>
                <ul className="space-y-1">
                  {project.features.map((feature, featIndex) => (
                    <li key={featIndex} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Código
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
