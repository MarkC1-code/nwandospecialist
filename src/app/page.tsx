"use client"
import React, { useEffect, useState } from 'react';
import Butt from '@/reuseComps/button/page';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return ( 
      <div className=" pb-52 pt-36 text-white text-center bg-bgimage bg-cover bg-center relative"> 
        {/*Blurred background overlay*/}
        <div className="absolute inset-0 bg-blue-800 bg-opacity-20 backdrop-blur-md"></div>
        {/*Content */}
        <div className="relative z-10">      
        <div className={`transform transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="mb-10 text-4xl xs:text-5xl md:text-6xl 3xl:text-7xl ">NWANDO ORTHOPEDIC SPECIALIST HOSPITAL</h1>
          <p className="mb-8 text-sm xs:text-base md:text-lg 3xl:text-xl p-7 pb-0 pt-0"><span className=' relative inset-0 bg-black bg-opacity-50 backdrop-blur-md'>Modernized</span><span className=' relative inset-0 bg-black bg-opacity-50 backdrop-blur-md'> approach to orthopedic cases in Nigeria. With our success record, NSH offer the best orthopedic services through our professional Orthopedic doctors who have records in handling complicated Orthopedic</span> <span className=' relative inset-0 bg-black bg-opacity-50 backdrop-blur-md -ml-1 pl-1'>cases</span></p>
              <Butt />
            </div>
        </div>
      </div>
  );
}