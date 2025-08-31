import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "Bit Software Solutions Limited",
      duration: "Feb 2023 - Present",
      description: "I developed high-performance Next.js and TypeScript interfaces for Fluent, a customer support SaaS, improving user retention. I integrated Microsoft Outlook, Google Business, and WhatsApp Business APIs for automated data sync and chatbot workflows, serving 10+ enterprise clients. I built a ticket communication API for faster email-based issue resolution and implemented GraphQL features with Hasura and PostgreSQL for scalable, real-time data access. I created N8N automation flows as APIs, added business hours functionality, and enabled secure Microsoft Sign-In via NextAuth. I also fixed canned response functionality and collaborated with clients on requirements and solutions.",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS","Shadcn UI","Tanstack Query","Hasura" ,"N8N","Node.js", "API Integration"],
      achievements: [
        "Developed high-performance Next.js and TypeScript interfaces, improving user retention.",
        "Integrated Microsoft Outlook and Google Business APIs for automated data sync for 10+ enterprise clients.",
        "Built WhatsApp Business API integrations with chatbot workflows for customer engagement and automated support.",
        "Implemented ticket communication API for seamless email-based customer support and faster issue resolution.",
        "Created GraphQL features with Hasura and PostgreSQL for scalable, real-time data access.",
        "Developed and maintained N8N automation flows, leveraging them as APIs for core application features.",
        "Collaborated with clients on requirements analysis, feature implementation, and issue resolution.",
        "Implemented business hours functionality, streamlining scheduling and reducing time management errors.",
        "Enabled secure Microsoft Sign-In authentication using NextAuth for single sign-on (SSO).",
        "Debugged and enhanced canned response functionality for reliable automated replies."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span>Experience</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My career path has been driven by continuous learning and passion for creating impactful digital solutions.
          </p>
        </div>
        
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="group relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
              
              <div className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-4 h-4 bg-accent rounded-full border-2 border-background group-hover:bg-foreground transition-colors duration-300"></div>
                
                {/* Content Card */}
                <div className="relative p-8 border border-border rounded-lg hover:bg-accent/30 transition-all duration-300 group-hover:border-foreground/20">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-medium">{exp.position}</h3>
                      <div className="text-lg text-muted-foreground font-medium">{exp.company}</div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-muted-foreground bg-accent rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8">{exp.description}</p>
                  
                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-3 py-1 bg-background border border-border rounded-full text-muted-foreground group-hover:border-foreground/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 