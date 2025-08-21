import React, { useState } from 'react';
import data from "../data.json";

const Work = () => {
  const project = data;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState("");

  const openModal = (detail) => {
    setSelectedDetail(detail);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDetail("");
  };

  return (
    <div id='project' className='w-full min-h-screen text-gray-300 bg-[#0a192f] sm:pb-[3cm] pt-5'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Project
          </p>
          <p className='py-6'>// Check out some of my recent projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
          {project.map((item, index) => (
            <div
              key={index}
              className="bg-[#112240] shadow-lg shadow-[#040c16] rounded-lg flex flex-col mx-auto w-full max-w-xs"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 object-contain rounded-t-lg bg-white p-2"
              />
              <div className="flex flex-col items-center p-4">
                <span className="text-xl font-bold text-white tracking-wider mt-2 text-center w-full break-words">
                  {item.name}
                </span>
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                  <button
                    className="w-full rounded-lg px-4 py-3 mb-3
                               bg-white text-gray-700 font-semibold text-base
                               transition duration-300 hover:bg-gray-200"
                  >
                    Link
                  </button>
                </a>
                <button
                  onClick={() => openModal(item.viewDetail)}
                  className="w-full rounded-lg px-4 py-3
                             bg-pink-600 text-white font-semibold text-base
                             hover:bg-pink-700 transition duration-300"
                >
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#0a192f] rounded-lg max-w-lg w-full p-6 mx-2 text-gray-300 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-400 hover:text-white font-bold text-2xl leading-none"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-500">Project Detail</h2>
            <p className="whitespace-pre-line text-base md:text-lg">{selectedDetail}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
