import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col h-full w-full justify-center items-center">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Clint, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am currently pursuing an M.Tech in Computer Science and Engineering with specialization in Artificial Intelligence at Babasaheb Bhimrao Ambedkar University (BBAU), Lucknow. I am passionate about learning and applying machine learning techniques to solve real-world problems.
            </p>
            <p className="mt-4">
              currently working as a full-stack developer, specializing in building modern web applications using React, Node.js, MongoDB, and Express. I have experience in creating RESTful APIs with Express, managing backend logic, and designing responsive frontends. I enjoy crafting efficient, scalable software solutions that improve the lives of users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
