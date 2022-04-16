import React, { useState, useEffect } from "react";
import data from "./data";
import { employees } from "../Components/employees";
import Table from "react-bootstrap/Table";

function About() {
  const [info, setInfo] = useState(null);
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    setInfo(data.info);
    setSocials(data.socials);
  }, []);

  return (
    <div className="bg-gradient-to-b from-cyan-200 to-blue-200 ">
      <div className="max-w-5xl mx-auto">
        <img
          className=" h-[27rem] w-full object-cover"
          src="https://media.istockphoto.com/photos/about-us-picture-id1163589059?k=20&m=1163589059&s=612x612&w=0&h=h2JhLYR5652zSLt64wGOfJhDxlMLToQPn4Kd5JT1bJo="
          alt=""
        />
      </div>
      <div className="max-w-3xl mx-auto py-20 lg:text-lg">
        <br />
        {info !== null && socials !== null && (
          <div>
            <div className="bg-white p-5 rounded-xl shadow-2xl mb-10 ">
              {info.short_description}
            </div>
            Our Socials : <br />
            <br />
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-white btn btn-info btn-sm"
                  href={socials.facebook}
                >
                  <i className={`fa fa-${socials.facebook} text-white`}>
                    Facebook
                  </i>
                </a>
              </li>
              <li>
                <a
                  className="text-white btn btn-info btn-sm"
                  href={socials.github}
                >
                  <i className={`fa fa-${socials.github}`}>Github</i>
                </a>
              </li>
              <li>
                <a
                  className="text-white btn btn-info btn-sm"
                  href={socials.twitter}
                >
                  <i className={`fa fa-${socials.twitter}`}>Twitter</i>
                </a>
              </li>
              <li>
                <a
                  className="text-white btn btn-info btn-sm"
                  href={socials.linkedin}
                >
                  <i className={`fa fa-${socials.linkedin}`}>Linkedin</i>
                </a>
              </li>
            </ul>
            <br />
            Our Team : <br />
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
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                    <td>{employee.description}</td>
                    <td>
                      <img width="225px" height="150px" src={employee.image} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
