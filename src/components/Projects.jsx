import React, { useEffect } from "react";
import { gsap } from "gsap";
import img1 from "../assets/csi.png";
import img2 from "../assets/minor.png";
import img3 from "../assets/canvas.png";
import img4 from "../assets/miranda.png";
import img5 from "../assets/the-Blog.png";
import img6 from "../assets/netflix.png";
import img7 from "../assets/amazon.png";
import img8 from "../assets/Screenshot 2025-06-11 114003.png"
import { FaGithub } from "react-icons/fa";
import { WiDirectionUpRight } from "react-icons/wi";

const Projects = () => {
  const projects = [
    {
      image: img8,
      name: "TALK-Real Time CHAT",
      description: "Using it we can chat with our friends in real time.",
      githubLink: "https://github.com/pratham90/TALK-real-time-chatapp",
      liveLink: "https://talk-real-time-chatapp.onrender.com/",
    },
    {
      image: img1,
      name: "CSI-(COLLEGE CLUB)",
      description: "A project related to CSI.",
      githubLink: "https://github.com/harshitnagar19/CSI",
      liveLink: "https://csi-harshit-nagars-projects.vercel.app/",
    },
    {
      image: img2,
      name: "Health System",
      description: "A health-related project.",
      githubLink: "https://github.com/pratham90/minor-health-system",
      liveLink: "https://minor-health-system.onrender.com",
    },
    {
      image: img3,
      name: "Canvas App",
      description: "A creative canvas application.",
      githubLink: "https://github.com/pratham90/canvas-page",
      liveLink: "https://pratham90.github.io/canvas-page/",
    },
    {
      image: img4,
      name: "Miranda",
      description: "A project named Miranda.",
      githubLink: "https://github.com/pratham90/awarded-website-clone-miranda-",
      liveLink: "https://pratham90.github.io/awarded-website-clone-miranda-/",
    },
    {
      image: img5,
      name: "The Blog",
      description: "A blogging platform.",
      githubLink: "https://github.com/pratham90/flipr-The-Blog",
      liveLink: "https://pratham90.github.io/flipr-The-Blog/",
    },
    {
      image: img6,
      name: "Netflix Clone",
      description: "A clone of Netflix.",
      githubLink: "https://github.com/pratham90/-netflix-Clone",
      liveLink: "https://pratham90.github.io/-netflix-Clone/",
    },
    {
      image: img7,
      name: "Amazon Clone",
      description: "A clone of Amazon.",
      githubLink: "https://github.com/pratham90/amazon-clone",
      liveLink: "https://pratham90.github.io/amazon-clone/",
    },
  ];

  useEffect(() => {
    gsap.to(".project-box", {
      y: "random(-25, 28)", // Random vertical movement
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.in",
    });
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget.querySelector(".details"), {
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget.querySelector(".details"), {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <div className="flex justify-center items-center h-full w-full px-25 pt-30 text-white rounded-t-2xl">
      <div className="flex flex-col gap-20 h-full sm:w-full bg-[#180e45] rounded-t-2xl">
      <div className="text-3xl sm:text-4xl md:text-5xl bg-[#403571] text-center p-4 rounded-t-2xl tracking-widest font-bold w-full overflow-hidden">
       PROJECTS
      </div>
        <div className="flex justify-center items-center  sm:px-0  px-10 w-100 gap-10 flex-wrap overflow-hidden py-5 sm:w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-box h-70 w-90  bg-linear-to-r from-[#4e3f8e] to-[#210f74] rounded-2xl flex flex-col object-contain border-2 overflow-hidden relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-fit"
              />
              <div className="bg-[#8b7ada] h-25 w-full text-black font-semibold flex gap-5 justify-between items-center">
                <h1 className="text-lg  pl-3">{project.name}</h1>
                <div className="flex gap-2 pt-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-2xl pt-2"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-5xl"
                  >
                    <WiDirectionUpRight />
                  </a>
                </div>
              </div>
              <div className="details flex flex-col justify-center items-center text-black bg-[#8b7ada] bg-opacity-90 absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300">
                <p className="text-lg font-bold mb-2">{project.name}</p>
                <p className="text-sm px-4 text-center">{project.description}</p>
                <div className="flex gap-2 pt-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-2xl pt-2"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-5xl"
                  >
                    <WiDirectionUpRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
