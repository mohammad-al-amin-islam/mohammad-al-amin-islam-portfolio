const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I&apos;m a Frontend-focused developer with 2+ years of experience creating scalable web applications using Next.js and TailwindCSS.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My expertise lies in optimizing user experiences and implementing dynamic, real-time features in collaborative team environments.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I&apos;m passionate about building responsive and intuitive interfaces that solve real business problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Frontend Technologies</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>HTML/CSS/JavaScript</li>
                  <li>React/Next.js</li>
                  <li>TailwindCSS/Bootstrap</li>
                  <li>Tanstack Query</li>
                  <li>Redux</li>
                  <li>ShadcnUI/DaisyUI</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Backend & Database</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Node.js/Express</li>
                  <li>GraphQL</li>
                  <li>MySQL/PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>C/C++</li>
                  <li>NextAuth</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-medium mb-2">Tools & Platforms</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Git/GitHub</li>
                  <li>VS Code</li>
                  <li>Cursor</li>
                  <li>Chrome Dev Tools</li>
                  <li>Netlify</li>
                  <li>Vercel</li>
                  <li>Figma</li>
                  <li>Firebase</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Professional Skills</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Communication</li>
                  <li>Leadership</li>
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                  <li>Time Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 