import { AnimatedTooltip } from '@/components/ui/tool-tip';
import Link from 'next/link';
import React from 'react'
import { SiBehance, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const people = [
    {
      id: 1,
      name: "Bhagya Pasawala",
      designation: "Developer & Designer",
      image:
        "/profile-photo.jpeg",
    }
  ];

export default function Navbar() {

    const socials = [
        {
            link: "https://in.linkedin.com/in/bhagya-pasawala-a66251188",
            label: "LinkedIn",
            Icon: SiLinkedin,
        },

        {
            link: "https://github.com/BhagyaPasawala",
            label: "Github",
            Icon: SiGithub,
        },
        
        {
            link: "https://www.behance.net/bhagyapasawala",
            label: "Behance",
            Icon: SiBehance,
        },

        {
            link: "https://www.instagram.com/bhagya0.0/?hl=en",
            label: "Instagram",
            Icon: SiInstagram,
        }
    ]

  return (
    <nav className='mt-14 mb-6 flex justify-between items-center'>
         <AnimatedTooltip items={people}  />

        <div className='flex gap-5'>
            {socials.map((social, index) => {
                const Icon = social.Icon
                return <Link 
                    href={social.link}
                    key={index}
                    target="__blank"
                    aria-Label={social.label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}
