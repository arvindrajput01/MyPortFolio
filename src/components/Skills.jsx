import { React,MouseEvent} from  "react"
import {useMotionValue, motion,useMotionTemplate} from "framer-motion"
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import ReactImg from '../assets/react.png';
import Aws from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import MYSQL from '../assets/mysql.png';
import RUBY from '../assets/ror.png';
import SQL from '../assets/sql.png';
import CSHARP from '../assets/csharp.png';
import JQUERY from '../assets/jquery.png';
import TYPES from '../assets/typescript.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import Myresume from "../assets/arvind_kumar_Resume.doc";
const Skills = () => {
    let mouseX = useMotionValue(0)
    let mouseY =useMotionValue(0)
    function handleMouseMove({ clientX,clientY,currentTarget }: MouseEvent ){
       let{left,top} = currentTarget.getBoundingClientRect();
       //setMousePosition({x: xPosition, y: yPosition});
       mouseX.set(clientX - left);
       mouseY.set(clientY - top);
    }
  return (
    <div name='skills' className=' w-full md:h-screen sm:h-full bg-gradient-to-r from-[#0a192f] to-[#20274C] text-gray-300'  onMouseMove={handleMouseMove}>
        <motion.div  className= 'flex flex-col justify-center items-center w-full h-full inset-0 opecity-0 group-hover:opacity-100'  style={{background: useMotionTemplate`radial-gradient( circle at ${mouseX}px ${mouseY}px,rgb(10 25 47 / 0.15),transparent 80%)`}}>
            {/* Container*/}
            <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full'>
                <div>
                    <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className=' py-4'>// These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node JS icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MYSQL} alt="MySql db icon" />
                        <p className='my-4'>MySql</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="tailwind icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={RUBY} alt="Ruby on Rails icon" />
                        <p className='my-4'>Ruby on Rails</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Aws} alt="Aws icon" />
                        <p className='my-4'>AWS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SQL} alt="Sql icon" />
                        <p className='my-4'>SQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JQUERY} alt="jQuery icon" />
                        <p className='my-4'>jQuery</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSHARP} alt="C# icon" />
                        <p className='my-4'>C#</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={TYPES} alt="Type Script icon" />
                        <p className='my-4'>Type Script</p>
                    </div>
                </div>
                <span className="sm:hidden w-[190px] border-b border-transparent pb-px transition hover:border-pink-600 font-bold font-sans hover:scale-110 duration-500 motion-reduce:transition-none ">               
                  <a  className='flex justify-between  w-full items-center text-gray-300' href={Myresume} target='_blank'>
                  View Full Resume <IoIosArrowRoundForward size={50}/>
                </a></span>
            </div>
        </motion.div>
    </div>
  );
};

export default Skills;