# My Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js App Router**: Built with the latest Next.js features
- 💎 **TypeScript**: Fully typed for better development experience
- 🎨 **Tailwind CSS**: Utility-first CSS for rapid UI development
- 📱 **Responsive Design**: Looks great on all devices
- 🌙 **Dark Mode**: Supports system dark mode preference
- 🔄 **Interactive UI**: Smooth animations and interactions
- 📨 **Functional Contact Form**: Working contact form using EmailJS

## Pages/Sections

- 🏠 **Home/Hero**: Introduction and call to action
- 👤 **About**: Personal information and skills
- 💼 **Projects**: Showcase of work and projects
- 📬 **Contact**: Contact form to get in touch

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Configure EmailJS (for contact form functionality)
   - Sign up for an account at [EmailJS](https://www.emailjs.com/)
   - Create a service and email template
   - Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

- Edit the content in the components to add your personal information
- Update the Hero section with your name and tagline
- Modify the About section with your bio and skills
- Add your own projects to the Projects section

### Contact Form

The contact form is integrated with EmailJS for easy email sending without a backend server:

1. Your EmailJS template should include variables: `name`, `email`, and `message`
2. Make sure to set up the environment variables as described in the installation section
3. The form includes validation and success/error handling

### Styling

- The project uses Tailwind CSS for styling
- Customize colors, fonts, and other design elements in the Tailwind config
- Add your own custom CSS in the globals.css file

### Images

- Add your personal images to the public directory
- Update the image references in the components

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project to Vercel
3. Add your environment variables in the Vercel project settings
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [EmailJS](https://www.emailjs.com/)
