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
        
        console.log(formData); // Check the form data before sending
        
        emailjs.sendForm(
            'service_hw5ay0d', 
            'template_i3m1ax7', 
            formRef.current,
            'gNthKFwAIYxa_vGaZ'
        )
        .then(
            (result) => {
                console.log('Email sent successfully:', result.text);
                toast.success('Your message has been successfully sent!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setFormData({ from_name: '', from_email: '', message: '' });
            },
            (error) => {
                console.error('Error sending email:', error.text);
                toast.error('Failed to send the message. Please try again later.');
            }
        );
    };
    
    return (
        <div className="container mx-auto px-4 md:px-8 py-12">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Let's Connect!</h2>
            <p className="text-xl font-medium text-center text-gray-700 mb-8">Feel free to drop me a message, I'd love to collaborate or chat!</p>
            <div className="relative p-8 max-w-lg mx-auto rounded-lg">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent rounded-lg bg-clip-padding bg-gradient-to-r from-pink-300 via-orange-300 to-pink-300"></div>
                <form ref={formRef} className="relative z-10" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="from_name"  // Use 'from_name' to match the template
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-lime-600"
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="from_email"  // Use 'from_email' to match the template
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-lime-600"
                            value={formData.from_email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-lime-600"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-lime-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-700 transition duration-300"
                    >
                        Send Email
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Email;
