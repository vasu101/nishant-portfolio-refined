import { Button } from "@/components/ui/button";
import { primaryButton } from "@/utils/styles";

const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 items-center px-6 sm:px-8 lg:px-20 py-20 lg:py-28 gap-14 max-w-7xl mx-auto min-h-screen">

      {/* Left */}
      <div>

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
          Backend Engineer
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight max-w-3xl">
          Engineering backend systems built to scale.
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
          Specialized in distributed systems, workflow orchestration,
          cloud-native APIs, and scalable backend infrastructure
          using Java, Spring Boot, Micronaut, AWS, Kafka,
          and PostgreSQL.
        </p>

      </div>

      {/* Right */}
      <div className="flex justify-center">

        <div className="relative">

          <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] bg-gray-100 rounded-[40px] border-4 border-black overflow-hidden shadow-[8px_8px_0px_#000]">

            <img
              src="/me.jpg"
              alt="Portrait of Nishant"
              loading="lazy"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;