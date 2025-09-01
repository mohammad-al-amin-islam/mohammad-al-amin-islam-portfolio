import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_50%)]"></div>

      {/* Floating Elements */}
      {/* <div className="absolute top-20 left-10 w-2 h-2 bg-muted-foreground/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-muted-foreground/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-muted-foreground/20 rounded-full animate-pulse delay-500"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground">
                <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-light leading-tight">
                <span className="block text-muted-foreground">
                  Hello, I&apos;m
                </span>
                <span className="block font-medium bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Md. Al Amin Islam
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              A passionate full-stack developer specializing in frontend excellence, I create dynamic web applications with Next.js and TypeScript, integrating APIs and automation to deliver scalable, user-focused solutions.
              </p>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
                  <span>2+ Years Experience</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
                  <span>Next.js Specialist</span>
                </div> */}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-accent transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-accent rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Let&apos;s Connect
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Main Circle */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-accent to-muted/50 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full bg-background"></div>

                {/* Floating Icons */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-muted-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>

                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </div>

                {/* Center Content */}
                <div className="relative z-10 flex items-center justify-center w-72 h-72">
                  <Image
                    src="/img_of_al-amin.jpg"
                    alt="Developer"
                    width={288}
                    height={288}
                    className="w-full h-full object-top object-cover rounded-full opacity-80"
                  />
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-32 h-32 border border-border/20 rounded-full"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 border border-border/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
