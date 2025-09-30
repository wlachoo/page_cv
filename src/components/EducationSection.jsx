import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { education, certifications } from "../constants";

const EducationSection = () => {
  return (
    <div id="education" className="relative mt-20 border-b border-slate-700 min-h-[600px]">
      <div className="text-center">
        <span className="bg-slate-900 text-custom-primary rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Educación
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Mi{" "}
          <span className="bg-gradient-to-r from-custom-primary to-custom-primary-dark text-transparent bg-clip-text">
            Formación
          </span>
        </h2>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
          Mi trayectoria académica y certificaciones profesionales
        </p>
      </div>
      
      <div className="mt-16">
        {/* Educación Formal */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-custom-primary" />
            Educación Formal
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-custom-primary transition-colors duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <h5 className="text-lg text-custom-primary mb-2">{edu.institution}</h5>
                    <p className="text-white mb-4">{edu.description}</p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-white">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <Award className="w-6 h-6 text-custom-primary" />
            Certificaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-custom-primary transition-colors duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen className="w-5 h-5 text-custom-primary mt-1" />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                    <p className="text-custom-primary text-sm mb-2">{cert.issuer}</p>
                    <p className="text-white text-sm">{cert.date}</p>
                  </div>
                </div>
                <div className="text-xs text-white bg-slate-700/50 px-2 py-1 rounded">
                  ID: {cert.credential}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
