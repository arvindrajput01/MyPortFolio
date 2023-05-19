import { React,MouseEvent} from  "react"
import {useMotionValue, motion,useMotionTemplate} from "framer-motion"

const About = () => {
    let mouseX = useMotionValue(0)
    let mouseY =useMotionValue(0)
    function handleMouseMove({ clientX,clientY,currentTarget }: MouseEvent ){
       let{left,top} = currentTarget.getBoundingClientRect();
       //setMousePosition({x: xPosition, y: yPosition});
       mouseX.set(clientX - left);
       mouseY.set(clientY - top);
    }
  return (
    <div name='about' className= 'w-full h-screen bg-gradient-to-r from-[#0a192f] to-[#20274C] text-gray-300' onMouseMove={handleMouseMove}>
        <motion.div className=' flex flex-col justify-center items-center w-full h-full inset-0 opecity-0 group-hover:opacity-100' style={{background: useMotionTemplate`radial-gradient( circle at ${mouseX}px ${mouseY}px,rgb(10 25 47 / 0.15),transparent 80%)`}}>
            <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className=' sm:text-right pb-8 pl-4'>
                    <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
                <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                    <div className=' sm:text-right text-4xl font=bold'>
                        <p>
                            Hi, I'm Arvind, nice to meet you. Please take a look around
                        </p>
                    </div>
                    <div>
                        <p>Application developer with experience building both web and native applications. 
                            End-to-end experience from operating systems, to database back-ends, to business logic, to UI. 
                            Interested in customer-facing applications with short release cycles and shorter iterations.
                        </p>
                    </div>
                </div>
            

        </motion.div>
    </div>
  )
}

export default About;

     