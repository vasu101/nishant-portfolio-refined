
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
  "Java",
  "Spring Boot",
  "Micronaut",
  "AWS Lambda",
  "AWS S3",
  "Apache Kafka",
  "PostgreSQL",
  "Redis",
  "Spring Security",
  "REST APIs",
  "Microservices",
  "Distributed Systems",
  "Workflow Engines",
  "Docker",
  "Next.js",
  "GitHub Actions",
  "SQL",
  "JavaScript"
];
  const projects = [
  {
    title: "Vendor Onboarding Platform",
    tech: "Java • Micronaut • REST APIs",
    description:
      "Stateful vendor onboarding workflow system with multi-stage approval pipelines, dynamic state transitions, and auditable onboarding workflows.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692"
  },
  {
    title: "WorkLedger",
    tech: "Java • Spring Boot • PostgreSQL",
    description:
      "Backend work tracking system managing task lifecycle, employee effort tracking, and audit-ready activity records.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    title: "Workflow Execution Engine",
    tech: "Java • Distributed Systems • DAG Processing",
    description:
      "Designed a DAG-based workflow orchestration engine supporting dynamic task execution, dependency resolution, retries, and concurrency control.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  },
  {
    title: "Training Management System",
    tech: "Java • PostgreSQL • Backend Architecture",
    description:
      "Built a scalable learning platform supporting assessments, program hierarchies, learner tracking, and cohort analytics.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  }
];

  const experience = [
    {
    role: "Software Engineer",
    company: "Sarvika Technologies",
    period: "Aug 2025 – Present",
    description:
      "Building Java-based serverless backend systems, workflow orchestration engines, and scalable PostgreSQL-powered APIs handling high-volume enterprise workloads."
    },
    {
    role: "Associate Software Developer",
    company: "DevLabs Technology",
    period: "Jan 2025 – Jul 2025",
    description:
      "Developed Spring Boot backend services, REST APIs, and modular business workflow systems for enterprise applications."
    },
    {
      role: "Programming Instructor",
      company: "Preply",
      period: "2024 – 2025", 
      description: "Mentored 50+ students in Java, Python, and web development"
    },
    {
      role: "Engineering Student",
      company: "Govt. Engineering College Bikaner",
      period: "2019 – 2023", 
      description: "Study various engineering related subjects"
    },
  ];

  const services = [
  {
    title: "Backend System Engineering",
    description:
      "Designing scalable Java backend systems using Spring Boot, Micronaut, and distributed service architectures."
  },
  {
    title: "Workflow Orchestration Platforms",
    description:
      "Building DAG-based execution systems with dependency resolution, retries, concurrency handling, and runtime task orchestration."
  },
  {
    title: "Cloud & Serverless Architecture",
    description:
      "Developing AWS Lambda-powered microservices and scalable cloud-native backend infrastructure."
  },
  {
    title: "Database Performance Optimization",
    description:
      "Optimizing PostgreSQL queries, schema design, and backend data pipelines for low-latency enterprise applications."
  }
];
  

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">NISHANT</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
              <a href="#portfolio" className="hover:text-gray-600 transition-colors">Portfolio</a>
              <a href="#experience" className="hover:text-gray-600 transition-colors">Experience</a>
              <a href="#contact">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">
                HIRE ME!
              </Button>
              </a>
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
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="min-h-screen flex items-center justify-center p-6">
    {/* Hero */}
    <section className="grid lg:grid-cols-2 items-center px-10 lg:px-20 py-16 lg:py-24 gap-16">

      {/* Left Side */}
      <div>

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
          Backend Engineer
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
          Building scalable backend systems.
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
          Specialized in distributed systems, workflow orchestration,
          cloud-native APIs, and scalable backend infrastructure using
          Java, Spring Boot, Micronaut, AWS, Kafka, and PostgreSQL.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a href="#portfolio">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">
                View My Projects
              </Button>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center">

        <div className="relative">

          <div className="w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] bg-gray-100 rounded-[40px] border-4 border-black overflow-hidden shadow-[8px_8px_0px_#000]">

            <img
              src="/1000028419.jpg"
              alt="Backend Engineer Illustration"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>

</div>

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
      {/* About Section */}
<section id="about" className="py-32 px-6">

  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* Typography Side */}
    <div className="relative h-[350px] flex items-center justify-center overflow-hidden">

      {/* Giant Background Letter */}
      <h1 className="absolute text-[320px] font-black text-black/5 leading-none select-none">
        HI!
      </h1>

      {/* Foreground Title */}
      <div className="relative z-10">
        <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
          ABOUT
          <br />
          ME
        </h2>
      </div>

    </div>

    {/* Content Side */}
    <div>

      <p className="text-2xl leading-relaxed text-gray-800">
        I'm Nishant — a backend engineer focused on building scalable
        distributed systems, workflow orchestration platforms,
        and high-performance API infrastructures.
      </p>

      <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        I specialize in Java backend engineering using Spring Boot,
        Micronaut, AWS Lambda, Kafka, Redis, and PostgreSQL.
        My work revolves around building production-grade systems,
        optimizing backend performance, and designing reliable
        service architectures.
      </p>

      <div className="flex gap-4 mt-10">
        <a
          href="#portfolio"
          className="bg-black text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-full"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="border border-black px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-full"
        >
          Resume
        </a>
      </div>

    </div>

  </div>

</section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Services I Offer as a <br />Full Stack Developer</h2>
              <p className="text-gray-600">
              Combining frontend finesse, backend reliability, and deployment expertise <br />to deliver end-to-end web solutions that scale.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden bg- hover:bg-black hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 bg-white border-0 shadow-sm rounded-xl"
                >
                 <div className="h-[2px] w-8 bg-gray-300 group-hover:bg-white mt-5 ml-5"></div>
                  
                 <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 rounded-bl-full pointer-events-none z-0"></div>
                 <div className="absolute top-2 right-2 w-20 h-20 bg-white opacity-10 rounded-bl-full pointer-events-none z-0"></div>

                  <CardContent className="p-5">
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
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
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
      {/* Portfolio Section */}
<section id="portfolio" className="py-32 px-6">

  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="relative mb-24">

      <h1 className="absolute text-[220px] font-black text-black/5 leading-none -top-20 select-none">
        P
      </h1>

      <div className="relative z-10">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
          Selected Work
        </p>

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          Portfolio
        </h2>
      </div>

    </div>

    {/* Project Grid */}
    <div className="grid md:grid-cols-2 gap-8">

      {projects.map((project, index) => (

        <div
          key={index}
          className="border border-gray-200 rounded-[32px] p-10 hover:-translate-y-1 transition-all duration-300 bg-white"
        >

          {/* Number */}
          <p className="text-sm text-gray-400 mb-6">
            0{index + 1}
          </p>

          {/* Title */}
          <h3 className="text-3xl font-bold tracking-tight mb-4">
            {project.title}
          </h3>

          {/* Tech */}
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-6">
            {project.tech}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex gap-6 mt-10 text-sm font-semibold uppercase tracking-wide">

            <a href="#">
              Github
            </a>

            <a href="#">
              Live
            </a>

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
                <a href="https://github.com/vasu101" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/nshekhawat/" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:nishantshekhawat@gmail.com" className="text-gray-400 hover:text-white transition-colors">
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
