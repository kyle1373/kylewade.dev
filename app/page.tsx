import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaNewspaper } from 'react-icons/fa6'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import { TbMailFilled } from 'react-icons/tb'
import Card from '@/components/ProjectCard'
import { LINKS } from 'constants/constants'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8">
      <h1 className=" text-4xl font-black sm:text-6xl">Kyle Wade</h1>
      <div className="h-20">
        <img
          src={
            'https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=35&center=true&vCenter=true&width=600&height=100&lines=Software+Engineer;Frontend+Developer;Backend+Developer;Database+Administrator;Machine+Learning+Researcher;Web+Developer;'
          }
        />
      </div>

      <div className="mb-3 flex items-center justify-center gap-4 sm:mt-8">
        <Link
          href={LINKS.Github}
          className="text-gray-400 hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </Link>
        <Link
          href={LINKS.Linkedin}
          className="text-gray-400 hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </Link>
        <Link
          href={LINKS.Resume}
          className="text-gray-400 hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaNewspaper size={28} />
        </Link>
        <Link href={LINKS.Email} className="text-gray-400 hover:text-gray-300">
          <TbMailFilled size={34} />
        </Link>
      </div>

      <div className="w-full max-w-3xl text-left ">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-xl font-bold sm:text-3xl">About Me</AccordionTrigger>
            <AccordionContent>
              <p className="text-left sm:text-lg">
                Hey! I'm <span className="font-bold">Kyle</span>, a machine learning researcher and
                software engineer. Previously, I worked at{' '}
                <a
                  className="font-bold text-red-400 hover:underline"
                  href="https://tesla.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tesla
                </a>{' '}
                and{' '}
                <a
                  className="font-bold text-blue-400 hover:underline"
                  href="https://qualcomm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Qualcomm
                </a>{' '}
                working on various projects.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className=" text-xl font-bold sm:text-3xl">Skills</AccordionTrigger>
            <AccordionContent>
              <div className="text-left text-lg">
                <h3 className="font-bold">Languages</h3>
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

                <h3 className="mt-4 font-bold">Databases</h3>
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

                <h3 className="mt-4 font-bold">Frameworks</h3>
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

                <h3 className="mt-4 font-bold">Machine Learning</h3>
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
        <h1 className="mt-4  text-xl font-bold sm:text-3xl">Projects</h1>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Card
            title="Archiverse"
            subtitle="600,000+ visits / month"
            description="A comprehensive archive of Miiverse, a social media platform for the Nintendo Wii U and 3DS which ran from November 18, 2012 until November 8, 2017. This archive stores millions of archived Miiverse users, posts, drawings, comments, and more, totaling over 17TB of data."
            websiteLink="https://archiverse.app"
            githubLink="https://github.com/kyle1373/archiverse"
            logoImage="/archiverse.png"
            mediaItems={[
              '/screenshots/archiverse1.png',
              '/screenshots/archiverse2.png',
              '/screenshots/archiverse3.png',
            ]}
          />

          <Card
            title="osu! capital"
            subtitle="11,000+ users"
            description="A stock market where traders invest paper currency into osu! player stocks. Everyone starts off with 10,000 coins, and traders rank up by making good bets on who they think is underrated. When a player's osu! performance goes up, so does their stock price."
            logoImage="/osucapital.png"
            mediaItems={[
              '/screenshots/osucapital1.png',
              '/screenshots/osucapital2.png',
              '/screenshots/osucapital3.png',
              '/screenshots/osucapital4.png',
            ]}
            websiteLink="https://osucapital.com"
          />

          <Card
            title="Where2Be"
            subtitle="2,000+ users"
            logoImage="/where2be.png"
            description="A social networking app which scrapes data across Instagram, Facebook, and Discord and parses them into events for students to join, which are recommended based on their interests. Launched at 5 universities."
            mediaItems={['/screenshots/where2be.png', '/videos/where2be.mp4']}
            githubLink="https://github.com/momentevents"
            websiteLink="https://where2be.app"
          />

          <Card
            title="Mario Kart Central"
            subtitle="32,000+ users"
            logoImage="/mariokartcentral.png"
            description="The central hub for the competitive Mario Kart community, which hosts thousands of online tournaments for Mario Kart Wii, Mario Kart Tour, and Mario Kart 8 Deluxe."
            mediaItems={[
              '/screenshots/mariokartcentral1.png',
              '/screenshots/mariokartcentral2.png',
            ]}
            githubLink="https://github.com/mariokartcentral"
            websiteLink="https://mariokartcentral.com"
          />

          <Card
            title="Once Human Market"
            subtitle="40,000+ total views"
            logoImage="/oncehumanmarket.png"
            description="An online marketplace for trading items in the video game, Once Human."
            mediaItems={[
              '/screenshots/oncehumanmarket1.png',
              '/screenshots/oncehumanmarket2.png',
              '/screenshots/oncehumanmarket3.png',
            ]}
            githubLink="https://github.com/kyle1373/oncehuman.market"
            websiteLink="https://oncehuman.market"
          />

          <Card
            title="HKN Portal"
            subtitle="1,000+ members"
            logoImage="/hkn.png"
            description="A portal for managing and organizing HKN events and member activities at UC San Diego."
            mediaItems={['/screenshots/hkn1.png', '/screenshots/hkn2.png']}
            githubLink={'https://github.com/hkn-ucsd'}
            websiteLink="https://hkn.ucsd.edu"
          />

          <Card
            title="ForestShield"
            subtitle="QHacks 2022 3rd Place Winner"
            description="A machine learning architecture that takes in environmental sensor data and predicts forest fire risk displayed as a heatmap for first responders."
            mediaItems={[
              '/screenshots/forestshield1.png',
              '/screenshots/forestshield2.png',
              '/screenshots/forestshield3.png',
            ]}
          />

          <Card
            title="Audio Synthesizer"
            description="An audio synthesizer displaying visualizations of wave amplification and attenuation while showing Fourier Transform component representation."
            githubLink="https://github.com/kyle1373/AudioSynthesizer"
            mediaItems={['/screenshots/audiosynthesizer.png']}
          />

          <Card
            title="Hard Hack"
            logoImage="/hardhack.png"
            description="A hardware hackathon that HKN holds annually in collaboration with IEEE and Triton Neurotech at UC San Diego. This is the landing page for the website, reused annually for thousands of people."
            websiteLink={'https://hardhack.dev'}
            githubLink={'https://github.com/HKN-UCSD/hard-hack-2023'}
            mediaItems={['/screenshots/hardhack.png']}
          />
        </div>
      </div>
    </main>
  )
}
