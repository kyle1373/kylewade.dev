import React from "react";

const achievementsContent = [
  // { title: "5+", subTitle1: "years of", subTitle2: "experience" },
  { title: "10+", subTitle1: "Apps", subTitle2: "Created" },
  { title: "15+", subTitle1: "Websites", subTitle2: "Developed" },
  // { title: "200k+", subTitle1: "Total", subTitle2: "Users Served" },

];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
