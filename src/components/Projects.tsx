"use client";

import Image from "next/image";
import { useState } from "react";

// Project card component
const ProjectCard = ({ 
  title, 
  description, 
  imageUrl,
  tags, 
  liveUrl, 
  githubUrl
}: {
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}) => {
  const [imageError, setImageError] = useState(false);
  const hasImage = !!imageUrl && !imageError;

  return (
    <div className="group relative border border-border rounded-lg overflow-hidden hover:bg-accent/30 transition-all duration-300">
      {/* Image Section */}
      {hasImage ? (
        <div className="relative h-48 w-full bg-accent overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-48 w-full bg-accent group-hover:bg-accent/80 transition-colors">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-background/50 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
          </div>
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-medium mb-3 group-hover:text-foreground transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-background border border-border rounded-full text-muted-foreground group-hover:border-foreground/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            <span>Live Demo</span>
            <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Source Code</span>
            <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Projects from resume
  const projects = [
    {
      id: 1,
      title: "Company Communication Platform",
      description: "Built a real-time chat application enabling secure, role-based communication for users. Utilized Next.js, TailwindCSS, React Query, and Hasura to create scalable and maintainable architecture.",
      imageUrl: "/images/CCP.png",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Tanstack Query", "PostgreSQL", "Hasura"],
      liveUrl: "http://company-communication-platform.vercel.app/",
      githubUrl: "https://github.com/mohammad-al-amin-islam/company-communication-platform"
    },
    {
      id: 2,
      title: "Tools Artisan",
      description: "A manufacturer website with user and admin dashboards. Users can order tools and make payments via card, while admins can manage products and orders through a comprehensive dashboard.",
      imageUrl: "/images/tools.png",
      tags: ["React.js", "Express.js", "MongoDB", "TailwindCSS", "DaisyUI", "Firebase", "React Router"],
      liveUrl: "https://tools-artisan.web.app/",
      githubUrl: "https://github.com/mohammad-al-amin-islam/tools-artisan-client-side"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span>Projects</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my notable projects that demonstrate my technical expertise and attention to detail.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
            <span>Want to see more?</span>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Check out my GitHub for more projects and contributions
          </p>
          <a
            href="https://github.com/mohammad-al-amin-islam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-accent transition-all duration-300"
          >
            View GitHub Profile
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 