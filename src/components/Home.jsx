import { React} from  "react"
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {

  return (
    <div name='home' className='w-full h-screen ' >
        {/* Container */}
        <div exit={{ opacity: 0 }} className='h-full  w-full '>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center item-center h-full'>
              <p className= 'text-pink-500'>Hi, my name is</p>
              <h1 className= 'text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Arvind Rajput</h1>
              <h2 className= 'text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
              <p className= 'text-[#8892b0] py-4 max-w-[700px]'>
              Experienced full-stack developer with a specialization in Ruby on Rails applications. Proficient in building responsive and user-friendly web applications. Demonstrated success through a portfolio of diverse projects, showcasing end-to-end solutions. Keen on staying updated with the latest web technologies to deliver cutting-edge solutions. Meticulous attention to detail and a strong focus on providing an exceptional user experience. Committed to delivering high-quality, innovative solutions that exceed client expectations.
              </p>
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
        </div>
    </div>
  )
}

export default Home