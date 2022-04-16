import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Contact() {

  return (
    <div className="bg-gradient-to-b from-sky-300 to-indigo-400 h-screen">
      <div>
        <img
          className=" h-[27rem] w-full object-cover"
          src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div>

      <div className=" z-10 relative -top-28 max-w-3xl lg:max-w-6xl mx-auto">
        <div className="flex justify-evenly  space-x-5 ">
          <div className="py-12 flex flex-col  space-y-4  items-center max-w-md bg-white px-10">
            <PhoneIcon className="h-12 w-12" />
            <h3 className="font-semibold md:text-lg ">Talk to Sales</h3>
            <p className="text-center break-normal text-sm md:text-lg">
              Interested in QTECH’s coures? Just pick up the phone to chat with
              a member of our sales team.
            </p>
            <p className="md:text-lg font-bold text-cyan-500 pt-10">
              +974 3348 6007
            </p>
          </div>

          <div className="py-12 flex flex-col space-y-4 items-center max-w-md bg-white px-10 ">
            <ChatAlt2Icon className="h-12 w-12" />
            <h3 className="font-semibold md:text-lg">
              Contact Customer Support
            </h3>
            <p className="text-center break-normal text-sm md:text-lg pb-7">
              Sometimes you need a little help from your friends. Or a QTECH
              support rep. Don’t worry… we’re here for you.
            </p>
            <p className=" p-4 bg-red-400 text-white font-bold">
              <Link
                to='help@qtech.com'
                onClick={(e) => {
                  window.location.href = "mailto:help@qtech.com";
                  e.preventDefault();
                }}
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
