"use client";

import { motion } from "framer-motion";
import { sportingGrotesque } from "../../fonts";
import { ProcessCardProps } from "@/types/types";

const ArrowDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

const ProcessCard = ({
  title,
  description,
  bgColor,
  textColor,
  isHighlighted = false,
}: ProcessCardProps) => {
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { y: -5, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)" },
  };

  const highlightedStyles = isHighlighted
    ? {
        backgroundColor: "#D4FF40",
        textColor: "#111111",
        rotate: 3,
        scale: 1.05,
        zIndex: 10,
      }
    : {
        backgroundColor: "#1C1C1C",
        textColor: "white",
      };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={!isHighlighted ? "hover" : ""}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full max-w-[635px] aspect-[635/280] flex flex-col items-between justify-center gap-8 px-8 rounded-[30px] sm:text-sm"
      style={{
        backgroundColor: highlightedStyles.backgroundColor,
        color: highlightedStyles.textColor,
        rotate: isHighlighted ? highlightedStyles.rotate : 0,
        scale: isHighlighted ? highlightedStyles.scale : 1,
        zIndex: isHighlighted ? highlightedStyles.zIndex : 1,
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <span
          className={`${sportingGrotesque.className} rounded-[20px] flex items-center justify-center pt-1 text-[1.25rem] sm:text-[1rem] font-normal leading-[34px] tracking-[0%] h-[40px] w-[191px] sm:w-[150px]`}
          style={{
            backgroundColor: isHighlighted ? "#111111" : bgColor,
            color: isHighlighted ? "#D4FF40" : textColor,
          }}
        >
          {title}
        </span>
        <a href="#" className="flex items-center space-x-2 group">
          <span
            className={`${sportingGrotesque.className} text-[1rem] sm:text-[0.875rem] font-normal leading-[18px] tracking-[-0.02em] group-hover:underline`}
          >
            → Read More
          </span>
        </a>
      </div>
      <p
        className={`${sportingGrotesque.className} text-[1.125rem] sm:text-[0.875rem] font-normal leading-[33px] sm:leading-[24px] tracking-[0%]`}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default function WorkProcessPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black w-full rounded-[40px] p-12 shadow-2xl border border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center mb-12"
        >
          <div className="w-1/6 flex">
            <button className="h-[44px] w-[44px] flex items-center justify-center self-start border border-gray-600 text-white rounded-full text-sm hover:bg-gray-800 transition-colors mb-6 md:mb-0">
              <ArrowDownIcon />
            </button>
            <button className="h-[44px] w-[175px] flex items-center justify-center self-start border border-gray-600 text-white rounded-full text-sm hover:bg-gray-800 transition-colors mb-6 md:mb-0">
              <span>Work Process</span>
            </button>
          </div>

          <div className="flex items-center justify-center md:w-2/3 w-full">
            <h1 className="text-white text-5xl md:text-6xl font-bold text-left md:text-right">
              My Work Process
            </h1>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-stretch gap-[10px]"
        >
          <ProcessCard
            title="Discovery"
            description="We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."
            bgColor="rgba(197, 255, 238, 1)"
            textColor="#000"
            isHighlighted={false}
          />
          <ProcessCard
            title="Strategy"
            description="Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth user experience reviews, we're here to set the stage for success."
            bgColor="#D4FF40"
            textColor="#111111"
            isHighlighted={true}
          />
          <ProcessCard
            title="Design"
            description="After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval."
            bgColor="rgba(197, 255, 238, 1)"
            textColor="#000"
            isHighlighted={false}
          />
          <ProcessCard
            title="Build"
            description="Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project."
            bgColor="rgba(197, 255, 238, 1)"
            textColor="#000"
            isHighlighted={false}
          />
        </motion.div>
      </div>
    </div>
  );
}
