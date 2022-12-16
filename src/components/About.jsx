import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Bharathkumar V. I'm a Mern stack developer.
        </p>

        <br />

        <p className="text-xl">
          I am a professional and passionate programmer in my daily life. A
          quick learner with a self-learning attitude. I love to learn and
          explore new technologies and am Passionate about Problem Solving. Love
          almost all the stacks of Software Engineering. My current stack
          includes Nodejs, React, HTML, CSS, Java Script, Bootstrap, 
          Material UI, MongoDB, Mysql.
        </p>
      </div>
    </div>
  );
};

export default About;
