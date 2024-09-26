import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { LINKS } from 'constants/constants'
import { FaNewspaper } from 'react-icons/fa6'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbMailFilled } from 'react-icons/tb'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex items-center justify-center gap-4">
          <Link
            href={LINKS.Github}
            className="text-white hover:text-primary-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={26} />
          </Link>
          <Link
            href={LINKS.Linkedin}
            className="text-white hover:text-primary-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={26} />
          </Link>
          <Link
            href={LINKS.Resume}
            className="text-white hover:text-primary-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaNewspaper size={26} />
          </Link>
          <Link href={LINKS.Email} className="text-white hover:text-primary-400">
            <TbMailFilled size={32} />
          </Link>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 text-sm text-gray-400">Built with Next.js + Tailwind</div>
      </div>
    </footer>
  )
}
