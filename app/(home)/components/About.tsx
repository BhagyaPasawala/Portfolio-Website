import React from 'react'

export default function About() {
  return (
    <>
        <div className='w-full flex gap-12 space-x-10'>
            <div className='w-3/5'>
                <h1 className='text-6xl mb-12'>
                     About <span className='text-green-500'> ✦  </span>
                </h1>
                <div className='w-full'>
                    <h1 className='text-xl tracking-normal'>
                        I am a <span className='text-green-500 font-medium'> software developer and designer. </span> <br />
                        I pursued my Bachelor's in Computer Applications
                        and post-grad in 3D animation and Interactive Media Management.
                        I recently finished my Innovator's in Residence program (co-op) at Puddleshaker to
                        build a Virtual Collaborative Workspace using React Three Fiber and Blender.

                        <br />
                        <br />

                        Proficient in programming languages including Javascript, Typescript and Python.
                        Experienced in using Reactjs and Nextjs framework. 
                        Currently also learning core machine learning concepts and Python.
                        Experienced in using Adobe Creative Suite and 3D softwares like Maya and Blender.
                        <br />
                        <br />
                        Lastly, I remember falling in love with video games as a kid, that's the reason why
                        I am so passionate about tech and I will continue to
                        hone my craft and build cool stuff which provides value to people.
                        <br />
                        <br />
                        If you're interested in working together or have any questions, please reach out! :)
                    </h1>
                </div>
            </div>

            <div className='w-2/5 h-screen'>
                <h1 className='text-6xl mb-12'>
                     Skills <span className='text-green-500'> ✦ </span>
                </h1>

                <div className='h-full'>
                    <div className='h-full'>
                        <div className='mb-10'>
                            <h1 className='text-2xl tracking-normal mb-4'>
                                💻 Programming
                            </h1>
                            
                            <div className='flex gap-2 w-full flex-wrap'>
                                <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                    React.js
                                </h1>

                                <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                    Next.js
                                </h1>

                                <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                    Javascript
                                </h1>

                                <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                    Typescript
                                </h1>

                                <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                    Python
                                </h1>

                                <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                    HTML
                                </h1>

                                <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                    Tailwind
                                </h1>

                                <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                    CSS
                                </h1>

                                <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                    Github
                                </h1>
                            </div>
                        </div>
                          
                        <div className='h-full'>
                            <div className='mb-10'>
                                <h1 className='text-2xl tracking-normal mb-4'>
                                    🖌️ UI/UX & Graphic Design
                                </h1>
                                
                                <div className='flex gap-2 w-full flex-wrap'>
                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        Figma
                                    </h1>

                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        Adobe XD
                                    </h1>

                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        Photoshop
                                    </h1>

                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        Illustrator
                                    </h1>

                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        Premiere Pro
                                    </h1>

                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        InDesign
                                    </h1>

                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        Miro
                                    </h1>
                                </div>
                            </div>
                            <div className='h-full'>

                            <div className='mb-10'>
                                <h1 className='text-2xl tracking-normal mb-4'>
                                    💎 3D
                                </h1>
                                
                                <div className='flex gap-2 w-full flex-wrap'>
                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        Blender
                                    </h1>

                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        Unreal Engine 5
                                    </h1>

                                    <h1 className='font-semibold py-3 px-4 rounded-full bg-zinc-900 text-sm'>
                                        Cinema 4D
                                    </h1>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
