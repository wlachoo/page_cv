import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { personalInfo } from "../constants";

const ContactSection = () => {
  return (
    <div id="contact" className="relative mt-20 min-h-[600px]">
      <div className="text-center">
        <span className="bg-slate-900 text-custom-primary rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Contacto
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          <span className="bg-gradient-to-r from-custom-primary to-custom-primary-dark text-transparent bg-clip-text">
            Contacto
          </span>
        </h2>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
      </div>
      
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 text-white hover:text-custom-primary transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-custom-primary/20 rounded-lg flex items-center justify-center group-hover:bg-custom-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-custom-primary" />
                </div>
                <div>
                  <p className="text-sm text-white">Email</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </a>
              
              
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-custom-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-custom-primary" />
                </div>
                <div>
                  <p className="text-sm text-white">Ubicación</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Disponibilidad
            </h4>
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Disponible para nuevos proyectos</span>
            </div>
            <p className="text-white text-sm mt-2">
              Tiempo de respuesta: 24 horas
            </p>
          </div>
        </div>
        
        {/* Formulario de contacto */}
        <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-custom-primary" />
            Envíame un mensaje
          </h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-custom-primary focus:ring-1 focus:ring-custom-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-custom-primary focus:ring-1 focus:ring-custom-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-custom-primary focus:ring-1 focus:ring-custom-primary transition-colors"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-custom-primary focus:ring-1 focus:ring-custom-primary transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-custom-primary to-custom-primary-dark py-3 px-6 rounded-lg hover:from-custom-primary-light hover:to-custom-primary transition-all duration-200 text-white font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
