import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../assets/jxyKvbInB4OrHTawWubF.png";
import img2 from "../assets/9cFyFfMtcB54VbEBBie2.png";
import { Link } from "react-router-dom";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.from(".skill-mai", {
      y: "100",
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: ".skill-mai",
        start: "top 90%",
        end: "top 30%",
        scrub: 1,
      },
    });
    tl.from(".skc", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".skc",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      },
    });
    tl.from(".on", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".on",
        start: "top 95%",
        end: "top 30%",
        scrub: 1,
      },
    });
    tl.from(".onc", {
      x: 1000,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".onc",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
    });
    tl.from(".tw", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".tw",
        start: "top 95%",
        end: "top 30%",
        scrub: 1,
      },
    });
    tl.from(".twc", {
      x: 1000,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".twc",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
    });
    tl.from(".th", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".th",
        start: "top 95%",
        end: "top 30%",
        scrub: 1,
      },
    });
    tl.from(".thc", {
      x: 1000,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".thc",
        start: "top 80%",
        end: "top 75%",
        scrub: 1,
      },
    });
    tl.from(".img", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
        trigger: ".img",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
    });
  });

  return (
    <div   className=" h-auto skill-mai text-white mb-8 rounded-t-2xl flex flex-col justify-start gap-8 items-center bg-[#180e45] mx-5  lg:mx-25  sm:mx-10 overflow-hidden">
      <div className="text-3xl md:text-5xl skc tracking-widest font-bold  bg-[#403571] text-center p-4 rounded-t-2xl w-full overflow-hidden">
        ABOUT ME
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 items-start px-5 md:px-15 overflow-hidden">
        <div className="w-full md:w-1/3 img h-full flex-col justify-center items-center gap-5 md:gap-20 lg:flex hidden ">
          <img src={img} alt="" className="w-full md:w-auto" />
          <img src={img2} alt="" className="w-full md:w-auto" />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 h-full w-full">
          <p className="text-xl md:text-2xl on"> ✨ About Me </p>
          <h1 className="text-base md:text-lg text-md onc">
            Hi, I'm Pratham Rathore, a passionate and dedicated Full Stack
            Developer based in Indore.<br></br>
            I'm currently pursuing my degree in Computer Science Engineering and
            have built strong expertise in React.js, Node.js, Express.js, and
            MongoDB. I love crafting dynamic, responsive web applications that
            solve real-world problems.
          </h1>
          <p className="text-xl md:text-2xl tw">🚀 My Approach </p>
          <h2 className="text-base md:text-lg text-md twc">
            My approach to development is centered around clean code, scalable
            architecture, and user-centric design. I believe in:
            <ul className="list-disc ml-5">
              <li>Writing maintainable and efficient code</li>
              <li>Staying updated with the latest industry trends</li>
              <li>Continuously learning and experimenting with new tools</li>
              <li>
                Building solutions that are not just functional but also impactful
              </li>
            </ul>
            I focus on delivering high-quality results with a mix of technical
            excellence and creative problem-solving.
          </h2>
          <p className="text-xl md:text-2xl th">🎯 What I Can Offer</p>
          <h3 className="text-base md:text-lg thc text-md">
            <ul className="list-disc ml-5">
              <li>
                Full Stack Web Development with modern technologies (React.js,
                Node.js, MongoDB)
              </li>
              <li>
                Frontend Craftsmanship using Next.js, Tailwind CSS for responsive
                designs
              </li>
              <li>
                Backend Solutions with Express.js, REST APIs, and database
                management
              </li>
              <li>Problem-Solving skills to tackle complex challenges</li>
              <li>
                Commitment to Growth, ensuring your projects stay innovative and
                scalable
              </li>
            </ul>
            My goal is to collaborate, innovate, and bring ideas to life through
            powerful and elegant digital solutions.
            <Link to="/projects"></Link>
            <li>
              Commitment to Growth, ensuring your projects stay innovative and
              scalable
            </li>
            My goal is to collaborate, innovate, and bring ideas to life through
            powerful and elegant digital solutions.
            <Link to="/projects" ><div className="py-2 px-5 mt-3 mb-4  border-transparent bg-[#634ad1] rounded-3xl hover:bg-[#8d7fcc] transition-all  w-38 ">
              <button>View Projects</button>
            </div>
            </Link>
          </h3>

        </div>
      </div>
    </div>
  );
};

export default About;
