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
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {hasImage ? (
        <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-48 w-full bg-blue-50 dark:bg-blue-900">
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-200 text-center px-6">{title}</h3>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm flex items-center"
          >
            <span>Live Demo</span>
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:underline font-medium text-sm flex items-center"
          >
            <span>Source Code</span>
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
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
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my notable projects. Each demonstrates my technical expertise and attention to detail.
          </p>
        </div>
        
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
      </div>
    </section>
  );
};

export default Projects; 