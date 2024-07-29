import React from 'react';
import { Link } from 'react-router-dom';
import back from "../../../assets/previous.svg";

function ContactUs() {
  return (
    <>
      <div className="w-full h-full overflow-x-auto relative pb-20">
        <div className="top-0 sticky px-5 w-full z-20 bg-white pt-2 shadow">
          <div className="flex justify-center items-center py-3">
            <Link
              to={"/my-page"}
              className="w-4/12 flex items-center justify-start"
            >
              <img src={back} className="w-8 h-8" alt="Back" />
            </Link>
            <div className="w-4/12 text-lg font-semibold text-center">
              Contact Us
            </div>
            <div className="w-4/12"></div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex-col flex gap-2 pb-4">
            <p className="font-bold">Our Address</p>
            <p className="leading-5">
              INDONESIA OFFICE : <br></br> Ice Business Park, Jl. BSD Grand
              Boulevard No.21 Blok F, Pagedangan, Kec. Pagedangan, Kabupaten
              Tangerang, Banten 15339
            </p>
            <p className="leading-5 border-t pt-2">
              KOREA OFFICE : <br></br> Ice Business Park, Jl. BSD Grand
              Boulevard No.21 Blok F, Pagedangan, Kec. Pagedangan, Kabupaten
              Tangerang, Banten 15339
            </p>
          </div>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cs@unnispick.com" className="flex items-center py-2">
            <div className="w-11/12">
              <p className="font-bold">Email</p>
              <p className="text-sm">cs@unnispick.com</p>
            </div>
            <div className="w-1/12">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </div>
          </a>
          <a href="https://hiunnis.com/" className="flex items-center py-2">
            <div className="w-11/12">
              <p className="font-bold">Web</p>
              <p className="text-sm">https://hiunnis.com/</p>
            </div>
            <div className="w-1/12">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
