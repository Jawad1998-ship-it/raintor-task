import { ArrowDown } from "lucide-react";
import { sportingGrotesque } from "../../fonts";

const brandsData = [
  {
    name: "awwwards.",
    transform: "rotate-[15deg] -translate-y-2 -translate-x-6",
    special: true,
    width: "267.7px",
    height: "90px",
  },
  {
    name: "CSS WINNER",
    transform: "translate-y-22 -translate-x-95",
    width: "276px",
    height: "90px",
  },
  {
    name: "/thoughtworks",
    transform: "rotate-[-12deg] translate-y-17 -translate-x-87",
    width: "293.23px",
    height: "88.44px",
  },
  {
    name: "facebook",
    transform:
      "-translate-y-10 -translate-x-104 lg:-translate-y-32 lg:translate-x-104",
    width: "276px",
    height: "90px",
  },
  {
    name: "AUTODESK",
    transform: "translate-y-1 translate-x-49",
    width: "276px",
    height: "90px",
  },
  {
    name: "CSSDesignAwards",
    transform: "rotate-[16deg] -translate-y-15 translate-x-31",
    width: "276px",
    height: "90px",
    logo: (
      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.35 7.18h7.55l-6.1 4.44 2.35 7.18-6.1-4.44-6.1 4.44 2.35-7.18-6.1-4.44h7.55z" />
      </svg>
    ),
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col">
      <section className="relative bg-[#F3F3F3] text-black py-20 px-[180px] overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(204,255,2,1),rgba(89,255,205,0),rgba(22,22,22,0))] blur-[68px] rounded-full -translate-x-1/4 -translate-y-1/4"></div>

        <div className="relative z-10 mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center justify-end">
              <button className="p-2 h-[44px] w-[44px] rounded-full border border-gray-700 hover:bg-gray-200 transition-colors">
                <ArrowDown />
              </button>
              <button className="border h-[44px] w-[100px] border-gray-700 rounded-[40px] hover:bg-gray-200 transition-colors">
                <p
                  className={`${sportingGrotesque.className} text-[16px] font-normal leading-[20px] tracking-[0%]`}
                >
                  About
                </p>
              </button>
            </div>
            <h2
              className={`${sportingGrotesque.className} mt-[34px] text-[78px] font-bold leading-[126px] tracking-[-0.03em]`}
            >
              I've been{" "}
              <span className="bg-black text-white px-4 rounded-md inline-block">
                Developing
              </span>
              <br />
              Websites since{""}
              <span className="mt-3 bg-black text-white px-4 rounded-md inline-block">
                2013
              </span>
            </h2>
          </div>

          <p
            className={`${sportingGrotesque.className} px-[70px] text-center mt-[30px] text-[18px] font-normal leading-[33px] tracking-[0%]`}
          >
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 ps-[105px]">
        <h3
          className={`${sportingGrotesque.className} whitespace-nowrap text-center mt-[30px] text-[26px] font-bold leading-[41px] tracking-[-0.025em]`}
        >
          PREVIOUSLY
          <br />
          WORKED ON
        </h3>
        <div className="mt-[120px] flex flex-wrap items-center justify-center w-full">
          {brandsData?.map((brand) => (
            <div
              key={brand?.name}
              className={`flex items-center border border-black rounded-full px-5 py-2 transition-transform duration-300 hover:scale-105 ${
                brand?.transform
              } ${
                brand?.special
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              }`}
              style={{ width: brand?.width, height: brand?.height }}
            >
              {brand?.logo}
              <span className="font-medium text-center w-full">
                {brand?.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
