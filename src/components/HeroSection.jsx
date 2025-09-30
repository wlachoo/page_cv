import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { personalInfo } from "../constants";
import profilePhoto from "../assets/profile2.jpeg";

const HeroSection = () => {
  return (
    <div id="about" className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Foto de perfil y nombre */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-custom-primary mb-6">
          <img 
            src={profilePhoto} 
            alt="Foto de perfil" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide font-bold">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-4">
          <span className="bg-gradient-to-r from-custom-primary to-custom-primary-dark text-transparent bg-clip-text">
            {personalInfo.title}
          </span>
        </h2>
      </div>

      {/* Resumen profesional */}
      <p className="mt-6 text-lg text-center text-white max-w-4xl leading-relaxed">
        {personalInfo.summary}
      </p>

      {/* Información de contacto */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <a 
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-2 text-white hover:text-custom-primary transition-colors duration-200"
        >
          <Mail size={20} />
          <span>{personalInfo.email}</span>
        </a>
        <div className="flex items-center gap-2 text-white">
          <MapPin size={20} />
          <span>{personalInfo.location}</span>
        </div>
      </div>

      {/* Enlaces sociales */}
      <div className="flex justify-center gap-6 mt-6">
        <a 
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-custom-primary transition-colors duration-200"
        >
          <Linkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a 
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-custom-primary transition-colors duration-200"
        >
          <Github size={24} />
          <span>GitHub</span>
        </a>
        <a 
          href={personalInfo.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-custom-primary transition-colors duration-200"
        >
          <ExternalLink size={24} />
          <span>Portfolio</span>
        </a>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 my-10">
        <a
          href="#contact"
          className="bg-gradient-to-r from-custom-primary to-custom-primary-dark py-3 px-6 rounded-md hover:from-custom-primary-light hover:to-custom-primary transition-all duration-200 text-center"
        >
          Contactar
        </a>
      </div>

      {/* Indicador de scroll */}
      <div className="mt-16 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
