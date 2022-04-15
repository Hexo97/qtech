import React, { useState, useEffect } from 'react';
import data from './data';

function About() {
  const [info, setInfo] = useState(null);
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    setInfo(data.info);
    setSocials(data.socials);
  }, []);

  return (
    <>
      <h1>About Us</h1>
      <h3>Qtech Qatar</h3>
      {
            info !== null && socials !== null
            && (
              <div>
                <p>Our Mission:</p>
                <p>
                  {' '}
                  {info.short_description}
                  <br />
                  <br />
                  {' '}
                  {info.description}
                  <br />
                  <br />
                  Our Socials :
                  {' '}
                  <br />
                  <br />
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-white btn btn-info btn-sm" href={socials.facebook}><i className={`fa fa-${socials.facebook}`}>Facebook</i></a>
                    </li>
                    <li>
                      <a className="text-white btn btn-info btn-sm" href={socials.github}><i className={`fa fa-${socials.github}`}>Github</i></a>
                    </li>
                    <li>
                      <a className="text-white btn btn-info btn-sm" href={socials.twitter}><i className={`fa fa-${socials.twitter}`}>Twitter</i></a>
                    </li>
                    <li>
                      <a className="text-white btn btn-info btn-sm" href={socials.linkedin}><i className={`fa fa-${socials.linkedin}`}>Linkedin</i></a>
                    </li>
                  </ul>
                  <br />
                </p>
              </div>
            )
        }
    </>
  );
}

export default About;
