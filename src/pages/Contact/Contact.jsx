import { useMediaQuery } from "react-responsive";

import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

import { Reveal, SlideFromBottom, SlideFromTop } from "@/utils/Animation";

const Contact = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const iconSize = isMobile ? 24 : 30;
  return (
    <>
      <NavBar />
      <div className="px-2 xs:px-8 pt-8 sm:pt-12 mb-12 flex flex-wrap items-center justify-around">
        <div className="px-4">
          <div className="mb-12 max-w-[570px] lg:mb-0">
            <SlideFromTop>
              <span className="block font-bebasNeue text-lg sm:text-xl tracking-wide font-semibold text-primary">
                <span className="relative whitespace-nowrap">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-tertiary1"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="text-primary">Contact Us</span>
                </span>
              </span>
            </SlideFromTop>
            <SlideFromTop delay={0.5}>
              <h2 className="mb-3 text-[32px] font-bold font-bebasNeue tracking-wider sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Get in touch with us
              </h2>
            </SlideFromTop>
            <SlideFromBottom delay={0.8}>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[50px] xs:h-[60px] w-full max-w-[50px] xs:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary">
                  <svg
                    width={iconSize}
                    height={iconSize}
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                  <h4 className="mb-1 text-base sm:text-lg md:text-2xl tracking-tight font-bold font-quando">
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
            </SlideFromBottom>

            <SlideFromBottom delay={1.0}>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[50px] xs:h-[60px] w-full max-w-[50px] xs:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary">
                  <svg
                    width={iconSize}
                    height={iconSize}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                  <h4 className="mb-1 text-base sm:text-lg md:text-2xl tracking-tight font-bold font-quando">
                    Phone Number
                  </h4>
                  <p className="text-sm sm:text-base font-oxygen">
                    <a href="tel:+91 97310 67677">+91 97310 67677</a>
                  </p>
                </div>
              </div>
            </SlideFromBottom>

            <SlideFromBottom delay={1.2}>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[50px] xs:h-[60px] w-full max-w-[50px] xs:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary">
                  <svg
                    width={iconSize}
                    height={iconSize}
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                  <h4 className="mb-1 text-base sm:text-lg md:text-2xl tracking-tight font-bold font-quando">
                    Email Address
                  </h4>
                  <p className="text-sm sm:text-base font-oxygen">
                    <a href="mailto:santosh@licircle.com">
                      santosh@licircle.com
                    </a>
                  </p>
                </div>
              </div>
            </SlideFromBottom>

            <SlideFromBottom delay={1.4}>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[50px] xs:h-[60px] w-full max-w-[50px] xs:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary">
                  <svg width={iconSize} height={iconSize} viewBox="0 0 455 455">
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
                  <h4 className="mb-1 text-base sm:text-lg md:text-2xl tracking-tight font-bold font-quando">
                    Linkedin
                  </h4>
                  <p className="text-sm sm:text-base font-oxygen">
                    <a href="https://www.linkedin.com/company/licircle/">
                      LiCircle
                    </a>
                  </p>
                </div>
              </div>
            </SlideFromBottom>
          </div>
        </div>
        <Reveal className={"w-full xs:px-4 lg:w-1/2 xl:w-5/12"} delay={0.6}>
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
        </Reveal>
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
