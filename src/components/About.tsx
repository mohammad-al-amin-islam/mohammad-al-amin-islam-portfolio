const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "React/Next.js",
        "TypeScript/JavaScript",
        "TailwindCSS",
        "Redux/Zustund",
        "Tanstack Query",
      ],
      description: "Building responsive and interactive user interfaces",
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js/Express",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
        "NextAuth",
      ],
      description: "Creating robust server-side solutions",
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: ["Git/GitHub", "VS Code/Cursor", "Figma", "Vercel", "Sentry", "Linear"],
      description: "Mastering development tools and platforms",
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: [
        "Communication",
        "Leadership",
        "Problem Solving",
        "Team Work",
        "Time Management",
      ],
      description: "Collaborating effectively in team environments",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-15">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span>About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Crafting Digital Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            A dedicated full-stack developer with over 2 years of experience
            focusing on frontend innovation, I craft seamless, high-performance
            web applications using Next.js, TypeScript, and TailwindCSS. Skilled
            in integrating APIs, automating workflows with N8N, and building
            scalable GraphQL solutions, I deliver intuitive customer support
            tools and engaging user experiences for enterprise clients.
          </p>
        </div>

        {/* Personal Story */}
        {/* <div className="mb-20">
          <h3 className="text-2xl font-medium mb-8 text-center">What Drives Me</h3>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I believe in creating user experiences that are not just functional, but delightful. 
              Every line of code I write is an opportunity to make someone&apos;s digital interaction better.
            </p>
            <p>
              My expertise lies in optimizing user experiences and implementing dynamic, real-time features 
              in collaborative team environments. I&apos;m passionate about building responsive and intuitive 
              interfaces that solve real business problems.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in continuous learning and staying 
              up-to-date with the latest industry trends.
            </p>
          </div>
        </div> */}

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-medium mb-8 text-center">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative p-6 border border-border rounded-lg hover:bg-accent/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{category.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-medium mb-2">
                      {category.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-3 py-1 bg-background border border-border rounded-full text-muted-foreground group-hover:border-foreground/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        {/* <div className="text-center">
          <h3 className="text-2xl font-medium mb-8">Quick Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-6 border border-border rounded-lg bg-background/50">
              <div className="text-3xl font-medium mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 border border-border rounded-lg bg-background/50">
              <div className="text-3xl font-medium mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 border border-border rounded-lg bg-background/50">
              <div className="text-3xl font-medium mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="text-center p-6 border border-border rounded-lg bg-background/50">
              <div className="text-3xl font-medium mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
