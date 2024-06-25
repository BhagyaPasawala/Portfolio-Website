import { FaGithub } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import React from 'react'
import Image from "next/image";

export default function Projects() {
  return (
    <div className='w-full gap-12'>
        <h1 className='text-6xl'>
            Projects <span className='text-orange-500'> ✦ </span>
        </h1>

        <div className='flex flex-wrap justify-between items-center px-16'>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                3D Developer Obstacle Course Game
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                Fun little game built using React Three Fiber.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                <Image
                    src="/obstacle.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://obstaclegame.vercel.app/"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                    Try now →
                </CardItem>
                <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://github.com/BhagyaPasawala/3D-Developer-Obstacle-Course"
                    target="__blank"
                    className="px-4 py-2 rounded-xl bg-black dark:text-white dark:bg-black text-white text-2xl"
                >
                   <FaGithub />
                </CardItem>
                </div>
            </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                Personal Safety App 
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                An app which connects users with nearby people and has emergency calling features. MVP ready. (UI/UX project)
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                <Image
                    src="/cover.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full rounded-xl group-hover/card:shadow-xl object-cover"
                    alt="thumbnail"
                />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://www.behance.net/gallery/201819221/Personal-security-app-UI-UX-project"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                    Case Study →
                </CardItem>
                </div>
            </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                AI Assistant
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                Built using React and Gemini Api.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                <Image
                    src="/assistant.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://github.com/BhagyaPasawala/AI-Assistant"
                        target="__blank"
                        className="px-4 py-2 rounded-xl bg-black dark:text-white dark:bg-black text-white text-2xl"
                    >
                    <FaGithub />
                    </CardItem>
                </div>
            </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                Minimalistic To-Do List
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                Built with React, Typescript and TailwindCSS.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                <Image
                    src="/to-do.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://justtodolist.vercel.app/"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                    Try now →
                </CardItem>
                <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://github.com/BhagyaPasawala/To-Do-app"
                    target="__blank"
                    className="px-4 py-2 rounded-xl bg-black dark:text-white dark:bg-black text-white text-2xl"
                >
                    <FaGithub />
                </CardItem>
                </div>
            </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                Virtual Collaborative Workspace
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                Built using Blender and React Three Fiber.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                <Image
                    src="/room.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                <CardItem
                    translateZ={20}
                    as={Link}
                    href=""
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                >
                    Case Study →
                </CardItem>
                </div>
            </CardBody>
            </CardContainer>
        </div>
    </div>
  )
}
