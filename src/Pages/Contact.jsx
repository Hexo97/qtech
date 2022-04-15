import React from "react";
// import data from "./data";
import { PhoneIcon } from "@heroicons/react/solid";
import { ChatAlt2Icon } from "@heroicons/react/solid";
// import { LocationMarkerIcon } from "@heroicons/react/solid";

function Contact() {
  // const [info, setInfo] = useState(null);

  // useEffect(() => {
  //   setInfo(data.info);
  // }, []);

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
              Interested in HubSpot’s software? Just pick up the phone to chat
              with a member of our sales team.
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
              Sometimes you need a little help from your friends. Or a HubSpot
              support rep. Don’t worry… we’re here for you.
            </p>
            <p className=" p-4 bg-red-400 text-white font-bold">
              Contact Support
            </p>
          </div>
        </div>
        {/* <div className="text-center mt-10">
          <div>
            <div className="bg-white py-12 flex flex-col space-y-4 items-center max-w-md mx-auto">
              <LocationMarkerIcon className="h-12 w-12" />
              <h3 className="font-semibold md:text-lg">
                Please contact us if you face any issues
              </h3>
              <p className="text-center break-normal text-sm md:text-lg pb-7">
                Email : qtech@gmail.com
              </p>
              <p className=" p-4">
                Address : Breaking bad street, Apex, Qatar, P.o. box 00000
              </p>
              <p className=" p-4">
                Phone No : Breaking bad street, Apex, Qatar, P.o. box 00000
              </p>
            </div>
          </div>
        </div> */}
      </div>

      {/* <h1>Contact Us</h1>
      <h3>Qtech Qatar</h3>
      {info !== null && (
        <div>
          <p>Please contact us if you face any issues.</p>
          <p>
            Email : {info.email}
            <br />
            Phone No : {info.phone_no}
            <br />
            Address : {info.address}
            <br />
          </p>
        </div>
      )} */}
    </div>
  );
}

export default Contact;
