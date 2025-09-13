import React, { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Email = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });

    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_hw5ay0d',
            'template_i3m1ax7',
            formRef.current,
            'gNthKFwAIYxa_vGaZ'
        )
        .then(
            (result) => {
                toast.success('Your message has been successfully sent!', {
                    position: "top-right",
                    autoClose: 1000,
                });
                setFormData({ from_name: '', from_email: '', message: '' });
            },
            (error) => {
                toast.error('Failed to send the message. Please try again later.');
            }
        );
    };

    return (
        <section
            className="py-12 bg-gradient-to-br from-[#1E1E2F] via-[#2C2C3F] to-[#3A3A50]"
            id="contact"
        >
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-2">Let's Connect!</h2>
                <p className="text-xl font-medium text-center text-gray-300 mb-8">
                    Feel free to drop me a message, I'd love to collaborate or chat!
                </p>

                <div className="relative p-8 max-w-lg mx-auto rounded-lg bg-gray-800 shadow-lg">
                    {/* Gradient borders */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-500 to-lime-400"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-500"></div>
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-lime-500 to-lime-400"></div>
                    <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 to-lime-500"></div>

                    <form ref={formRef} className="relative z-10" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:border-lime-500 bg-gray-700 text-white border border-gray-600"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:border-lime-500 bg-gray-700 text-white border border-gray-600"
                                value={formData.from_email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:border-lime-500 bg-gray-700 text-white border border-gray-600"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-lime-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-600 transition duration-300"
                        >
                            Send Email
                        </button>
                    </form>

                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-1/3 -translate-y-1/3 bg-lime-500 rounded-full opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 transform -translate-x-1/3 translate-y-1/3 bg-lime-500 rounded-full opacity-20"></div>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Email;
