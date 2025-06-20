// Your final SkillCard component
import { SkillCardProps } from "@/types/types";
import type { FC } from "react";

const SkillCard: FC<SkillCardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  const containerClasses = `bg-neutral-900 p-8 rounded-3xl h-full ${className}`;
  return (
    <div className={containerClasses}>
      <div className="text-green-400 w-12 h-12 mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div>
        {description?.map((line, index) => (
          <p className="text-base leading-relaxed text-gray-400" key={index}>
            {line}
            {index < description.length - 1 && <br />}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
