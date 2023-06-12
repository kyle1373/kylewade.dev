import React from "react";

const educationContent = [
  {
    year: "2025",
    degree: "M.S. IN MACHINE LEARNING AND DATA SCIENCE",
    institute: "UNIVERSITY OF CALIFORNIA, SAN DIEGO",
    details: ``,
  },
  {
    year: "2023",
    degree: "B.S. IN COMPUTER ENGINEERING",
    institute: "UNIVERSITY OF CALIFORNIA, SAN DIEGO",
    details: `3.8 GPA. Member of Honor Societies Tau Beta Pi (TBP) and IEEE - Eta Kappa Nu (HKN).`,
  },
  {
    year: "2020",
    degree: "Diploma",
    institute: "DANA HILLS HIGH SCHOOL",
    details: `4.0 GPA.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
