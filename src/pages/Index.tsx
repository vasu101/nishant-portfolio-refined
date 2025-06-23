
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ArrowUpRight } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technologies = [
    "Java", "Spring Boot", "JavaScript", "Next.js", "React", "Node.js", 
    "Python", "Flask", "Docker", "AWS", "Kafka", "PostgreSQL"
  ];

  const projects = [
    {
      title: "Admin Dashboard",
      tech: "React • Node.js • JWT",
      description: "Secure admin panel with full CRUD operations and authenticated APIs",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Skin Care App",
      tech: "Java Swing • MVC",
      description: "Desktop application with tax billing and inventory management",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Text Completion App",
      tech: "Flask • GPT-2 • Docker",
      description: "AI-powered text completion with containerized deployment",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "E-commerce Platform",
      tech: "React • Spring Boot",
      description: "Full-stack e-commerce solution with payment integration",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  const experience = [
    {
      role: "Associate Software Developer",
      company: "DevLabs",
      period: "2025 – Now",
      description: "Building scalable web applications with microservices architecture"
    },
    {
      role: "Programming Instructor",
      company: "Preply",
      period: "2024 – 2025", 
      description: "Mentored 50+ students in Java, Python, and web development"
    },
    {
      role: "Full Stack Developer",
      company: "Freelance",
      period: "2023 – 2024", 
      description: "Developed custom web solutions for various clients"
    },
    {
      role: "Software Engineering Intern",
      company: "TechCorp",
      period: "2022 – 2023", 
      description: "Contributed to large-scale applications using modern frameworks"
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Building responsive and scalable web applications"
    },
    {
      title: "Backend Development",
      description: "Creating robust APIs and microservices architecture"
    },
    {
      title: "UI/UX Implementation",
      description: "Translating designs into interactive user experiences"
    },
    {
      title: "Code Mentoring",
      description: "Teaching programming concepts and best practices"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">Nishant</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-gray-600 transition-colors">About Us</a>
              <a href="#portfolio" className="hover:text-gray-600 transition-colors">Portfolio</a>
              <a href="#experience" className="hover:text-gray-600 transition-colors">Experience</a>
              <Button variant="outline" className="rounded-full px-6">
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Software<br />Developer
              </h1>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                    alt="Nishant Singh Shekhawat"
                    className="w-56 h-56 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Carousel */}
      <section className="py-8 px-6 overflow-hidden">
        <div className="relative">
          <div className="flex space-x-4 animate-scroll">
            {technologies.concat(technologies).map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-6 py-3 text-sm bg-white border border-gray-200 hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                  alt="About me"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi, I'm <span className="font-semibold">Nishant</span> — passionate about crafting reliable software, 
                mentoring learners, and delivering scalable solutions.
              </p>
              <p className="text-gray-600">
                Building digital experiences that are scalable, secure, and smart. With experience 
                at DevLabs and teaching at Preply, I combine technical expertise with clear communication.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">
                  View My Work
                </Button>
                <Button variant="outline" className="px-8 py-3">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">A Comprehensive look<br />at what we offer and<br />how we deliver</h2>
              <p className="text-gray-600">
                Specializing in full-stack development with a focus on scalable 
                architectures and clean, maintainable code.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover:bg-black hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 bg-white border-0 shadow-sm"
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-white">{service.title}</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">A Yearly snapshot of my<br />creative growth</h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="flex justify-between items-center py-6 border-b border-gray-200">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 mt-1">{exp.description}</p>
                </div>
                <div className="text-2xl font-bold text-black">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore my portfolio of<br />creative solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group aspect-square rounded-lg overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{project.tech}</p>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl lg:text-2xl font-light text-gray-700 leading-relaxed mb-8">
            "Nishant brings structure to every problem and delivers results that speak for themselves."
          </blockquote>
          <div className="text-gray-500">— Development Team Lead, DevLabs</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Let's Connect<br />There
              </h2>
              
              <div className="flex justify-start space-x-6 pt-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:nishant@example.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg rounded-full">
              Hire Me Now
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Nishant</h3>
              <p className="text-sm">Building digital experiences that matter.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Services</h4>
              <div className="space-y-2 text-sm">
                <p>Web Development</p>
                <p>Backend Development</p>
                <p>Code Mentoring</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <div className="space-y-2 text-sm">
                <p>About</p>
                <p>Portfolio</p>
                <p>Contact</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Connect</h4>
              <div className="space-y-2 text-sm">
                <p>GitHub</p>
                <p>LinkedIn</p>
                <p>Email</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Nishant Singh Shekhawat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
