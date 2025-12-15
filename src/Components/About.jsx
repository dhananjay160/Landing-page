import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-16 py-28 bg-black text-white flex items-center justify-center"
    >
      <div className="max-w-4xl text-center space-y-10">
        {/* Heading with gradient text */}
    <h3 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent 
bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
  About Me
</h3>


        {/* Paragraphs with bolder text and increased spacing */}
        <p className="text-gray-300 text-lg md:text-xl font-semibold leading-relaxed">
          Hi, I'm <span  className="text-3xl  font-extrabold bg-clip-text text-transparent 
bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" >Alan Walker</span>, a passionate <span  className="md:text-3xl font-extrabold bg-clip-text text-transparent 
bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Web & Mobile App Developer</span> with experience in building modern, responsive applications. I love creating <span className="text-white">seamless user experiences</span> and writing <span className="text-white">clean, maintainable code</span>.
        </p>

        <p className="text-gray-300 text-lg md:text-xl font-semibold leading-relaxed">
          When I'm not coding, I enjoy exploring <span className="text-white">new technologies</span>, contributing to <span className="text-white">open-source projects</span>, and improving my skills to stay ahead in the fast-paced world of web and mobile development.
        </p>

      
      </div>
    </section>
  );
};

export default About;
