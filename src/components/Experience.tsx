import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Junior Full Stack Developer",
      company: "Bit Software Solutions Limited",
      duration: "Feb 2023 - Present",
      description: "Developed unified social media integration hub incorporating WhatsApp, Instagram, and email communications using their APIs. Built real-time chat features. Implemented automated workflow system with n8n. Created responsive dashboards with ShadcnUI components, improving user engagement metrics and streamlining multi-channel communications",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS","Shadcn UI","Tanstack Query","Hasura" ,"N8N","Node.js", "API Integration"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <span className="text-gray-500 dark:text-gray-400">{exp.duration}</span>
              </div>
              <div className="text-lg text-blue-600 dark:text-blue-400 mb-4">{exp.company}</div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 