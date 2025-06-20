import { ArrowDownRight, ArrowLeft, ArrowRight, Atom } from "lucide-react";
import { sportingGrotesque } from "../../fonts";
import { SkillCardProps } from "@/types/types";

const skillsData = [
  {
    icon: <Atom strokeWidth={1} className="w-full h-full" />,
    title: "HTML & CSS",
    description: [
      "Duis aute irure dolor in",
      "reprehenderit in voluptate. Ut",
      "enim ad minim veniam, quis",
    ],
  },
  {
    icon: <Atom strokeWidth={1} className="w-full h-full" />,
    title: "Javascript",
    description: [
      "Duis aute irure dolor in",
      "reprehenderit in voluptate. Ut",
      "enim ad minim veniam, quis",
    ],
  },
  {
    icon: <Atom strokeWidth={1} className="w-full h-full" />,
    title: "Webflow",
    description: [
      "Duis aute irure dolor in",
      "reprehenderit in voluptate. Ut",
      "enim ad minim veniam, quis",
    ],
  },
];

const SkillCard = ({
  icon,
  title,
  description,
  className,
  isLastCard,
}: SkillCardProps) => {
  let containerClasses = "bg-[#1C1C1C]";

  if (isLastCard) {
    containerClasses = "bg-gradient-to-r from-[#1C1C1C] to-transparent";
  }

  return (
    <div
      className={`p-8 rounded-[30px] flex flex-col gap-y-12 transition-all duration-300 w-full lg:w-[430px] lg:h-[365px] ${containerClasses} ${className}`}
    >
      <div className="w-12 h-12 text-white">{icon}</div>
      <h3
        className={`${sportingGrotesque.className} text-2xl font-bold text-white`}
      >
        {title}
      </h3>
      <div>
        {description?.map((line, index) => (
          <p className="text-base leading-relaxed text-gray-400" key={index}>
            {line}
            {index < description?.length - 1 && <br />}
          </p>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="bg-black text-white py-[70px] rounded-[40px]">
      <div className="container mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start gap-8">
          <button className="flex items-center gap-3 border border-gray-700 rounded-full py-2 px-5 text-sm hover:bg-gray-800 transition-colors">
            <span className="bg-gray-700 p-1 rounded-full">
              <ArrowDownRight size={16} />
            </span>
            <p
              className={`${sportingGrotesque.className} text-[16px] font-normal leading-[20px] tracking-[0%]`}
            >
              Why Choose me
            </p>
          </button>
        </header>

        <main className="flex items-start justify-between mt-[45px]">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2
                className={`${sportingGrotesque.className} text-[58px] font-bold leading-[86px] tracking-[-0.03em]`}
              >
                My Extensive
                <br />
                List of Skills
              </h2>

              <div className="text-end">
                <p
                  className={`${sportingGrotesque.className} text-[18px] font-normal leading-[34px] tracking-[0%] text-white`}
                >
                  Building the worlds best marketing Your <br />
                  trusted partner for strategy, design, and dev.
                </p>
                <hr className="bg-white mt-[21px]" />
                <div className="flex items-center justify-end gap-2 mt-[35px]">
                  <button className="border border-gray-700 p-3 rounded-full hover:bg-gray-800 transition-colors">
                    <ArrowLeft size={20} />
                  </button>
                  <button className="border border-gray-700 p-3 rounded-full hover:bg-gray-800 transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row mt-[64px] lg:items-center">
              {skillsData.map((skill, index) => {
                const isMiddleCard = index === 1;
                const isLastCard = index === skillsData.length - 1;

                const cardClasses = [
                  isMiddleCard ? "lg:-translate-y-8 lg:rotate-7" : "",
                ]
                  .join(" ")
                  .trim();

                return (
                  <SkillCard
                    key={skill.title}
                    icon={skill.icon}
                    title={skill.title}
                    description={skill.description}
                    className={cardClasses}
                    isLastCard={isLastCard}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Skills;
