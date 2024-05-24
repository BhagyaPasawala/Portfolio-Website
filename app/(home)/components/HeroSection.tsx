import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {

  return (

    <div className='min-h-[65vh] flex flex-col items-center justify-between lg:flex-row
                    lg:gap-0 gap-14 px-3'>

        <div className='space-y-5'>
            
            <h1 className='text-4xl lg:text-7xl font-bold'>
                Hey, I'm <br />
                <span className=' text-indigo-500'> {"Bhagya 👋🏻"}  </span>
            </h1>

            <p className='md:w-100 text-2xl text-gray-300'>
                I am a <span className='underline'> {"software developer and designer."} </span> <br />
                With more than 3 years of experience in design and web development, <br /> I blend my problem-solving skills with
                human-centric design, and 3D <br /> to give users an immersive experience.
            </p>
            <Link href={"mailto: bhagya1710@gmail.com"} className='inline-block'>
                <div>
                    <h1 className='text-xl italic text-gray-300 hover:translate-x-2 transition-all hover:text-gray-100'>
                        Contact Me ⟶
                    </h1>
                </div>
            </Link>
        </div>

        <div>
            <div className='glow ml-20'> </div>
        
            <MovingBorderBtn>
                <p>Available for work</p>
            </MovingBorderBtn>

        </div>
    </div>
  )
}
