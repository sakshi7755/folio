import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm sakshi, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='py-4'>I Take my work seriously and see every job through 
to the end. I have a great desire to learnnew things 
and develop in the field of design.Creativity and 
creative thinking are the components that help 
me to successfully complete projects.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
