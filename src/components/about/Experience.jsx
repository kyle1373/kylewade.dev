import React from "react";

const experienceContent = [
  {
    year: "2024",
    position: "Software Engineer Intern",
    companyName: "Tesla",
    details: `Made improvements on Tesla’s service engineering pipeline by using React.js, Redux, Golang, SQL, Docker, and Kubernetes in an agile environment. Optimized REST API endpoints and SQL database queries which resulted in 60% faster page load on Tesla’s centralized diagnostics software, Toolbox. Designed, developed, and implemented 30+ new features and performed 40+ code reviews in order to enforce high‑quality coding standards. Decoupled 1 large, centralized service into 3 microservices using Docker containers controlled by Kubernetes, improving Tesla’s backend efficiency.`,
  },
  {
    year: "2023",
    position: "Software Developer",
    companyName: "UCSD Mobile Systems Design Lab",
    details: `Developed a React.js website and a React Native mobile app using Typescript that allows patients to perform physical therapy exercises at home while being given real‑time feedback using skeletonized models displayed on the phone through the user’s camera. Implemented a robust Express.js backend, optimizing RESTful API endpoints for performance, security, and scalability connected with a SQL database.`,
  },
  {
    year: "2023",
    position: "Software Engineer Intern",
    companyName: "Qualcomm",
    details: `Optimized the processing of IP log packets in the 5G data layer using C++ for upcoming computer chipsets. Leveraged AWS SageMaker and AWS QuickSight to transition the company to choose memory thresholds from trial‑and‑error to data‑driven analysis. Optimized thread synchronization through semaphores and locks to prevent race conditions, deadlock, and starvation across multiple threads.`,
  },
  {
    year: "2021 - 2023",
    position: "Teaching Assistant",
    companyName: "UCSD Computer Science and Engineering Department",
    details: `Helped 1400+ students by grading exams, giving constructive feedback with programming assignments, and holding tutoring sessions outside of normal class time in a Data Structures and Algorithms class, teaching binary search trees, linked lists, stacks, heaps, priority queues, and hashmaps. 
    Received 99% student approval rating across 200+ one‑on‑one sessions.`,
  },
  {
    year: "2021 - 2023",
    position: "Software Developer Lead",
    companyName: "IEEE - Eta Kappa Nu (Engineering Honors Society at UCSD)",
    details: `Led a team of 6 developers on the creation of a member portal used by 450+ HKN honor society members at UC San Diego.
    Developed a stateful React.js frontend displaying a role‑specific website where officers can create events for members on a calendar.
    Designed a scalable PostgreSQL relational database holding event and member data while utilizing REST API for entity endpoints.
    Created an authentication flow using Firebase to store session tokens on the client, enabling exclusive member sign‑in.`,
  },
  {
    year: "2022",
    position: "Software Engineer Intern",
    companyName: "Qualcomm",
    details: `Worked with 8 customers to develop 2 tools in React.js and C++ which fully implement and demonstrate 5 new Qualcomm Snapdragon features. 
    Enhanced CPU thermal stress‑testing by optimizing multithreading and automating tasks through scripting, increasing product efficiency by 50%.`,
  },
  {
    year: "2021",
    position: "Software Engineer Intern",
    companyName: "Navlabs",
    details: `Developed a C++ program that scans binary code from GPS simulators and converts it into data readable to other systems.`,
  },
  {
    year: "2017 - 2020",
    position: "Team Engineer",
    companyName: "FIRST Robotics Competition - Team 5199",
    details: `Learned and used Python and C++ through constructing a yearly team robot in a fast‑paced environment. 
    Achieved 1st out of 56 teams in the 2019 Los Angeles Regionals and 1st out of 42 teams in the 2019 Ventura Regionals. Competed in the World Championships in 2019.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
