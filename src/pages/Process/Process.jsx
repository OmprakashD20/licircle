import { useEffect } from "react";
import $ from "jquery";

import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  battery,
  blackMass,
  recovered1,
  recovered2,
} from "@/constants/constants";

import "./Process.scss";

const Proces = () => {
  useEffect(() => {
    function flowChart() {
      if ($(".flow-chart").length) {
        var chart = ".flow-chart";
        var inputText = "_input";
        var svgText = "_text";

        // Chart Title
        var inputGroup6 = "_group6";
        var textGroup6Row1 = $(chart + svgText + inputGroup6 + "-row1");
        textGroup6Row1.text("Circular");
        var textGroup6Row2 = $(chart + svgText + inputGroup6 + "-row2");
        textGroup6Row2.text("Economy");
        var textGroup6Row3 = $(chart + svgText + inputGroup6 + "-row3");
        textGroup6Row3.text("Of LIB");

        // Group 1
        var inputGroup1 = "_group1";
        var inputRow1 = "-row1";
        var inputRow2 = "-row2";
        var inputRow3 = "-row3";
        var inputRow4 = "-row4";
        var inputRow5 = "-row5";
        var inputRow6 = "-row6";
        var inputGroup1Row1 = $(
          chart + inputText + inputGroup1 + inputRow1
        ).text();
        var inputGroup1Row2 = $(
          chart + inputText + inputGroup1 + inputRow2
        ).text();
        var inputGroup1Row3 = $(
          chart + inputText + inputGroup1 + inputRow3
        ).text();
        var inputGroup1Row4 = $(
          chart + inputText + inputGroup1 + inputRow4
        ).text();
        var textGroup1Row1 = $(chart + svgText + inputGroup1 + inputRow1);
        var textGroup1Row2 = $(chart + svgText + inputGroup1 + inputRow2);
        var textGroup1Row3 = $(chart + svgText + inputGroup1 + inputRow3);
        var textGroup1Row4 = $(chart + svgText + inputGroup1 + inputRow4);
        textGroup1Row1.text(inputGroup1Row1);
        textGroup1Row2.text(inputGroup1Row2);
        textGroup1Row3.text(inputGroup1Row3);
        textGroup1Row4.text(inputGroup1Row4);

        // Group 2
        var inputGroup2 = "_group2";
        var inputGroup2Row1 = $(
          chart + inputText + inputGroup2 + inputRow1
        ).text();
        var inputGroup2Row2 = $(
          chart + inputText + inputGroup2 + inputRow2
        ).text();
        var inputGroup2Row3 = $(
          chart + inputText + inputGroup2 + inputRow3
        ).text();
        var inputGroup2Row4 = $(
          chart + inputText + inputGroup2 + inputRow4
        ).text();
        var inputGroup2Row5 = $(
          chart + inputText + inputGroup2 + inputRow5
        ).text();
        var inputGroup2Row6 = $(
          chart + inputText + inputGroup2 + inputRow6
        ).text();
        var textGroup2Row1 = $(chart + svgText + inputGroup2 + inputRow1);
        var textGroup2Row2 = $(chart + svgText + inputGroup2 + inputRow2);
        var textGroup2Row3 = $(chart + svgText + inputGroup2 + inputRow3);
        var textGroup2Row4 = $(chart + svgText + inputGroup2 + inputRow4);
        var textGroup2Row5 = $(chart + svgText + inputGroup2 + inputRow5);
        var textGroup2Row6 = $(chart + svgText + inputGroup2 + inputRow6);
        textGroup2Row1.text(inputGroup2Row1);
        textGroup2Row2.text(inputGroup2Row2);
        textGroup2Row3.text(inputGroup2Row3);
        textGroup2Row4.text(inputGroup2Row4);
        textGroup2Row5.text(inputGroup2Row5);
        textGroup2Row6.text(inputGroup2Row6);

        // Group 3
        var inputGroup3 = "_group3";
        var inputGroup3Row1 = $(
          chart + inputText + inputGroup3 + inputRow1
        ).text();
        var inputGroup3Row2 = $(
          chart + inputText + inputGroup3 + inputRow2
        ).text();
        var inputGroup3Row3 = $(
          chart + inputText + inputGroup3 + inputRow3
        ).text();
        var inputGroup3Row4 = $(
          chart + inputText + inputGroup3 + inputRow4
        ).text();
        var textGroup3Row1 = $(chart + svgText + inputGroup3 + inputRow1);
        var textGroup3Row2 = $(chart + svgText + inputGroup3 + inputRow2);
        var textGroup3Row3 = $(chart + svgText + inputGroup3 + inputRow3);
        var textGroup3Row4 = $(chart + svgText + inputGroup3 + inputRow4);
        textGroup3Row1.text(inputGroup3Row1);
        textGroup3Row2.text(inputGroup3Row2);
        textGroup3Row3.text(inputGroup3Row3);
        textGroup3Row4.text(inputGroup3Row4);

        // Group 4
        var inputGroup4 = "_group4";
        var inputGroup4Row1 = $(
          chart + inputText + inputGroup4 + inputRow1
        ).text();
        var inputGroup4Row2 = $(
          chart + inputText + inputGroup4 + inputRow2
        ).text();
        var inputGroup4Row3 = $(
          chart + inputText + inputGroup4 + inputRow3
        ).text();
        var inputGroup4Row4 = $(
          chart + inputText + inputGroup4 + inputRow4
        ).text();
        var textGroup4Row1 = $(chart + svgText + inputGroup4 + inputRow1);
        var textGroup4Row2 = $(chart + svgText + inputGroup4 + inputRow2);
        var textGroup4Row3 = $(chart + svgText + inputGroup4 + inputRow3);
        var textGroup4Row4 = $(chart + svgText + inputGroup4 + inputRow4);
        textGroup4Row1.text(inputGroup4Row1);
        textGroup4Row2.text(inputGroup4Row2);
        textGroup4Row3.text(inputGroup4Row3);
        textGroup4Row4.text(inputGroup4Row4);

        // Group 5
        var inputGroup5 = "_group5";
        var inputGroup5Row1 = $(
          chart + inputText + inputGroup5 + inputRow1
        ).text();
        var inputGroup5Row2 = $(
          chart + inputText + inputGroup5 + inputRow2
        ).text();
        var inputGroup5Row3 = $(
          chart + inputText + inputGroup5 + inputRow3
        ).text();
        var inputGroup5Row4 = $(
          chart + inputText + inputGroup5 + inputRow4
        ).text();
        var textGroup5Row1 = $(chart + svgText + inputGroup5 + inputRow1);
        var textGroup5Row2 = $(chart + svgText + inputGroup5 + inputRow2);
        var textGroup5Row3 = $(chart + svgText + inputGroup5 + inputRow3);
        var textGroup5Row4 = $(chart + svgText + inputGroup5 + inputRow4);
        textGroup5Row1.text(inputGroup5Row1);
        textGroup5Row2.text(inputGroup5Row2);
        textGroup5Row3.text(inputGroup5Row3);
        textGroup5Row4.text(inputGroup5Row4);
      }
    }

    // Run Functions
    $(window).resize(function () {
      pieChartDesc();
    });
    $(document).ready(function () {
      flowChart();
      // pieChartRotate();
    });
  }, []);
  return (
    <>
      <NavBar />
      <p className="pt-6 sm:pt-8 md:pt-10 text-center font-bebasNeue font-bold xs:text-6xl min-[320px]:text-5xl text-4xl">
        Our <span className="text-primary">Process</span>
      </p>
      <section className="flow-chart">
        <div className="flow-chart-content">
          <p className="flow-chart_input_group1-row1 flow-chart_input">
            EV Battery
          </p>
          <p className="flow-chart_input_group1-row2 flow-chart_input">
            {" "}
            Waste
          </p>
          <p className="flow-chart_input_group1-row3 flow-chart_input"></p>
          <p className="flow-chart_input_group1-row4 flow-chart_input"></p>

          <p className="flow-chart_input_group2-row1 flow-chart_input">
            Supply
          </p>
          <p className="flow-chart_input_group2-row2 flow-chart_input">
            {" "}
            Chain
          </p>
          <p className="flow-chart_input_group2-row3 flow-chart_input">
            {" "}
            Partnership
          </p>
          <p className="flow-chart_input_group2-row4 flow-chart_input"></p>
          <p className="flow-chart_input_group2-row5 flow-chart_input"></p>
          <p className="flow-chart_input_group2-row6 flow-chart_input"></p>

          <p className="flow-chart_input_group3-row1 flow-chart_input">
            Proprietary
          </p>
          <p className="flow-chart_input_group3-row2 flow-chart_input">
            {" "}
            Technology
          </p>
          <p className="flow-chart_input_group3-row3 flow-chart_input"></p>
          <p className="flow-chart_input_group3-row4 flow-chart_input"></p>
          <div className="flow-chart_description_group3 flow-chart_description"></div>
          <p className="flow-chart_input_group4-row1 flow-chart_input">
            Robust
          </p>
          <p className="flow-chart_input_group4-row2 flow-chart_input">
            {" "}
            Product
          </p>
          <p className="flow-chart_input_group4-row3 flow-chart_input"></p>
          <p className="flow-chart_input_group4-row4 flow-chart_input"></p>

          <p className="flow-chart_input_group5-row1 flow-chart_input">
            Second Life
          </p>
          <p className="flow-chart_input_group5-row2 flow-chart_input">
            {" "}
            Energy Storage
          </p>
          <p className="flow-chart_input_group5-row3 flow-chart_input"></p>
          <p className="flow-chart_input_group5-row4 flow-chart_input"></p>
        </div>
        <svg
          version="1.1"
          className="flow-chart-svg"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 500 500"
          style={{ "enable-background": "new 0 0 500 500" }}
          xml:space="preserve"
        >
          <circle
            className="flow-svg-outer-circle"
            cx="247.5"
            cy="251.9"
            r="231.7"
          />
          <g className="flow-chart-group1 flow-chart-group">
            <path
              className="flow-chart-group1_shape flow-chart-group_shape"
              d="M250.3,20l18.2,47.5L250.6,117c0,0,87.4-2,124.7,92h50.4l41.2-31.6C466.9,177.4,417.9,22.6,250.3,20z"
            />
            <text
              transform="matrix(1 0 0 1 264.5667 53.0164)"
              className="fill-white/80"
            >
              <tspan
                x="60"
                y="55"
                className="flow-chart_text_group1-row1"
              ></tspan>
              <tspan
                x="65"
                y="73"
                className="flow-chart_text_group1-row2"
              ></tspan>
              {/* <tspan x="0" y="29.2" className="flow-chart_text_group1-row3"></tspan>
              <tspan x="0" y="43.8" className="flow-chart_text_group1-row4"></tspan> */}
            </text>
          </g>
          <g>
            <circle
              className="flow-svg-inner-circle"
              cx="247.5"
              cy="251.9"
              r="134.8"
            />
            <text
              className="flow-chart-title"
              transform="matrix(1 0 0 1 185.9527 200.864)"
            >
              <tspan
                x="7"
                y="35"
                className="flow-chart_text_group6-row1"
              ></tspan>
              <tspan
                x="-5"
                y="60"
                className="flow-chart_text_group6-row2"
              ></tspan>
              <tspan
                x="15"
                y="88"
                className="flow-chart_text_group6-row3"
              ></tspan>
            </text>
          </g>
          <g className="flow-chart-group5 flow-chart-group">
            <path
              className="flow-chart-group5_shape flow-chart-group_shape"
              d="M29.3,175.7l51.3-1.3l40.3,31c0,0,32.6-83.8,126.5-88.2l17-49l-17-47.9C247.5,20.2,78.9,22.7,29.3,175.7z"
            />
            <g>
              <text
                transform="matrix(1 0 0 1 104.702 57.0164)"
                className="fill-black"
              >
                <tspan
                  x="0"
                  y="40"
                  className="flow-chart_text_group5-row1"
                ></tspan>
                <tspan
                  x="-20"
                  y="58"
                  className="flow-chart_text_group5-row2"
                ></tspan>
                {/* <tspan
                  x="0"
                  y="29.2"
                  className="flow-chart_text_group5-row3"
                ></tspan>
                <tspan
                  x="0"
                  y="43.8"
                  className="flow-chart_text_group5-row4"
                ></tspan> */}
              </text>
            </g>
          </g>
          <g className="flow-chart-group2 flow-chart-group">
            <path
              className="flow-chart-group2_shape flow-chart-group_shape"
              d="M377,212h50.4l40.6-31.4c0,0,50,151.7-81.8,256.8l-42.7-28.8l-15.1-49.1C328.4,359.5,399.6,310,377,212z"
            />
            <text
              transform="matrix(1 0 0 1 370.6653 299.9765)"
              className="fill-white/80"
            >
              <tspan
                x="20"
                y="0"
                className="flow-chart_text_group2-row1"
              ></tspan>
              <tspan
                x="20"
                y="18"
                className="flow-chart_text_group2-row2"
              ></tspan>
              <tspan
                x="-2"
                y="33"
                className="flow-chart_text_group2-row3"
              ></tspan>
            </text>
            {/* <text transform="matrix(1 0 0 1 388.6301 235.3528)">
              <tspan x="0" y="14.6" className="flow-chart_text_group2-row4"></tspan>
              <tspan x="0" y="29.2" className="flow-chart_text_group2-row5"></tspan>
              <tspan x="0" y="43.8" className="flow-chart_text_group2-row6"></tspan>
            </text> */}
          </g>
          <g className="flow-chart-group3 flow-chart-group">
            <path
              className="flow-chart-group3_shape flow-chart-group_shape"
              d="M325.5,361.7l14.7,49.2l42,29.4c0,0-123.6,97.2-269.6,0l14.6-53.7l38.8-24.9
		C166.1,361.7,248.6,417.4,325.5,361.7z"
            />
            <text
              transform="matrix(1 0 0 1 199.4879 424.3419)"
              className="fill-black/90"
            >
              <tspan
                x="0"
                y="0"
                className="flow-chart_text_group3-row1"
              ></tspan>
              <tspan
                x="-7"
                y="18"
                className="flow-chart_text_group3-row2"
              ></tspan>
            </text>
          </g>
          <g className="flow-chart-group4 flow-chart-group">
            <path
              className="flow-chart-group4_shape flow-chart-group_shape"
              d="M108.9,437.5l13.3-53.3l42.4-26.2c0,0-65.5-52-44.7-149.4l-40-30.4l-52.4,1.1C27.4,179.4-23.8,337,108.9,437.5z"
            />
            <text
              transform="matrix(1 0 0 1 44.0334 288.6149)"
              className="fill-black/95"
            >
              <tspan
                x="0"
                y="0"
                className="flow-chart_text_group4-row1"
              ></tspan>
              <tspan
                x="-5"
                y="18"
                className="flow-chart_text_group4-row2"
              ></tspan>
              <tspan
                x="0"
                y="29.2"
                className="flow-chart_text_group4-row3"
              ></tspan>
              <tspan
                x="0"
                y="43.8"
                className="flow-chart_text_group4-row4"
              ></tspan>
            </text>
          </g>
        </svg>
      </section>
      <div className="m-6">
        <p className="p-2 text-center font-bebasNeue font-bold xs:text-6xl min-[320px]:text-5xl text-4xl">
          Our <span className="text-primary">Products</span>
        </p>
        <div className="grid xs:grid-cols-2 lg:grid-cols-4 m-8 gap-8 justify-items-center font-montserrat">
          <Card className="w-[200px] sm:w-[230px] h-[250px] bg-gray-100 shadow-md">
            <CardHeader className="p-0 mb-2 flex flex-col items-center justify-around h-full">
              <img
                src={battery}
                alt="Battery"
                className="pt-4 px-6 h-40 w-48"
              />
              <CardTitle className="flex items-center justify-center">
                <h3 className="text-lg sm:text-xl font-medium">
                  Refurbished Battery
                </h3>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[200px] sm:w-[230px] h-[250px] bg-gray-100 shadow-md">
            <CardHeader className="p-0 mb-2 flex flex-col items-center justify-around h-full">
              <img
                src={blackMass}
                alt="Black Mass"
                className="pt-4 px-6 h-40 relative left-4"
              />
              <CardTitle className="flex items-center justify-center">
                <h3 className="text-lg sm:text-xl font-medium">Black Mass</h3>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[200px] sm:w-[230px] h-[250px] bg-gray-100 shadow-md">
            <CardHeader className="p-0 mb-2 flex flex-col items-center justify-around h-full">
              <img
                src={recovered1}
                alt="Recovered LiCo3"
                className="pt-4 px-6 h-40 w-48"
              />
              <CardTitle className="flex items-center justify-center">
                <h3 className="text-lg sm:text-xl font-medium">
                  Recovered LiCo<sub>3</sub>
                </h3>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[200px] sm:w-[230px] h-[250px] bg-gray-100 shadow-md">
            <CardHeader className="p-0 mb-2 flex flex-col items-center justify-around h-full">
              <img
                src={recovered2}
                alt="Recovered FePO4"
                className="pt-4 px-6 h-40 w-48"
              />
              <CardTitle className="flex items-center justify-center">
                <h3 className="text-lg sm:text-xl font-medium">
                  Recovered FePO<sub>4</sub>
                </h3>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Proces;
