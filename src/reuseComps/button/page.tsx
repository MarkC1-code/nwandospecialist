"use client"
import '@/reuseComps/reuse.css';
import Link from 'next/link';

export default function Page() {
  
 
  return (
    <Link href='/form'  className="rounded-md mb-5 text-nowrap pl-2 pr-2 pt-1 pb-2 text-white border-red-300 hover:bg-blue-800"
      style={{ background: 'linear-gradient(to right, black, #0bb817, black, #0bb817)' }}>
      Schedule Appointment
      </Link>
  );
}
