"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Cmd from '@/resourses/udem.jpg';
import AssistMD from '@/resourses/assistant.jpg';

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const texts = {
    md: 'Dr Chukwuka Ozumba Udemezue',
    mdDesc: 'Dr. Udemezue, Chief Medical Director in Orthopedic Surgery, Nwando Specialist Hospital is a distinguished expert renowned for his exceptional skill in musculoskeletal procedures. With over 15 years of experience, Dr. Udemezue has a proven track record of pioneering innovative surgical techniques and providing exemplary patient care. Specializing in complex reconstructive surgeries, joint replacements, and minimally invasive procedures, Dr. Udemezue is committed to advancing the field of orthopedics through both clinical excellence and groundbreaking research.',
    
    Amd: 'Dr Uchenna .O.',
    AmdDesc: 'Dr. Uchenna .O is a distinguished Assistant CMD at the Hospital. She exemplifies exceptional leadership in her role. With a profound commitment to patient care and a keen eye for operational efficiency, Dr Uchenna has become a cornerstone of the hospital&apos;s administrative team. Her leadership style is characterized by clear communication, strategic decision-making, and an unwavering dedication to fostering a collaborative environment. Maria&apos;s ability to inspire and guide her colleagues ensures that the hospital runs smoothly, even in the most challenging circumstances. Her proactive approach and innovative solutions consistently enhance the quality of care and streamline hospital processes, making her an invaluable asset to the Hospital.'
  }
  return (
    <section className='bg-black text-white mb-52'>
      <div className='items-center mt-1 pt-4 text-center'>
        <div className={`transform transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Image alt='MD' src={Cmd} className='bg-[#5e3b204a] rounded-full border-solid h-80 w-80 mt-3 mx-auto' />
        </div>
        <h1 className='font-bold mt-2 mb-2'>{ texts.md}</h1>
        <h1 className='font-bold mt-2 mb-2 text-green-500'>(Medical Director)</h1>
        <p className='text-[#878171] pb-4 px-10'>{texts.mdDesc }</p>
        <hr className=' border-[#0bb817]'/>
        <div className='flex flex-col md:flex-row mr-0 pr-0'>
          <div className='content-center'>
            <div className={`transform transition-opacity xs:ml-20 sm:ml-20 mr-32 mt-10 duration-1000 ease-in-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Image alt='MD' src={AssistMD} className='rounded-full md:h-80 w-80 md:mt-3 md:mx-auto h-80 mt-4 pl-5 bg-white mx-auto' />
            </div>
            <h1 className='font-bold mt-2 mr-14'>{texts.Amd}</h1>
            <h1 className='font-bold text-green-600 mt-2 mr-14'>(Assistant MD)</h1>
          </div>
          <p className=' mt-14 w-96 h-40 sm:ml-10 xs:text-center  xs:ml-10 text-[#878171]'>{texts.AmdDesc}</p>
        </div>
      </div>
    </section>
  );
}
