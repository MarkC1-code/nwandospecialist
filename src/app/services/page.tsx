"use client"

import Count from '@/reuseComps/count/page'
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Imgarrays from '@/reuseComps/Arrays/page';
import '@/app/globals.css';
import SkeletonLoader from '@/reuseComps/skeleton/skeleton';

function Imgcomp() {
    const [isLoading, setIsLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 250); // Simulate a loading delay of 2 seconds

        return () => clearTimeout(timer);
    }, []);
    const fadeone = useSpring({
        opacity: scrollPosition > -100 ? 1 : 1,
        from: { opacity: 0 },
    }
    );

    const fadetwo = useSpring({
        opacity: scrollPosition > -1 ? 1 : 0,
        from: { opacity: 0 },
    }
    );
    const fadethree = useSpring({
        opacity: scrollPosition > 170 ? 1 : -2,
        from: { opacity: 0 },
    }
    );
    const fadefour = useSpring({
        opacity: scrollPosition > 315 ? 1 : -1,
        from: { opacity: 0 },
    }
    );
  
    const fadefive = useSpring({
        opacity: scrollPosition > 405 ? 1 : -3,
        from: { opacity: 0 },
    }
);
    const fadesix = useSpring({
        opacity: scrollPosition > 965 ? 1 : -3,
        from: { opacity: 0 },
    }
);
    const fadeseven = useSpring({
        opacity: scrollPosition > 915? 1 : 0,
        from: { opacity: 0 },
    }
);
    const fadeeight = useSpring({
        opacity: scrollPosition > 1515 ? 1 : -4,
        from: { opacity: 0 },
    }
);
    const fadenine = useSpring({
        opacity: scrollPosition > 1565 ? 1 : -3,
        from: { opacity: 0 },
    }
);
    const fadeten = useSpring({
        opacity: scrollPosition > 1615 ? 1 : -3,
        from: { opacity: 0 },
    }
);


    const Returndlist = Imgarrays.map((props) => {
        return (
            <div className={props.bio ? "kok" : "goo " } key={props.texts}>
                <div className="btnandtext">
                    <h2 className=' text-white'>{props.texts}</h2>
                </div>
                <div>
                    {props.imgs}
                    <h3 className="imgandtext text-white">{props.text2}</h3>
                    <h4>{props.dat}</h4>
                </div>
            </div>
        );
    });
    const texts = {
        service: 'OUR SERVICES',
        desc:'We offer comprehensive orthopedic healthcare services using state-of-the-art facilities. Our team of highly trained specialists provides advanced treatments and evaluations in the field of orthopedics, ensuring the highest quality of care.'
}
    return (
        <div className={`transform transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='text-center bg-black mt-1 pt-12  pb-12 pl-2 pr-2 text-white shad'>
                <h1 className=' font-bold text-[#0bb817] text-7xl'>{texts.service}</h1>
                <p className=' font-mono'>{texts.desc}</p>
            </div>
            <section className='  flex -mt-2'>
                <aside className="widt">
                    
                        {isLoading ? (
                            <SkeletonLoader />
                        ) : (
                            < div className=' sm:ml-5 sm:mr-5 lg:ml-0 xl:ml-0 xl:mr-0 lg:mr-0'>
                                <div className='grid grid-cols-2  xl:flex sm:block xs:block md:block -gap-2 '>
                                    <animated.div style={fadetwo}>{Returndlist[0]}</animated.div>
                                    <animated.div style={fadeone}>{Returndlist[1]}</animated.div>
                                </div>

                                <div className="grid grid-cols-3 xl:flex sm:block xs:block md:block gap-1">
                                    <animated.div style={fadethree}>{Returndlist[2]}</animated.div>
                                    <animated.div style={fadefour}>{Returndlist[3]}</animated.div>
                                    <animated.div style={fadefive}>{Returndlist[4]}</animated.div>
                                </div>
                                <div className="grid grid-cols-2  xl:flex sm:block xs:block md:block -gap-2 ">
                                    <animated.div style={fadesix}>{Returndlist[5]}</animated.div>
                                    <animated.div style={fadeseven}>{Returndlist[6]}</animated.div>
                                </div>
                                <div className="grid grid-cols-3 xl:flex sm:block xs:block md:block gap-1">
                                    <animated.div style={fadeeight}>{Returndlist[7]}</animated.div>
                                    <animated.div style={fadenine}>{Returndlist[8]}</animated.div>
                                    <animated.div style={fadeten}>{Returndlist[9]}</animated.div>
                                </div>
                            </div >
                        )}
                </aside>
                <aside  className=' grid grid-cols-1  xl:flex sm:hidden xs:hidden md:block'>
                    <Count />
                </aside>
            </section>
        </div>
    );
}

export default Imgcomp;
