"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-transparent h-[114px] flex justify-between items-center w-full"
    >
      <div className="w-full flex items-center justify-between px-[35px] py-[28px]">
        <div className="font-extrabold uppercase text-[34px] leading-[34px] tracking-[-0.02em] text-black">
          DEVELOP.ME
        </div>
        <ul className="hidden md:flex items-center space-x-[37px]">
          <li>
            <Link
              href="#home"
              className="font-normal text-[16px] leading-[18px] tracking-[0%] text-black transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="font-normal text-[16px] leading-[18px] tracking-[0%] text-black transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="font-normal text-[16px] leading-[18px] tracking-[0%] text-black transition-colors duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#blog"
              className="font-normal text-[16px] leading-[18px] tracking-[0%] text-black transition-colors duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="#start-project"
              className="h-[58px] w-[182px] flex flex-row items-center justify-start rounded-[29px] border border-black bg-transparent text-black font-normal text-[16px] transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[29px] border border-black bg-white transition-colors duration-300 group-hover:bg-black">
                <FaArrowRight className="text-black transition-colors duration-300 group-hover:text-white" />
              </div>

              <span className="whitespace-nowrap font-normal text-[16px] leading-[18px] tracking-[-0.02em] pr-[12px] pl-[19px] py-[20px]">
                Start Project
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
