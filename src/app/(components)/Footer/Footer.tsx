import Link from "next/link";
import React from "react";
import { bwGradualDEMO, sportingGrotesque } from "../../fonts";

const Footer = () => {
  const menuLinks = [
    { href: "/#", label: "HOME" },
    { href: "/#", label: "ABOUT" },
    { href: "/#", label: "PORTFOLIO" },
    { href: "/#", label: "BLOG" },
  ];

  const socialLinks = [
    { href: "/#", label: "TWITTER" },
    { href: "/#", label: "INSTAGRAM" },
    { href: "/#", label: "FACEBOOK" },
    { href: "/#", label: "BEHANCE" },
    { href: "/#", label: "DRIBBBLE" },
  ];

  const contactInfo = {
    emails: ["HELLO@DEVLOP.ME.COM", "MAHBUBUL@ME.COM"],
    phones: ["+784549 4981 00", "+8845 0100 211"],
  };

  const FooterLink = ({ href, label }) => (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300"
    >
      {label}
    </a>
  );

  return (
    <footer className="bg-black rounded-[52px]">
      <div className="px-[65px] pt-[90px] mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex items-start text-start justify-start w-1/4">
            <h2
              className={`${bwGradualDEMO.className} font-extrabold text-start text-[34px] leading-[34px] tracking-[-0.02em] text-center`}
              style={{ color: "rgba(197, 255, 65, 1)" }}
            >
              DEVLOP.ME
            </h2>
          </div>
          <div className="flex items-start text-start justify-start w-2/3">
            <div className="flex flex-col">
              <p
                className={`${sportingGrotesque.className} text-start text-white font-bold text-[64px] leading-[64px] tracking-[-0.07em]`}
              >
                As you can
              </p>
              <div className="mt-[138px] mb-[131px] flex flex-col md:flex-row justify-between gap-20 mb-16 md:mb-24">
                <div>
                  <h3
                    className={`${sportingGrotesque.className} mb-[20px]  text-gray-500 text-start font-bold text-[16px] leading-[24px] tracking-[-0.03em]`}
                  >
                    Say hello
                  </h3>
                  <div className="space-y-2">
                    {contactInfo.emails.map((email) => (
                      <Link
                        key={email}
                        href={`mailto:${email}`}
                        className={`${sportingGrotesque.className} block text-gray-300 hover:text-white transition-colors duration-300text-start font-bold text-[16px] leading-[24px] tracking-[0%]`}
                      >
                        {email}
                      </Link>
                    ))}
                  </div>
                  <h3
                    className={`${sportingGrotesque.className} mt-[53px] mb-[20px] text-gray-500 text-start font-bold text-[16px] leading-[24px] tracking-[-0.03em]`}
                  >
                    Call
                  </h3>
                  <div className="space-y-2">
                    {contactInfo.phones.map((phone) => (
                      <Link
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className={`${sportingGrotesque.className} block text-gray-300 hover:text-white transition-colors duration-300text-start font-bold text-[16px] leading-[24px] tracking-[0%]`}
                      >
                        {phone}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-30">
                  <div>
                    <h3
                      className={`${sportingGrotesque.className} mb-[20px] text-gray-500 text-start font-bold text-[16px] leading-[24px] tracking-[-0.03em]`}
                    >
                      Menu
                    </h3>
                    <ul className="space-y-2">
                      {menuLinks.map((link) => (
                        <li
                          key={link.label}
                          className={`${sportingGrotesque.className} block text-gray-300 hover:text-white transition-colors duration-300text-start font-bold text-[16px] leading-[24px] tracking-[0%]`}
                        >
                          <FooterLink href={link.href} label={link.label} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3
                      className={`${sportingGrotesque.className} mb-[20px] text-gray-500 text-start font-bold text-[16px] leading-[24px] tracking-[-0.03em]`}
                    >
                      Social
                    </h3>
                    <ul className="space-y-2">
                      {socialLinks.map((link) => (
                        <li
                          key={link.label}
                          className={`${sportingGrotesque.className} block text-gray-300 hover:text-white transition-colors duration-300text-start font-bold text-[16px] leading-[24px] tracking-[0%]`}
                        >
                          <FooterLink href={link.href} label={link.label} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-[70px] flex justify-between items-center">
          <p
            className={`${bwGradualDEMO.className} font-extrabold text-white text-[24px] leading-[34px] tracking-[-0.02em] text-center`}
          >
            BESNIK
          </p>
          <p
            className={`${sportingGrotesque.className} font-normal text-gray-400 text-[16px] leading-[24px] tracking-[-0.03em] text-center`}
          >
            &copy; devlop.me 2022
          </p>
          <div className="flex space-x-4">
            <Link
              href="/#"
              className={`${sportingGrotesque.className} font-normal text-gray-400 text-[16px] leading-[24px] tracking-[-0.03em] text-center`}
            >
              PRIVACY
            </Link>
            <span
              className={`${sportingGrotesque.className} font-normal text-gray-400 text-[16px] leading-[24px] tracking-[-0.03em] text-center`}
            >
              –
            </span>
            <Link
              href="/#"
              className={`${sportingGrotesque.className} font-normal text-gray-400 text-[16px] leading-[24px] tracking-[-0.03em] text-center`}
            >
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
