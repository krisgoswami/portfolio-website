import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = React.forwardRef((props, refs) => {
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vxnhrqk', 'template_3ozba4m', ref.current, 'PocBBgNUDjiVTPT3y')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
                setSuccess(false);
            });
    }

    return (
        <div
            ref={refs}
            className="h-max flex justify-around items-center flex-col md:flex-row md:h-screen"
        >
            <div className="flex-1 max-w-screen-md mx-auto text-center md:text-left mb-10 md:mb-0 px-6 md:pl-36">
                <h1 className="text-3xl m-auto md:text-5xl font-bold leading-none mt-10 mb-4 text-orange-400">
                    Contact Me
                </h1>
                <form ref={ref} onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-xl text-white mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full h-10 px-4 text-lg text-black border border-gray-300 rounded focus:outline-none focus:border-blue-400 md:w-2/3"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-xl text-white mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full h-10 px-4 text-lg text-black border border-gray-300 rounded focus:outline-none focus:border-blue-400 md:w-2/3" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-xl text-white mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full h-40 px-2 py-1 text-lg border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 md:w-2/3"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="cursor-pointer w-32 py-2 text-xl bg-red-600 rounded-lg text-white transition duration-300 hover:bg-red-800"
                    >
                        Submit
                    </button>
                    {success && <p className="text-white">Message sent. I'll get back to you shortly.</p>}
                </form>
            </div>
            <div className="relative flex-1">
                <img src='./images/mail.svg' alt="Mail" className="md:w-1/2 m-auto h-full align-middle" />
            </div>
        </div>
    );
});

export default Contact;
