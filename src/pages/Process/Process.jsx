import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

import {
  process1,
  process2,
  process3,
  process4,
  process5,
} from "@/constants/constants";

const Process = () => {
  return (
    <>
      <NavBar />
      <section class="items-center pt-12 font-poppins">
        <div class="justify-center max-w-6xl px-4 pt-4 mx-auto lg:py-8 md:px-6">
          <div class="max-w-xl mx-auto">
            <div class="text-center">
              <div class="relative flex flex-col items-center">
                <p className="font-bebasNeue font-bold xs:text-6xl min-[320px]:text-5xl text-4xl">
                  Our <span className="text-primary">Process</span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full mx-auto lg:max-w-3xl my-8">
            <div class="relative flex justify-between">
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-8 h-8 bg-tertiary2 rounded-full">
                    <div class="w-4 h-4 bg-tertiary1 rounded-full"></div>
                  </div>
                </div>
                <div class="w-px h-full bg-gray-600"></div>
              </div>
              <div className="flex-1">
                <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-tertiary2 to-tertiary1 rounded-3xl">
                  Stage 1
                </h2>
                <div class="relative flex-1 mb-10 bg-gray-100 shadow-lg rounded-3xl">
                  <div class="relative p-6 flex items-center">
                    <img
                      src={process1}
                      alt="Process 1"
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14"
                    />
                    <p class="ml-4 text-sm xs:text-lg sm:text-xl font-oxygen text-gray-600">
                      EoL Battery Collection from EVs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-8 h-8 bg-tertiary2 rounded-full">
                    <div class="w-4 h-4 bg-tertiary1 rounded-full"></div>
                  </div>
                </div>
                <div class="w-px h-full bg-gray-600"></div>
              </div>
              <div className="flex-1">
                <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-tertiary2 to-tertiary1 rounded-3xl">
                  Stage 2
                </h2>
                <div class="relative flex-1 mb-10 bg-gray-100 shadow-lg rounded-3xl">
                  <div class="relative p-6 flex items-center">
                    <img
                      src={process2}
                      alt="Process 2"
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14"
                    />
                    <p class="ml-4 text-sm xs:text-lg sm:text-xl font-oxygen text-gray-600">
                      Supply Chain Partnership
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-8 h-8 bg-tertiary2 rounded-full">
                    <div class="w-4 h-4 bg-tertiary1 rounded-full"></div>
                  </div>
                </div>
                <div class="w-px h-full bg-gray-600"></div>
              </div>
              <div className="flex-1">
                <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-tertiary2 to-tertiary1 rounded-3xl">
                  Stage 3
                </h2>
                <div class="relative flex-1 mb-10 bg-gray-100 shadow-lg rounded-3xl">
                  <div class="relative p-6 flex items-center">
                    <img
                      src={process3}
                      alt="Process 3"
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14"
                    />
                    <p class="ml-4 text-sm xs:text-lg sm:text-xl font-oxygen text-gray-600">
                      Proprietary Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-8 h-8 bg-tertiary2 rounded-full">
                    <div class="w-4 h-4 bg-tertiary1 rounded-full"></div>
                  </div>
                </div>
                <div class="w-px h-full bg-gray-600"></div>
              </div>
              <div className="flex-1">
                <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-tertiary2 to-tertiary1 rounded-3xl">
                  Stage 4
                </h2>
                <div class="relative flex-1 mb-10 bg-gray-100 shadow-lg rounded-3xl">
                  <div class="relative p-6 flex items-center">
                    <img
                      src={process4}
                      alt="Process 4"
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14"
                    />
                    <p class="ml-4 text-sm xs:text-lg sm:text-xl font-oxygen text-gray-600">
                      Robust Product
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-8 h-8 bg-tertiary2 rounded-full">
                    <div class="w-4 h-4 bg-tertiary1 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-tertiary2 to-tertiary1 rounded-3xl">
                  Stage 5
                </h2>
                <div class="relative flex-1 mb-10 bg-gray-100 shadow-lg rounded-3xl">
                  <div class="relative p-6 flex items-center">
                    <img
                      src={process5}
                      alt="Process 5"
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14"
                    />
                    <p class="ml-4 text-sm xs:text-lg sm:text-xl font-oxygen text-gray-600">
                      Second-Life Energy Storage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Process;
