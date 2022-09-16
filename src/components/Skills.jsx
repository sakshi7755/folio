import React from 'react';
import photoshop from "../img/Photoshop.png"
import coral from "../img/Corel.png"
import Design from "../img/Design.png"
import illustrator from "../img/illustrator.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={photoshop} alt="HTML icon" />
                  <p className='my-4'>Photoshop</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-25 h-20 mx-auto' src={coral} alt="HTML icon" />
                  <p className='my-4'>Coral Draw</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20  mx-auto' src={Design} alt="HTML icon" />
                  <p className='my-4'>Indesign</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-25 h-20  mx-auto' src={illustrator} alt="HTML icon" />
                  <p className='my-4'>Illustrator</p>
              </div>
            
          </div>
      </div>
    </div>
  );
};

export default Skills;
