import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { IoMail, IoCall } from "react-icons/io5";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const socialIconSize = isMobile ? 18 : 22;
  const socialIcons = [
    <a href="" target="_blank" aria-label="Find more about us on Facebook">
      <FaFacebook
        size={socialIconSize}
        className="text-blue-600 sm:group-hover:scale-125 transition-all"
      />
    </a>,
    <a href="" target="_blank" aria-label="Find more about us on Twitter">
      <FaXTwitter
        size={socialIconSize}
        className="sm:group-hover:scale-125 transition-all"
      />
    </a>,
    <a href="" target="_blank" aria-label="Find more about us on LinkedIn">
      <FaLinkedin
        size={socialIconSize}
        className="text-sky-600 sm:group-hover:scale-125 transition-all"
      />
    </a>,
  ];

  return (
    <footer className="flex flex-col justify-between mx-6 sm:mx-10 border-t-[0.15px] border-gray-300">
      <div className="grid max-[1024px]:grid-rows-1 grid-cols-1 xs:grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-3 xs:gap-4 sm:gap-6 md:gap-8 mt-4">
        <div className="col-span-1 xs:col-span-4 sm:col-span-3 lg:col-span-4 h-full flex flex-col items-start justify-between">
          <p className="text-2xl xs:text-3xl sm:text-4xl font-bebasNeue text-primary">
            LiCircle
          </p>
          <p className="text-sm xs:text-base w-full md:w-[80%] font-oxygen xs:my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <div className="flex items-center justify-between mt-2 xs:my-4">
            {socialIcons.map((icon, index) => (
              <div
                className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 mr-4 cursor-pointer rounded-full border-2 flex justify-center items-center sm:hover:border-primary sm:hover:bg-tertiary1 transition-all duration-200 group"
                key={index}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 xs:col-span-2 sm:col-span-3 lg:col-span-2 h-full flex flex-col items-start">
          <h2 className="text-2xl font-bebasNeue text-primary">What We Do</h2>
          <ul className="text-sm xs:text-base font-oxygen xs:my-2">
            <li>Collection</li>
            <li>Refurbishing</li>
            <li>Segregation</li>
            <li>Mechanical Processing</li>
            <li>Recovering</li>
          </ul>
        </div>
        <div className="col-span-1 xs:col-span-2 sm:col-span-3 lg:col-span-2 h-full flex flex-col items-start">
          <h2 className="text-2xl font-bebasNeue text-primary">Company</h2>
          <p className="flex-1 text-sm xs:text-base font-oxygen xs:my-2">
            <span className="font-bebasNeue text-lg xs:text-xl underline">
              Office:
            </span>{" "}
            #18 1st main, 6th cross, Sudhamanagar, Bangalore&nbsp;-&nbsp;560027,
            Karnataka, India.
          </p>
        </div>
        <div className="mb-4 xs:mb-0 col-span-1 md:col-span-3 lg:col-span-2 h-full flex flex-col items-start">
          <h2 className="text-2xl font-bebasNeue text-primary">Contact</h2>
          <div className="flex flex-col flex-1 items-start text-sm xs:text-base font-oxygen xs:my-2">
            <div className="flex items-center my-1">
              <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 cursor-pointer rounded-full border-2 flex justify-center items-center mr-2 hover:border-primary hover:bg-tertiary1 transition-all duration-200 group">
                <IoMail
                  size={socialIconSize}
                  className="text-sky-600 group-hover:scale-125 transition-all"
                />
              </div>
              <a
                className="md:relative group"
                href="mailto:santosh@licircle.com"
              >
                santosh@licircle.com
                <div
                  className={`absolute w-full h-[0.5px] bg-secondary2 scale-x-0 md:group-hover:scale-x-100 transition-transform duration-200`}
                ></div>
              </a>
            </div>
            <div className="flex items-center">
              <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 cursor-pointer rounded-full border-2 flex justify-center items-center mr-2 hover:border-primary hover:bg-tertiary1 transition-all duration-200 group">
                <IoCall
                  size={socialIconSize}
                  className="text-green-600 group-hover:scale-125 transition-all"
                />
              </div>
              <a className="md:relative group" href="tel:+91 97310 67677">
                +91 97310 67677
                <div
                  className={`absolute w-full h-[0.5px] bg-secondary2 scale-x-0 md:group-hover:scale-x-100 transition-transform duration-200`}
                ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center border-t-[0.15px] border-gray-300">
        <p className="my-2 text-xs font-oxygen text-gray-300">
          Copyright © 2023 LiCircle
        </p>
      </div>
    </footer>
  );
};

export default Footer;
