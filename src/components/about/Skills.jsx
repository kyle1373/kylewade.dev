import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "REACT NATIVE" },
  { skillClass: "p100", skillPercent: "100", skillName: "Typescript / Javascript" },
  { skillClass: "p95", skillPercent: "95", skillName: "REACT" },
  { skillClass: "p90", skillPercent: "90", skillName: "CYPHER" },
  { skillClass: "p85", skillPercent: "85", skillName: "JAVA" },
  { skillClass: "p80", skillPercent: "80", skillName: "C / C++" },
  { skillClass: "p75", skillPercent: "75", skillName: "PYTHON" },
  { skillClass: "p70", skillPercent: "70", skillName: "DOCKER" },
  { skillClass: "p65", skillPercent: "65", skillName: "SQL" },
  { skillClass: "p65", skillPercent: "65", skillName: "HTML" },
  { skillClass: "p60", skillPercent: "60", skillName: "CSS" },
  { skillClass: "p55", skillPercent: "55", skillName: "Golang" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
