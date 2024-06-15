"use client";
import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = () => {
  const formInitialDetails: FormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>('Send');
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <TrackVisibility>
            {({ isVisible }) => (
              <img
                className={`${isVisible ? "animate__animated animate__zoomIn" : ""} mx-auto`}
                src="/contact-img.svg"
                alt="Contact Us"
              />
            )}
          </TrackVisibility>
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-nonefocus:border-blue-500 bg-blue-500 text-white"
                      />
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-nonefocus:border-blue-500 bg-blue-500 text-white"
                      />
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 bg-blue-500 text-white"
                      />
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 bg-blue-500 text-white"
                      />
                    </div>
                    <textarea
                      rows={6}
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                      className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 bg-blue-500 text-white mt-4 w-full"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 inline-block focus:outline-none hover:bg-blue-600 transition duration-300"
                    >
                      {buttonText}
                    </button>
                  </form>
                  {status.message && (
                    <p className={`mt-2 ${status.success === false ? "text-red-500" : "text-green-500"}`}>{status.message}</p>
                  )}
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
