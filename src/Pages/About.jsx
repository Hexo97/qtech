import React, { useState, useEffect } from 'react';
import data from './data';
import { employees } from '../Components/employees';
import Table from 'react-bootstrap/Table'

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
      <br />
      {
            info !== null && socials !== null
            && (
              <div>
                <p>Our Mission:</p>
                <br />
                <p>
                  {' '}
                  {info.short_description}
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
                  Our Team :
                  {' '}
                  <br />
                  <br />
                  <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Description</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    employees.map(employee =>
                      <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.position}</td>
                        <td>{employee.description}</td>
                        <td><img width="225px" height="150px" src={employee.image} /></td>
                      </tr>
                      )
                  }
                  </tbody>
                  </Table>
                </p>
              </div>
            )
        }
    </>
  );
}

export default About;
