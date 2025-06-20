import type { FC, ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillCard: FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-neutral-900 p-8 rounded-3xl h-full">
      <div className="text-green-400 w-12 h-12 mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default SkillCard;
