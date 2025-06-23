import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
      highlight: "Handles 10k+ users with role-based access control"
    },
    {
      title: "Skin Care App",
      tech: "Java Swing • MVC",
      description: "Desktop application with tax billing and inventory management",
      highlight: "Streamlined POS system with automated billing"
    },
    {
      title: "Text Completion App",
      tech: "Flask • GPT-2 • Docker",
      description: "AI-powered text completion with containerized deployment",
      highlight: "95% accuracy with real-time response optimization"
    }
  ];

  const experience = [
    {
      role: "Associate Software Developer",
      company: "DevLabs",
      period: "Jan 2025 – Present",
      description: "Building scalable web applications with microservices architecture"
    },
    {
      role: "Programming Instructor",
      company: "Preply",
      period: "May 2024 – Nov 2024", 
      description: "Mentored 50+ students in Java, Python, and web development"
    }
  ];

  const skills = {
    "Languages": ["Java", "JavaScript", "Python"],
    "Frameworks": ["Spring Boot", "Flask", "Next.js", "Node.js"],
    "Tools": ["Docker", "Kafka", "GitHub Actions", "AWS"]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">Nishant</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
              <a href="#projects" className="hover:text-gray-600 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-gray-600 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
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
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
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
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Full Stack Developer & Problem Solver
                </h1>
                <p className="text-xl text-gray-600">
                  Building digital experiences that are scalable, secure, and smart.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Hi, I'm <span className="font-semibold">Nishant</span> — passionate about crafting reliable software, 
                  mentoring learners, and delivering scalable solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">
                  View My Work
                </Button>
                <Button variant="outline" className="px-8 py-3">
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="lg:flex justify-center hidden">
              <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-300">NS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies & Tools</h2>
            <p className="text-gray-600">Trusted by clients and collaborators at DevLabs, Preply, and more.</p>
          </div>
          
          {/* Animated scrolling container */}
          <div className="relative">
            <div className="flex space-x-4 animate-scroll">
              {/* First set of technologies */}
              {technologies.map((tech, index) => (
                <Badge 
                  key={`first-${index}`} 
                  variant="secondary" 
                  className="px-6 py-3 text-sm bg-white border border-gray-200 hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  {tech}
                </Badge>
              ))}
              {/* Duplicate set for seamless loop */}
              {technologies.map((tech, index) => (
                <Badge 
                  key={`second-${index}`} 
                  variant="secondary" 
                  className="px-6 py-3 text-sm bg-white border border-gray-200 hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
            "Code is not just a job for me – it's a passion that drives clarity, structure, and problem-solving."
          </blockquote>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">A selection of work that showcases my technical expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{project.tech}</p>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <p className="text-sm font-medium text-blue-600">{project.highlight}</p>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-black group-hover:text-white transition-colors">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience Timeline</h2>
            <p className="text-xl text-gray-600">My professional journey and growth</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                        <p className="text-lg font-medium text-gray-600">{exp.company}</p>
                        <p className="text-gray-700 mt-2">{exp.description}</p>
                      </div>
                      <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <Card key={index} className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">{category}</h3>
                  <div className="space-y-2">
                    {items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-gray-700">{skill}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-gray-300">
              Ready to turn your ideas into reality? Let's connect and create something amazing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me Now
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Nishant Singh Shekhawat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
