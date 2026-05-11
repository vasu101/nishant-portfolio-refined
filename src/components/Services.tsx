import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/portfolio";

const Services = () => {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* Left */}
        <div className="relative h-[260px] sm:h-[350px] flex items-center justify-center overflow-hidden">

          <h1 className="absolute text-[clamp(120px,25vw,320px)] font-black text-black/5 leading-none select-none">
            WI
          </h1>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
              WHAT I
              <br />
              BUILD
            </h2>
          </div>

        </div>
        
        {/* Right */}
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

    </section>
  );
};

export default Services;