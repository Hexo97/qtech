import React, { useState, useEffect } from 'react';
import data from './data';
import ContactForm from '../Components/ContactForm';

function Contact() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    setInfo(data.info);
  }, []);

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);


  return (
    <>
      <h1>Contact Us</h1>
      <h3>Qtech Qatar</h3>
      {
            info !== null
            && (
            <div>
              <p>Please contact us if you face any issues.</p>
              <p>
                Email :
                {' '}
                {info.email}
                <br />
                Phone No :
                {' '}
                {info.phone_no}
                <br />
                Address :
                {' '}
                {info.address}
                <br />
                <br />
                <br />
              </p>
                <ContactForm />
            </div>
            )
        }
    </>
  );
}

export default Contact;
