"use client";
import { Twitter, Instagram, Facebook, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { sportingGrotesque } from "../../fonts";

const Hero = () => {
  return (
    <section className="bg-transparent min-h-screen w-full ps-[35px] mt-[95px]">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className={`${sportingGrotesque.className} whitespace-nowrap w-full text-[4.875rem] font-bold leading-[156px] tracking-[-0.03em] text-black`}
        >
          Trusted <span className="bg-black text-white px-2">Partner</span> for{" "}
          <br />
          Your Website{" "}
          <span className="bg-black text-white px-2">Develop.</span>
        </h1>

        <div className="flex flex-row items-start mt-[50px]">
          <div className="flex items-end justify-start w-1/3">
            <p
              className={`${sportingGrotesque.className} whitespace-nowrap -rotate-90 w-10`}
            >
              @williamrey
            </p>
            <div className="flex flex-col gap-4 items-center">
              <a
                href="#"
                aria-label="Twitter Profile"
                className="hover:opacity-70 transition-opacity"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram Profile"
                className="hover:opacity-70 transition-opacity"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook Profile"
                className="hover:opacity-70 transition-opacity"
              >
                <Facebook size={20} />
              </a>
              <div className="w-px h-16 bg-gray-400"></div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full">
            <p
              className={`${sportingGrotesque.className} text-start text-[1.125rem] leading-[33px] font-normal`}
            >
              Building the worlds best marketing websites for over a decade.{" "}
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-[42px] flex h-[78px] w-[247px] items-center justify-start gap-3 rounded-[39px] border"
            >
              <div className="flex w-[54px] h-[54px] rounded-[29px] border items-center justify-center">
                <Phone size={20} />
              </div>
              <span className="text-[18px] leading-[18px] tracking-[-0.04em] font-normal ps-4">Schedule a Call</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
