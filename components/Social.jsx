import Link from "next/link"
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

const socials = [
    {
    icon: <FaGithub />,
    url: "https://github.com/sebaguerrero15"
    },
    {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/sguerreroahumada/"
    },
    {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/sebaguerreroahumada/"
    }
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => (
            <Link href={social.url} target="_blank" key={index} className={iconStyles}>
                {social.icon}
            </Link>
        ))}
    </div>
  )
}

export default Social