import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kyle", hasColor: "" },
  { meta: "last name", metaInfo: "Wade", hasColor: "" },
  { meta: "Work Availability", metaInfo: "Summer 2024 Internships", hasColor: "green" },
  { meta: "phone", metaInfo: "+19498877545", hasColor: "" },
  { meta: "Email", metaInfo: "kwade@ucsd.edu", hasColor: "", link: "mailto:kwade@ucsd.edu" },
  { meta: "Discord", metaInfo: "kylewade", hasColor: "" },
  { meta: "GitHub", metaInfo: "kyle1373", hasColor: "", link: "https://github.com/kyle1373/"},
  { meta: "LinkedIn", metaInfo: "kylewade1373", hasColor: "", link: "https://www.linkedin.com/in/kylewade1373/"},
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
            {val.link ? <a href={val.link} target="_blank">{val.metaInfo}</a> : val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
