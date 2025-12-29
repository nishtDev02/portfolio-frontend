import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-8 h-8" />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" />, level: 85 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" />, level: 80 },
  { name: "React.js", icon: <FaReact className="text-blue-400 w-8 h-8" />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-8 h-8" />, level: 70 },
  // { name: "MongoDB", icon: <SiMongodb className="text-green-400 w-8 h-8" />, level: 70 },
]
const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* heading */}
        <h2 className="text-4xl font-heading font-bold text-white mb-8">About Me</h2>

        {/* Bio */}
        <p className="text-gray-400 mb-10">
          Hi! I'm{" "}
          <span className="text-purple-400 font-semibold">Nisht Kumar</span>, a
          MERN Stack Developer passionate about building modern, responsive, and
          scalable web applications. I enjoy turning ideas into real-world
          projects using React, Node.js, and MongoDB. My goal is to create
          clean, performant, and user-friendly experiences.
        </p>


        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
          {skills.map(skill => (
            <div key={skill.name} className="items-center bg-gray-900 p-5 rounded-lg hover:scale-105 transition">
              {skill.icon}
              <p className="mt-3 font-medium text-gray-200">{skill.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: `${skill.level}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
