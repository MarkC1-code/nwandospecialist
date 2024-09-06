"use client"
import { useState, ChangeEvent, useEffect, useRef, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import '@/app/globals.css';


const ContactForm: React.FC = () => {
  const [userName, setName] = useState<string>('');
  const [userNumber, setNumber] = useState<string>('');
  const [usermail, setEmail] = useState<string>('');
  const [userMessage, setMessage] = useState<string>('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      userName,
      userNumber,
      usermail,
      userMessage,
    };

    emailjs.send('service_oz2bg4w', 'template_1arg7qo', templateParams, 'Pj0PBG_Tr8QyIh_qv')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setNotification({ type: 'success', message: 'Email sent successfully!' });
        setLoading(false);
        setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
      }, (error) => {
        console.log('FAILED...', error);
        const err = setNotification({ type: 'error', message: 'Failed to send details. Please try again.' });
        setLoading(false);
        setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
      });

    // Clear the form fields
    if (notification?.type==='success') {
      setName('');
      setEmail('');
      setMessage('');
      setNumber('')
    }
   
  };

  return (
    <div className={`relative flex justify-center items-center h-[78vh] text-white transform transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {notification && (
        <div
          className={`fixed top-32 left-1/2 transform -translate-x-1/2 p-1 mr-14 rounded shadow-lg text-white transition-all duration-300 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } animate-heartbeat`}
        >
          {notification.message}
        </div>
      )}
      <form onSubmit={sendEmail} className="form p-8 rounded-lg shadow-lg w-full max-w-md select-none">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#0bb817]">Schedule Appointment</h2>

        {loading && (
          <div className="flex justify-center items-center mb-4">
            <div className="spinner-border animate-spin inline-block w-8 h-8 top-52 border-4 rounded-full border-t-blue-500"></div>
          </div>
        )}
        <div className=' flex'>
        <div className="mb-4">
          <label htmlFor="name" className="block">Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            className=" w-[98%] px-3 py-2 border border-gray-300 rounded mt-1 text-black"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="name" className="block">Number</label>
          <input
            type="number"
              id="userNumber"
            value={userNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
              className=" px-3 w-[98%] py-2 border border-gray-300 rounded mt-1 text-black"
            required
          />
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            type="userMail"
            id="email"
            value={usermail}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1 text-black"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block">Complaint</label>
          <textarea
            id="userMessage"
            value={userMessage}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1 text-black"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ background: 'linear-gradient(to right, #0bb817, black, #0bb817, black, #0bb817)' }}
          className="w-full text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;