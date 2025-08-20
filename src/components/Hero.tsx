// eslint-disable-next-line no-unused-vars
import Image from "next/image"; // Imported for future use with profile image
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Hi, I&apos;m</span>
              <span className="block text-blue-600 dark:text-blue-400">Md. Al Amin Islam</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
              A Frontend-focused developer with 2+ years of experience in building scalable web applications using Next.js and TailwindCSS. Passionate about creating optimized user experiences and implementing dynamic features.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="#projects" 
                className="rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-blue-700 flex items-center justify-center"
              >
                View My Work
              </Link>
              <Link 
                href="#contact" 
                className="rounded-md bg-gray-100 dark:bg-gray-800 px-5 py-3 text-base font-medium shadow hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800 flex items-center justify-center p-6">
            <Image 
              src="/developer.svg" 
              alt="Developer Icon" 
              width={300}
              height={300}
              className="object-contain dark:invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 