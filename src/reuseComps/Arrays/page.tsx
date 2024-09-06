// src/app/page.js or wherever appropriate
import Image from "next/image";
import '@/reuseComps/reuse.css'
import '@/app/globals.css'
import Amputate from '@/reuseComps/compimgs/amputate.jpg';
import Tendon from '@/reuseComps/compimgs/tendon.jpg'; // Ensure correct path
import Ligament from '@/reuseComps/compimgs/ligament.jpg'; // Ensure correct path
import Councel from '@/reuseComps/compimgs/councell.jpg'; // Ensure correct path
import Consult from '@/reuseComps/compimgs/consult.jpg'; // Ensure correct path
import Bone from '@/reuseComps/compimgs/bone.jpg'; // Ensure correct path
import Artro from '@/reuseComps/compimgs/artro.jpg'; // Ensure correct path

const Services = [
    {
        texts: "Delicate complicated Surgeries",
        imgs: <Image className="VARIMG" alt="Delicate complicated Surgeries" src={Amputate} />,
        text2: "A meticulous planning, use of fine instruments and magnification tools, and collaboration among specialists. This method aims to minimize tissue damage, preserve critical structures, and ensure precise execution for optimal patient outcomes.",
        dat: "ADMIN / FEBRUARY 1, 2024",
        bio: true,
        foot: true
    },
    {
        texts: "muscle Disfunctions.",
        imgs: <Image className="VARIMG" alt="muscle Disfunctions" src={Tendon} />,
        text2: " Thorough diagnosis through physical examinations and imaging techniques. A surgical intervention to repair or alleviate the underlying issue. Precision and careful monitoring to restore proper muscle function and ensure effective recovery.",
        dat: "ADMIN/ FEBRUARY 14, 2024",
        bio: true
    },
    {
        texts: "tendons, and ligaments Repair",
        imgs: <Image className="img2" alt="tendons, and ligaments Repair" src={Ligament} />,
        text2: "Precise surgical techniques to reattach or reconstruct the damaged tissues. Use of sutures, grafts, or other fixation devices to restore stability and function.",
        dat: "ADMIN / MARCH 6, 2024",
        bio: true
    },
    {
        texts: "Consultation",
        imgs: <Image className="img2" alt="Consultation and Counselling" src={Councel} />,
        text2: "Classical approach to consultation involves a thorough assessment of the patient's medical history, current condition, and concerns. Our professionals provide expert advice, address questions, and discuss potential treatment options",
        dat: "ADMIN / MARCH 13, 2024",
        bio: true
    },
    {
        texts: "Arthroplasty",
        imgs: <Image className="img2" alt="Arthroplasty and Musculoskeletal Joint Disorders" src={Consult} />,
        text2: "The removal of damaged joint surfaces and their replacement with artificial components. The use of preoperative imaging and precise measurements to ensure the best fit and function of the prosthesis.",
        dat: "ADMIN / MARCH 13, 2024",
        bio: true
    },
    {
        texts: "Amputation with no complications",
        imgs: <Image className="VARIMG" alt="Amputation with no complications" src={Bone} />,
        text2: "Careful preoperative planning and precise surgical technique to ensure the removal of the affected limb while preserving as much healthy tissue as possible. ",
        dat: "ADMIN / FEBRUARY 1, 2022",
        bio: true
    },
    {
        texts: "Consultation",
        imgs: <Image className="VARIMG" alt="Consultation" src={Artro} />,
        text2: " We are committed to providing a comprehensive evaluation of the patient's medical history, symptoms, and concerns. Thorough examinations and diagnostic tests to gather essential information.",
        dat: "ADMIN / APRIL 1, 2024",
        bio: true
    },
    {
        texts: "Musculoskeletal Joint Disorders",
        imgs: <Image className="img2" alt="?" src={Artro} />,
        text2: "For conditions  affecting the joints, such as arthritis, bursitis, and tendonitis. We help through a comprehensive assessment through physical examinations, imaging studies like X-rays or MRI scans, and sometimes joint fluid analysis with a combination of medication for pain and inflammation.",
        dat: "ADMIN / APRIL 17, 2024",
        bio: true
    },
    {
        texts: "Counselling",
        imgs: <Image className="img2" alt="?" src={Artro} />,
        text2: "We offer a structured, supportive process to explore individuals thoughts, emotions, and behaviors in a safe and confidential environment. ",
        dat: "ADMIN / MAY 3, 2024",
        bio: true
    },
    {
        texts: "Public awareness",
        imgs: <Image className="img2" alt="?" src={Artro} />,
        text2: "strategic initiatives designed to inform and educate the general population about specific issues, topics, or causes",
        dat: "ADMIN / MAY 10, 2024",
        bio: true
    },
];

export default Services;
