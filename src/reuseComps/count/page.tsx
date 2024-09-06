"use client"
import '@/reuseComps/reuse.css'
// components/Counter.tsx
import '@/reuseComps/reuse.css'

import { useEffect, useState, useRef } from 'react';

const Counter: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [startCounting, setStartCounting] = useState(false);
    const counterRef = useRef<HTMLDivElement | null>(null);

    const isInViewport = (element: HTMLElement | null): boolean => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    useEffect(() => {
        const onScroll = () => {
            if (counterRef.current && isInViewport(counterRef.current)) {
                setStartCounting(true);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        if (startCounting) {
            let currentProgress = 0;
            const targetProgress = 98.4;
            const increment = targetProgress / 100;
            const interval = 20; // interval in ms

            const intervalId = setInterval(() => {
                currentProgress += increment;
                if (currentProgress >= targetProgress) {
                    currentProgress = targetProgress;
                    clearInterval(intervalId);
                }
                setProgress(currentProgress);
            }, interval);
        }
    }, [startCounting]);

    return (
        <div className="flex  flex-col items-center justify-center rate sticky top-28 mt-4  text-center ml-2 w-48 ">
            <div className="relative w-64 h-64 -mt-52" ref={counterRef}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold">{progress.toFixed(1)}%</span>
                </div>
                <svg className="w-full animate-heartbeat h-full">
                    <circle
                        className="text-gray-300"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="transparent"
                        r="30%"
                        cx="50%"
                        cy="50%"
                    />
                    
                    <circle
                        className="text-[#0bb817]"
                        strokeWidth="4"
                        strokeDasharray={`${progress} ${100 - progress}`}
                        strokeDashoffset="25"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="30%"
                        cx="50%"
                        cy="50%"
                    />
                </svg>
                <div className="flex ml-16 items-center ">
                    <div className="arrow-left w-4 h-4 border-t-4 border-l-4 border-black transform rotate-45 mr-2"></div>
                    <h3 className="text-xl text-[#0a9113] font-semibold">Success Rate</h3>
                </div>
                <div className=' mt-12 pl-9 pr-9'><hr className=' border-black' />Over a thousand complicated cases handled with no complications <hr className=' border-black mt-4'/></div>
            </div>
        </div>
    );
};

export default Counter;
