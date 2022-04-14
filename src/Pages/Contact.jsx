import React, { useState, useEffect } from 'react';
import data from './data';

function Contact() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    setInfo(data.info);
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
              </p>
            </div>
            )
        }
    </>
  );
}

export default Contact;
