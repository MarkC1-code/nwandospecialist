"use client"
import { useState, useEffect } from 'react';
import '@/app/globals.css';


export default function About() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const texts = {
        About: 'About Our Hospital',

        miss: 'Our Mission',
        misDesc:'Our mission is to provide high-quality healthcare services with compassion and respect. We are dedicated to improving the health and well-being of our community through excellence in medical care, education, and research.',
        
        vis: 'Our Vision',
        visDesc:"  Our vision is to be a leader in healthcare, recognized for our commitment to patient-centered care, innovation, and clinical excellence. We strive to create a healthier future for all by embracing new technologies and research-driven practices.",
    
        cont: 'Contact Us',
        contDesc: ' If you have any questions or need further information, please don&apos;t hesitate to contact us at (+234) 8069 026 067 or email us at nwandospecialist@gmail.com. We are here to assist you 24/7.',        
    }

    return (
        <div className= {`h-[83vh] bg-black py-10 text-white transform transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto">
                <h1 className=" text-[#0bb817] text-4xl pb-10 shadi font-bold text-center animate-fade-in-down ">{texts.About}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className=" bg-neutral-800 p-8 shadow-lg rounded-lg transform hover:scale-105 transition duration-500 ease-in-out animate-fade-in-left">
                        <h2 className="text-2xl font-semibold text-white mb-4">{texts.miss}</h2>
                        <p className="text-gray-300 font-bold text-center">{texts.misDesc} </p>
                    </div>
                    <div className="bg-neutral-300 p-8 shadow-lg rounded-lg transform hover:scale-105 transition duration-500 ease-in-out animate-fade-in-right">
                        <h2 className="text-2xl font-semibold text-black mb-4">{texts.vis }</h2>
                        <p className="text-gray-900 text-center font-bold ">{ texts.visDesc}</p>
                    </div>
                    <div className="bg-neutral-300 p-8 shadow-lg rounded-lg transform hover:scale-105 transition duration-500 ease-in-out animate-fade-in-left">
                        <h2 className="text-2xl font-semibold  mb-4">Our Values</h2>
                        <div className=" flex  text-gray-900">
                            <ul className="list-disc list-inside">
                                <li className=" mt-2">Compassion</li>
                                <li className=" mt-2">Integrity</li>
                                <li className=" mt-2">Excellence</li>
                            </ul>
                            <ul className="list-disc list-inside">
                                <li className=" mt-2">Innovation</li>
                                <li className=" mt-2">Collaboration</li>
                             </ul>
                    
                        </div>
                    </div>
                    <div className=" bg-neutral-800  p-8 shadow-lg rounded-lg transform hover:scale-105 transition duration-500 ease-in-out animate-fade-in-right">
                        <h2 className="text-2xl font-semibold text-white mb-4">{texts.cont}</h2>
                        <p className="text-gray-300 text-center font-bold ">{texts.contDesc }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

