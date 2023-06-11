import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kyle", hasColor: "" },
  { meta: "last name", metaInfo: "Wade", hasColor: "" },
  { meta: "Work Availability", metaInfo: "Summer 2024 Internships", hasColor: "green" },
  { meta: "phone", metaInfo: "+19498877545", hasColor: "" },
  { meta: "Email", metaInfo: "kwade@ucsd.edu", hasColor: "" },
  { meta: "Discord", metaInfo: "kylewade", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
