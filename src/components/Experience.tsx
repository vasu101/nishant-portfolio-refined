import { experience } from "@/data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="relative mb-24">

          <h1 className="absolute text-[clamp(120px,20vw,220px)] font-black text-black/5 leading-none -top-20 select-none">
            E
          </h1>

          <div className="relative z-10">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Professional
            </p>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Experience
            </h2>

          </div>

        </div>

        {/* Timeline */}
        <div className="space-y-8">

          {experience.map((exp, index) => (
            <div
              key={index}
              className="
                flex flex-col md:flex-row
                md:items-center
                md:justify-between
                gap-5
                py-8
                border-b
                border-gray-200
              "
            >

              <div className="flex-1">

                <h3 className="text-2xl font-bold text-gray-900">
                  {exp.role}
                </h3>

                <p className="text-lg text-gray-600 mt-1">
                  {exp.company}
                </p>

                <p className="text-gray-500 mt-3 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

              </div>

              <div className="text-sm md:text-xl font-bold text-black shrink-0">
                {exp.period}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
