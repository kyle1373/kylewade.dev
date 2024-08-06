import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LINKS } from "@/constants/constants";
import Link from "next/link";
import { TbMailFilled } from "react-icons/tb";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:mb-0 mb-20">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          <div className="flex gap-8">
            <Link
              href={LINKS.Github}
              className="hover:text-gray-200 text-white"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href={LINKS.Linkedin}
              className="hover:text-gray-200 text-white"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              href={LINKS.Resume}
              className="hover:text-gray-200 text-white"
            >
              <FaNewspaper size={30} />
            </Link>
            <Link
              href={LINKS.Email}
              className="hover:text-gray-200 text-white"
            >
              <TbMailFilled size={30} />
            </Link>
          </div>
        </div>
      </div>

      <h1 className="sm:text-6xl text-4xl font-black font-mono">Kyle Wade</h1>
      <div className="h-20">
        <img
          src={
            "https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=35&center=true&vCenter=true&width=600&height=100&lines=Frontend+Developer;Backend+Developer;Database+Administrator;Machine+Learning+Researcher;Web+Developer;"
          }
        />
      </div>

      <div className="max-w-3xl text-center w-full mt-20">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-mono font-bold text-3xl">
              About Me
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-left text-lg">
                I'm <span className="font-bold">Kyle</span>, a machine learning
                researcher and software engineer. I love hiking, skiing, playing
                the piano, raising dogs, competing in chess, and more. I do a
                ton of fullstack development. If you're interested to see what I
                do (or hire me), check out my{" "}
                <Link
                  href={LINKS.Github}
                  className="underline text-blue-400 hover:text-blue-300"
                >
                  Github
                </Link>{" "}
                and{" "}
                <Link
                  href={LINKS.Resume}
                  className="underline text-blue-400 hover:text-blue-300"
                >
                  resume
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-mono font-bold text-3xl">
              Skills
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-left text-lg">
                <h3 className="font-bold mt-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
                    alt="C"
                  />
                  <img
                    src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white"
                    alt="C#"
                  />
                  <img
                    src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
                    alt="C++"
                  />
                  <img
                    src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                    alt="CSS3"
                  />
                  <img
                    src="https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white"
                    alt="Dart"
                  />
                  <img
                    src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"
                    alt="Go"
                  />
                  <img
                    src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
                    alt="GraphQL"
                  />
                  <img
                    src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                    alt="HTML5"
                  />
                  <img
                    src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
                    alt="Java"
                  />
                  <img
                    src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                    alt="JavaScript"
                  />
                  <img
                    src="https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white"
                    alt="PowerShell"
                  />
                  <img
                    src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
                    alt="Python"
                  />
                  <img
                    src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                    alt="TypeScript"
                  />
                </div>

                <h3 className="font-bold mt-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
                    alt="Postgres"
                  />
                  <img
                    src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
                    alt="MySQL"
                  />
                  <img
                    src="https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white"
                    alt="Neo4J"
                  />
                  <img
                    src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                    alt="MongoDB"
                  />
                  <img
                    src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
                    alt="Redis"
                  />
                  <img
                    src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
                    alt="Supabase"
                  />
                  <img
                    src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34"
                    alt="Firebase"
                  />
                  <img
                    src="https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white"
                    alt="AmazonDynamoDB"
                  />
                </div>

                <h3 className="font-bold mt-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37"
                    alt="Expo"
                  />
                  <img
                    src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                    alt="Express.js"
                  />
                  <img
                    src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
                    alt="FastAPI"
                  />
                  <img
                    src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"
                    alt="Flask"
                  />
                  <img
                    src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white"
                    alt="Flutter"
                  />
                  <img
                    src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                    alt="Next JS"
                  />
                  <img
                    src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                    alt="NodeJS"
                  />
                  <img
                    src="https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white"
                    alt="OpenCV"
                  />
                  <img
                    src="https://img.shields.io/badge/ros-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white"
                    alt="ROS"
                  />
                  <img
                    src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                    alt="React Native"
                  />
                  <img
                    src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                    alt="Redux"
                  />
                  <img
                    src="https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white"
                    alt="Svelte"
                  />
                  <img
                    src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                    alt="TailwindCSS"
                  />
                </div>

                <h3 className="font-bold mt-4">Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://img.shields.io/badge/mlflow-%23d9ead3.svg?style=for-the-badge&logo=numpy&logoColor=blue"
                    alt="mlflow"
                  />
                  <img
                    src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white"
                    alt="NumPy"
                  />
                  <img
                    src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"
                    alt="Pandas"
                  />
                  <img
                    src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"
                    alt="PyTorch"
                  />
                  <img
                    src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white"
                    alt="TensorFlow"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
