import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import { personalInfo, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Información personal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">{personalInfo.name}</h3>
          <p className="text-white mb-4">{personalInfo.title}</p>
          <p className="text-white text-sm">{personalInfo.summary}</p>
        </div>
        
        {/* Enlaces sociales */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Redes Sociales</h3>
          <ul className="space-y-2">
            {footerLinks.social.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-custom-primary transition-colors duration-200 flex items-center gap-2"
                >
                  {link.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}
                  {link.icon === 'github' && <Github className="w-4 h-4" />}
                  {link.icon === 'mail' && <Mail className="w-4 h-4" />}
                  {link.icon === 'twitter' && <ExternalLink className="w-4 h-4" />}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            {footerLinks.quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="text-white hover:text-custom-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Información de contacto */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Contacto</h3>
          <div className="space-y-2 text-white">
            <p className="text-sm">{personalInfo.email}</p>
            <p className="text-sm">{personalInfo.location}</p>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-8 pt-6 border-t border-slate-700 text-center">
        <p className="text-white text-sm">
          © 2024 {personalInfo.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
