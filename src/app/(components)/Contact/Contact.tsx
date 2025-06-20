"use client";
import React, { useState } from "react";
import {
  ArrowDown,
  Phone,
  Send,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { sportingGrotesque } from "../../fonts";
import { InputFieldProps } from "@/types/types";

const InputField: React.FC<InputFieldProps> = ({ label, type = "text" }) => {
  const [value, setValue] = useState("");
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <label
        className={`absolute left-0 transition-all duration-300 pointer-events-none 
          ${
            hasValue
              ? "-top-6 text-sm text-lime-300"
              : "top-0 text-lg text-gray-500"
          }`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-transparent border-b border-gray-700 focus:border-lime-300 outline-none pb-2 text-white"
      />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="bg-[#E0E0E0] min-h-screen flex items-center justify-center font-sans relative overflow-hidden px-[50px]">
      <div className="absolute w-full h-full top-0 left-0">
        <div
          className="absolute bottom-0 left-0 w-full h-3/4 opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at right bottom, rgba(204, 255, 2, 1) 40%, rgba(89, 255, 205, 0.3) 20%, rgba(22, 22, 22, 0) )",
            filter: "blur(68px)",
          }}
        ></div>
      </div>

      <div className="mx-auto z-10">
        <div className="flex items-center justify-between">
          <div className="text-black space-y-6 pe-[40px]">
            <div className="flex items-center justify-start">
              <button className="p-2 h-[44px] w-[44px] rounded-full border border-gray-700 hover:bg-gray-200 transition-colors">
                <ArrowDown />
              </button>
              <button className="border h-[44px] w-[100px] border-gray-700 rounded-[40px] hover:bg-gray-200 transition-colors">
                <p
                  className={`${sportingGrotesque.className} text-[16px] font-normal leading-[20px] tracking-[0%]`}
                >
                  Contact
                </p>
              </button>
            </div>
            <h1
              className={`${sportingGrotesque.className} mt-[40px] whitespace-nowrap text-[78px] font-bold leading-[113px] tracking-[-0.03em]`}
            >
              Interested in <br />
              <span className="bg-black text-white px-4 rounded-md">
                work
              </span>{" "}
              together?
            </h1>
            <p
              className={`${sportingGrotesque.className} mt-[18px] text-[18px] font-normal leading-[33px] tracking-[0%]`}
            >
              We start every new client interaction with an in-depth discovery
              call where we get to know each other.
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
              <span className="text-[18px] leading-[18px] tracking-[-0.04em] font-normal ps-4">
                Schedule a Call
              </span>
            </motion.button>
          </div>

          <div className="bg-black w-3/4 text-white p-8 rounded-3xl relative">
            <form className="space-y-10">
              <InputField label="Enter your name" />
              <InputField label="Your email address" type="email" />
              <InputField label="Describe your project" />

              <div className="pt-6">
                <div className="flex items-center gap-4 ">
                  <div className="h-[54px] w-[127px] flex items-center justify-start border rounded-[39px]">
                    <button
                      type="submit"
                      className="p-2 border border-white rounded-full border border-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <Send size={13} />
                    </button>
                    <button className="border-gray-700 rounded-[40px] hover:bg-gray-200 transition-colors">
                      <p
                        className={`${sportingGrotesque.className} ps-3 text-[18px] font-normal leading-[18px] tracking-[-0.04em]`}
                      >
                        Send
                      </p>
                    </button>
                  </div>

                  <span
                    className={`${sportingGrotesque.className} text-[18px] font-normal leading-[18px] tracking-[-0.04em]`}
                  >
                    or
                  </span>
                  <div className="h-[54px] w-[184px] flex items-center justify-start border rounded-[39px]">
                    <button
                      type="submit"
                      className="p-2 border border-white rounded-full border border-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <Mail size={13} />
                    </button>
                    <button className="border-gray-700 rounded-[40px] hover:bg-gray-200 transition-colors">
                      <p
                        className={`${sportingGrotesque.className} ps-3 text-[18px] font-normal leading-[18px] tracking-[-0.04em]`}
                      >
                        Contact me
                      </p>
                    </button>
                  </div>
                </div>

                <div className="mt-12 flex justify-start items-center w-full">
                  <span
                    className={`${sportingGrotesque.className} text-[18px] font-normal leading-[33px] tracking-[0%]`}
                  >
                    @williamrey
                  </span>
                  <hr className="w-[45px] h-1 ms-[25px] me-[15px]" />
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
