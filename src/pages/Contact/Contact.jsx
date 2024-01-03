import { useMediaQuery } from "react-responsive";

import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

const Contact = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const iconSize = isMobile ? 24 : 30;
  return (
    <>
      <NavBar />
      <div className="px-2 xs:px-8 pt-8 sm:pt-12 mb-12 flex flex-wrap items-center justify-around">
        <div className="px-4">
          <div className="mb-12 max-w-[570px] lg:mb-0">
            <span className="block font-bebasNeue text-lg sm:text-xl tracking-wide font-semibold text-primary">
              Contact Us
            </span>
            <h2 className="mb-3 text-[32px] font-bold font-bebasNeue tracking-wider sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              Get in touch with us
            </h2>
            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[50px] xs:h-[60px] w-full max-w-[50px] xs:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary">
                <svg
                  width={iconSize}
                  height={iconSize}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col items-start justify-center">
                <h4 className="mb-1 text-lg sm:text-lg md:text-2xl tracking-wide font-bold font-bebasNeue">
                  Our Location
                </h4>
                <p className="text-sm sm:text-base font-oxygen">
                  Trishulavel Eshan Pvt. Ltd. (Li-Circle) Plot No. 112
                  Mastenahalli Industrial Area KIADB,{" "}
                  <span className="font-bebasNeue font-semibold underline underline-offset-1">
                    Office:
                  </span>{" "}
                  #18 1st main, 6th cross, Sudhamanagar, Bangalore-560027
                  Karnataka, India.
                </p>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[50px] xs:h-[60px] w-full max-w-[50px] xs:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary">
                <svg
                  width={iconSize}
                  height={iconSize}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_941_17577)">
                    <path
                      d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                      fill="currentColor"
                    />
                    <path
                      d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                      fill="currentColor"
                    />
                    <path
                      d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_941_17577">
                      <rect width={iconSize} height={iconSize} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-full flex flex-col items-start justify-center">
                <h4 className="mb-1 text-lg sm:text-lg md:text-2xl tracking-wide font-bold font-bebasNeue">
                  Phone Number
                </h4>
                <p className="text-sm sm:text-base font-oxygen">
                  <a href="tel:+91 97310 67677">+91 97310 67677</a>
                </p>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[50px] xs:h-[60px] w-full max-w-[50px] xs:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary">
                <svg
                  width={iconSize}
                  height={iconSize}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col items-start justify-center">
                <h4 className="mb-1 text-lg sm:text-lg md:text-2xl tracking-wide font-bold font-bebasNeue">
                  Email Address
                </h4>
                <p className="text-sm sm:text-base font-oxygen">
                  <a href="mailto:santosh@licircle.com">santosh@licircle.com</a>
                </p>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[50px] xs:h-[60px] w-full max-w-[50px] xs:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary">
                <svg
                  width={iconSize}
                  height={iconSize}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 455 455"
                >
                  <g>
                    <path
                      style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                      d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"
                    />
                    <path
                      style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                      d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002zM107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-full flex flex-col items-start justify-center">
                <h4 className="mb-1 text-lg sm:text-lg md:text-2xl tracking-wide font-bold font-bebasNeue">
                  Linkedin
                </h4>
                <p className="text-sm sm:text-base font-oxygen">
                  <a href="https://www.linkedin.com/company/licircle/">
                    LiCircle
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xs:px-4 lg:w-1/2 xl:w-5/12">
          <div className="relative rounded-lg p-8 shadow-lg sm:p-12">
            <form>
              <ContactInputBox
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <ContactInputBox
                type="text"
                name="email"
                placeholder="Your Email"
              />
              <ContactInputBox
                type="text"
                name="phone"
                placeholder="Your Phone"
              />
              <ContactTextArea
                row="6"
                placeholder="Your Message"
                name="details"
                defaultValue=""
              />
              <div>
                <button
                  type="submit"
                  className="w-full rounded border border-primary bg-primary p-3 font-oxygen text-white sm:hover:scale-105 sm:hover:shadow-lg transition-transform duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="shadow-inner bg-gray-100 w-full placeholder:font-oxygen resize-none rounded-lg border px-[14px] py-3 text-base outline-none focus:border-primary"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="shadow-inner w-full placeholder:font-oxygen rounded-lg border px-[14px] py-3 text-base bg-gray-100 outline-none focus:border-primary"
        />
      </div>
    </>
  );
};