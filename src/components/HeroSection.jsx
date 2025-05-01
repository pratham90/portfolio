import React from "react";
import "../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Model from "./heroModel";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.from(".bg", {
      y: "-1000",
      opacity: 0,
      duration: 0.7,
    });

    tl.from(".text-line", {
      y: 300,
      duration: 1,
      stagger: 0.4,
      ease: "power2.out",
    });

    // tl.from(".text", {

    //   opacity: 0,
    //   duration: 0.5,

    // });
    tl.from(".name", {
      y: 80,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(".pos", {
      x: -80,
      opacity: 0,
      duration: 0.5,
    });
  });

  return (
    <div className="hero text-sm:h-[40rem] sm:w-full sm:px-10 lg:px-25 lg:pt-[7.5rem] flex flex-col justify-start items-center w-full px-5 h-[47.5rem] pt-[7.5rem] overflow-hidden">
      <div className="bg bg-[#180e45] sm:h-[22.5rem] lg:h-[25rem] border-transparent rounded-t-2xl w-full h-[32.5rem]">
        <div className="items-center overflow-hidden flex lg:justify-between lg:pl-[2.75rem] lg:pr-[15rem] justify-around sm:h-[18rem] h-[30rem] w-full">
          <h1 className="intro sm:text-3xl text-xl lg:text-4xl flex px-10 flex-col bg-linear-to-t from-blue-300 to-white text-transparent font-semibold tracking-tighter bg-clip-text gap-5 pt-8 overflow-hidden">
            <span className="text-line bg-linear-to-t from-blue-300 to-white tracking-tighter bg-clip-text">
              Hi...
            </span>
            <span className="text-line bg-linear-to-t from-blue-300 to-white tracking-tighter bg-clip-text">
              Passionate Developer
            </span>
            <span className="text-line bg-linear-to-t from-blue-300 to-white tracking-tighter bg-clip-text">
              Creative Thinker
            </span>
            <span className="text-line bg-linear-to-t from-blue-300 to-white tracking-tighter bg-clip-text">
              Problem Solver
            </span>
          </h1>
          <Model />
        </div>
        <h1 className="name relative lg:text-9xl lg:top-[2.5rem] lg:left-[4.75rem] sm:top-[2.5rem] md:text-7xl md:top-[2rem] md:-right-[12.5%] sm:left-[2.25rem] sm:text-6xl text-4xl top-[1.25rem] left-[1.25rem] text-transparent bg-linear-to-t from-blue-300 to-white stroke-2 font-bold tracking-tighter bg-clip-text">
          PRATHAM RATHORE
        </h1>
      </div>
      <div className="relative sm:top-[2.25rem] lg:text-2xl lg:top-[3.75rem] lg:right-[28.5rem] sm:right-[11.25rem] sm:text-lg md:right-[15rem] text-md pos right-[4.5rem] top-[1.25rem] text-white">
        <h1>MERN Stack Developer</h1>
      </div>
      <Link to="/projects">
        <div className="relative border-amber-50 border-[0.0625rem] sm:px-3 lg:top-[2rem] lg:left-[31.25rem] text-white sm:py-2 rounded-3xl sm:top-[0.75rem] hover:border-[0.125rem] sm:left-[12.25rem] sm:text-md text-sm p-2 pos top-[2rem] right-[5rem]">
          <h1 className="flex justify-center items-center gap-2">
            VIEW PROJECTS <FaArrowRight className="font-extralight pt-1" />
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default HeroSection;
