import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Nisht Kumar
          </span>
        </h1>

        {/* subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          MERN Stack Developer | React | Node.js | MongoDB
        </p>

        {/* Description */}
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
          I build modern, responsive and scalable web applications using the
          MERN stack. Passionate about clean UI, performance and real-world
          problem solving.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-full text-white font-medium
            bg-gradient-to-r from-purple-500 to-indigo-500
            hover:scale-105 transition"
          >
            Download Resume
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full border border-gray-700
            text-gray-300 hover:border-purple-400 hover:text-purple-400
            transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
