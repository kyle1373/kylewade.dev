import MarioKartCentralImage from "../../../public/assets/img/portfolio/mariokartcentralimage.png";
import MomentImage from "../../../public/assets/img/portfolio/momentimage.png";
import HKNImage from "../../../public/assets/img/portfolio/hknimage.png";
import SkiNavImage from "../../../public/assets/img/portfolio/skinavimage.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Mario Kart Central",
    image: MarioKartCentralImage,
    tag: ["website"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        language: "Svelte, Python, Docker",
        description: "Mario Kart Tournament hosting website. 32000+ users with 200+ high‑attendance tournaments across 5+ years.",
        numUsers: "32,000+",
        preview: "mariokartcentral.com",
        link: "https://www.mariokartcentral.com/",
      },
    ],
  },
  {
    id: 2,
    type: "Where2Be",
    image: MomentImage,
    tag: ["website", "app"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Mobile App",
        language: "React Native, React, Python, Docker",
        preview: "where2be.app",
        link: "https://www.where2be.app",
        numUsers: "2,000+",
      },
    ],
  },
  {
    id: 3,
    type: "HKN Portal",
    image: HKNImage,
    tag: ["website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        language: "React, Typescript, HTML, CSS",
        preview: "hkn.ucsd.edu",
        link: "https://hkn.ucsd.edu/",
        numUsers: "4000+",
      },
    ],
  },
  {
    id: 4,
    type: "SkiNav",
    image: SkiNavImage,
    tag: ["app"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Mobile App",
        language: "React Native, Golang, Typescript",
      },
    ],
  }
];

export default PortfolioData;
