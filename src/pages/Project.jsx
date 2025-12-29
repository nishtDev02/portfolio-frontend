import React, { useState } from "react";

const projects = [
  {
    title: "INoteBook",
    description:
      "A full-stack MERN notes application with authentication, CRUD operations and JWT security.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/nishtDev02",
    live: "",
    image: "",
  },
  {
    title: "TextUtils",
    description:
      "A React-based text utility app to analyze and transform text efficiently.",
    tech: ["React", "JavaScript", "Bootstrap"],
    github: "https://github.com/nishtDev02",
    live: "",
    image: "/projects/textutils.PNG",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built using modern React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/nishtDev02",
    live: "",
    image: "/projects/portfolio.PNG",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-heading font-bold mb-12">Projects</h2>

        {/* projects grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer p-5 bg-gray-900 border border-gray-800
              rounded-xl overflow-hidden hover:border-purple-500
              transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              {/* tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* links */}
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-purple-400 hover:underline"
                >
                  GitHub
                </a>

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-gray-500">
                    Live demo coming soon 🚧
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm
          flex items-center justify-center z-50 px-4"
          >
            <div
              className="bg-gray-900 max-w-2xl w-full rounded-xl
              border border-gray-800 overflow-hidden animate-fadeIn p-4"
            >
              {/* image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-60 object-scale-down"
              />

              {/* content */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-400 mt-4">
                  {selectedProject.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                    bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="px-4 py-2 rounded-md
                  bg-purple-600 hover:bg-purple-700 transition"
                  >
                    GitHub
                  </a>

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      className="px-4 py-2 rounded-md
                      border border-gray-700 hover:border-purple-400"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
