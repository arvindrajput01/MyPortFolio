import { React,MouseEvent} from  "react"
import {useMotionValue, motion,useMotionTemplate} from "framer-motion"
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  let mouseX = useMotionValue(0)
  let mouseY =useMotionValue(0)
  function handleMouseMove({ clientX,clientY,currentTarget }: MouseEvent ){
     let{left,top} = currentTarget.getBoundingClientRect();

     //setMousePosition({x: xPosition, y: yPosition});
     mouseX.set(clientX - left);
     mouseY.set(clientY - top);
  }
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-[#0a192f] to-[#20274C]' onMouseMove={handleMouseMove} >
        {/* Container */}
        <motion.div className='h-full  w-full inset-0 opecity-0 group-hover:opacity-100' style={{background: useMotionTemplate`radial-gradient( circle at ${mouseX}px ${mouseY}px,rgb(10 25 47 / 0.15),transparent 80%)`}} >
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center item-center h-full'>
              <p className= 'text-pink-500'>Hi, my name is</p>
              <h1 className= 'text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Arvind Rajput</h1>
              <h2 className= 'text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
              <p className= 'text-[#8892b0] py-4 max-w-[700px]'>i'm a full-stack developer specializing in building and occasionally designing the Ruby on Rails Application. Currently, I am focused on building responsive full-stack web applications.</p>
              <div>

                  <Link to='work' smooth={true} duration={500} >
                  <button className= 'text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                  <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3'/>

                  </span>
                  </button>     
                        </Link>
              </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Home