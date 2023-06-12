import React from "react";

const LEVEL4 = {
  percent: "p100",
  text: "Expert",
};
const LEVEL3 = {
  percent: "p90",
  text: "Skilled",
};
const LEVEL2 = {
  percent: "p80",
  text: "Adept",
};
const LEVEL1 = {
  percent: "p70",
  text: "Novice",
};
const skillsContent = [
  {
    skillClass: LEVEL4.percent,
    skillPercent: LEVEL4.text,
    skillName: "REACT NATIVE",
  },
  {
    skillClass: LEVEL4.percent,
    skillPercent: LEVEL4.text,
    skillName: "Typescript / Javascript",
  },
  { skillClass: LEVEL4.percent, skillPercent: LEVEL4.text, skillName: "REACT" },
  {
    skillClass: LEVEL3.percent,
    skillPercent: LEVEL3.text,
    skillName: "CYPHER",
  },
  { skillClass: LEVEL3.percent, skillPercent: LEVEL3.text, skillName: "HTML" },
  { skillClass: LEVEL3.percent, skillPercent: LEVEL3.text, skillName: "CSS" },
  { skillClass: LEVEL3.percent, skillPercent: LEVEL3.text, skillName: "JAVA" },
  { skillClass: LEVEL2.percent, skillPercent: LEVEL2.text, skillName: "C++" },
  {
    skillClass: LEVEL2.percent,
    skillPercent: LEVEL2.text,
    skillName: "PYTHON",
  },
  {
    skillClass: LEVEL2.percent,
    skillPercent: LEVEL2.text,
    skillName: "DOCKER",
  },
  { skillClass: LEVEL2.percent, skillPercent: LEVEL2.text, skillName: "SQL" },
  { skillClass: LEVEL2.percent, skillPercent: LEVEL2.text, skillName: "C" },
  { skillClass: LEVEL2.percent, skillPercent: LEVEL2.text, skillName: "C#" },
  {
    skillClass: LEVEL1.percent,
    skillPercent: LEVEL1.text,
    skillName: "Golang",
  },
  {
    skillClass: LEVEL1.percent,
    skillPercent: LEVEL1.text,
    skillName: "Flutter",
  },
  { skillClass: LEVEL1.percent, skillPercent: LEVEL1.text, skillName: "Dart" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}</span>
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
