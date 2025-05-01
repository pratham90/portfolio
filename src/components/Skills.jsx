import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SkillSection = ({ title, skills, className }) => (
  <div>
    <h1 className={`text-xl font-bold pl-1 ${className}`}>{title}</h1>
    <div className={`flex gap-5 flex-wrap w-full mb-5 overflow-hidden ${className}`}>
      {skills.map(({ Icon, name, color }, index) => (
        <div
          key={index}
          className="flex flex-col justify-start lg:gap-7 gap-2 items-center p-5 border-transparent rounded-2xl bg-[#d5d8d8ee] overflow-hidden h-25 w-25 sm:w-28 md:w-35 md:h-32 lg:w-36 lg:h-36"
        >
          <Icon
            className={`z-10 ${color}`}
            style={{
              width: '3rem',
              height: '3rem',
              minWidth: '3rem',
              minHeight: '3rem',
            }}
          />
          <h1 className="text-black font-semibold text-sm sm:text-base md:text-lg">{name}</h1>
        </div>
      ))}
    </div>
  </div>
);


const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({});
    const animations = [
      { trigger: ".skill-main", y: 100, className: ".skill-main" },
      { trigger: ".sk", y: -100, className: ".sk" },
      { trigger: ".h1", x: -100, className: ".h1" },
      { trigger: ".full", y: 50, className: ".full" },
      { trigger: ".h2", x: -100, className: ".h2" },
      { trigger: ".data", y: 50, className: ".data" },
      { trigger: ".h3", x: -100, className: ".h3" },
      { trigger: ".tool", y: 50, className: ".tool" },
    ];

    animations.forEach(({ trigger, x = 0, y = 0, className }) => {
      tl.from(className, {
        x,
        y,
        opacity: 0,
        duration: 0.5,
        stagger: 1,
        scrollTrigger: {
          trigger,
          start: "top 95%",
          end: "top 60%",
          scrub: 1,
          // markers:true
        },
      });
    });
  });

  const fullStackSkills = [
    { Icon: FaReact, name: "React js", color: "text-cyan-500" },
    { Icon: FaNodeJs, name: "Node js", color: "text-green-500" },
    { Icon: SiNextdotjs, name: "Next js", color: "text-black" },
    { Icon: SiTailwindcss, name: "TailwindCss", color: "text-cyan-500" },
    { Icon: SiExpress, name: "Express js", color: "text-black" },
  ];

  const databaseSkills = [
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-700" },
    { Icon: SiMysql, name: "MySQL", color: "text-blue-700" },
  ];

  const tools = [
    { Icon: FaGithub, name: "GitHub", color: "text-black" },
    { Icon: FaGitAlt, name: "Git", color: "text-orange-700" },
    { Icon: VscVscode, name: "Vs Code", color: "text-[#23ABF4]" },
  ];

  return (
    <div className="h-auto skill-main mt-10 text-white rounded-t-2xl flex flex-col justify-start gap-12 items-start   bg-[#180e45] mx-5 lg:mx-25  sm:mx-10 sm:mt-4  overflow-hidden mb-30">
      <div className="text-3xl sm:text-4xl sm:w-full tracking-widest font-bold  md:text-5xl sk bg-[#403571] text-center p-4 rounded-t-2xl w-full">
        SKILL
      </div>
      <div className="flex flex-col gap-5 pl-8  lg:px-20">
        <SkillSection title="Full Stack Development " skills={fullStackSkills} className="full mb-5" />
        <SkillSection title="Database" skills={databaseSkills} className="data mb-5" />
        <SkillSection title="Tools" skills={tools} className="tool mb-5" />
      </div>
    </div>
  );
};

export default Skills;
