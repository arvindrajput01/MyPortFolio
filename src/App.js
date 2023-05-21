import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { React,MouseEvent} from  "react"
import {useMotionValue, motion,useMotionTemplate} from "framer-motion"
function App() {
  let mouseX = useMotionValue(0)
  let mouseY =useMotionValue(0)
  function handleMouseMove({ clientX,clientY,currentTarget }: MouseEvent ){
     let{left,top} = currentTarget.getBoundingClientRect();

     //setMousePosition({x: xPosition, y: yPosition});
     mouseX.set(clientX - left);
     mouseY.set(clientY - top);
  }
  return (
    <div className= 'bg-gradient-to-r from-[#0a192f] to-[#20274C] text-gray-300 ' onMouseMove={handleMouseMove}>
    <motion.div  className='h-sceeen  w-full inset-0 opecity-0 group-hover:opacity-100 duration-300' style={{background: useMotionTemplate`radial-gradient( circle at ${mouseX}px ${mouseY}px,rgb(57 184 219 / 0.15),transparent 30%)`}} >
      <Navbar />
     <Home /> 
     <About/>
     <Skills/>
     <Work />
     <Contact/>
     </motion.div>
    </div>
  );
}

export default App;


