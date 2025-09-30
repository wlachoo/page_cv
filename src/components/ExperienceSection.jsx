import { Calendar, MapPin, Building2, Award } from "lucide-react";
import { experience } from "../constants";

const ExperienceSection = () => {
  return (
    <div id="experience" className="relative mt-20 border-b border-slate-700 min-h-[600px]">
      <div className="text-center">
        <span className="bg-slate-900 text-custom-primary rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Experiencia
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Mi{" "}
          <span className="bg-gradient-to-r from-custom-primary to-custom-primary-dark text-transparent bg-clip-text">
            Experiencia
          </span>
        </h2>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
          Mi trayectoria profesional y logros destacados
        </p>
      </div>
      
      <div className="mt-16 space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-custom-primary transition-colors duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-custom-primary" />
                  <h3 className="text-xl font-semibold text-white">{job.position}</h3>
                </div>
                <h4 className="text-lg text-custom-primary mb-2">{job.company}</h4>
                <p className="text-white mb-4">{job.description}</p>
              </div>
              <div className="flex flex-col lg:items-end gap-2 text-sm text-white">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{job.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Logros Destacados:
              </h5>
              <ul className="space-y-1">
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-white text-sm flex items-start gap-2">
                    <span className="text-custom-primary mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="bg-custom-primary/20 text-custom-primary px-3 py-1 rounded-full text-sm border border-custom-primary/30"
                >
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

export default ExperienceSection;
