import React from "react";
import { data } from "../data/data.js";

const Project = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    // <div name='work' className='w-full md:h-screen text-gray-300 '>
    <div
      name="Projects"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <div>
      <h1 className="text-2xl  credential">Credential</h1>
      <div>
        <b>User:</b>
        <span>Email : user@gmail.com  |  Password : User12</span>
      </div>
      <div>
        <b>Admin:</b>
        <span>Email : admin@gmail.com  |  Password : Admin12</span>
      </div>
    </div>
        </div>
        

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.Frontend} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Frontend
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.Backend} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Backend
                    </button>
                  </a>
                  <a href={item.Live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
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

export default Project;
