import { Button } from "@/components/ui/button";
import { primaryButton, secondaryButton } from "@/utils/styles";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div className="relative h-[260px] sm:h-[350px] flex items-center justify-center overflow-hidden">

          <h1 className="absolute text-[clamp(120px,25vw,320px)] font-black text-black/5 leading-none select-none">
            HI!
          </h1>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
              ABOUT
              <br />
              ME
            </h2>
          </div>

        </div>

        {/* Right */}
        <div>

          <p className="text-2xl leading-relaxed text-gray-800">
            I’m Nishant — a backend engineer focused on building scalable
            distributed systems, workflow orchestration platforms,
            and high-performance API infrastructure.
          </p>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            I build production-grade systems focused on scalability,
            reliability, and maintainability using Java, Spring Boot,
            Micronaut, Kafka, Redis, AWS Lambda, and PostgreSQL.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a href="#portfolio">
              <Button className={primaryButton}>
                View Projects
              </Button>
            </a>

            <a
              href="/Nishant_Singh_SDE.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="px-8 py-4">
              Resume
            </Button>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
