"use client"
import Phone from '@mui/icons-material/LocalPhoneRounded';
import Mail from '@mui/icons-material/MailOutlineRounded';
import Facebook from '@mui/icons-material/FacebookRounded';
import Link from 'next/link';
import '@/reuseComps/reuse.css'
const Footer: React.FC = () => {
  const emailAddress = 'nwandospecialist@gmail.com';
  const phoneNumber = '08069026067';
  return (
    <footer className=" text-white flex  pl-8 pr-20 pt-4 border-b border-[#0bb817] pb-1 mb-6">
      <div className="text-center md:w-full md:mx-auto md:pl-44 lg:pl-44 xl:pl-44 xs:pl-24  sm:ml-0 xs:ml-0 md:ml-0 pb-5">
        <hr className=' w-24 my-0 mx-auto border-green-500 pb-1' />
        © 2024 NOSH. All rights reserved.
      </div>
      <div className=' flex justify-evenly xs:hidden lg:flex xl:flex md:flex pl-0'>
        <div className=' cursor-pointer'><Facebook /></div>
        <Link className=' cursor-pointer pl-10' href={`mailto:${emailAddress}`}>
        <Mail />
        </Link>
        <Link className=' cursor-pointer pl-10' href={`tel:${phoneNumber}`}>
          <Phone />
        </Link>
    </div>
    </footer >
  );
};

export default Footer;
