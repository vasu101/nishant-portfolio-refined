import { Badge } from "@/components/ui/badge";
import { technologies } from "@/data/portfolio";

const TechCarousel = () => {
  return (
    <section className="py-8 overflow-hidden">

      <div className="relative">

        <div className="flex gap-4 animate-scroll w-max">

          {technologies.concat(technologies).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="
                px-6
                py-3
                text-sm
                bg-white
                border
                border-gray-200
                hover:bg-gray-50
                transition-colors
                whitespace-nowrap
                flex-shrink-0
              "
            >
              {tech}
            </Badge>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TechCarousel;
