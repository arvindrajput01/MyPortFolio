import { React} from  "react"

const About = () => {
  return (
    <div name='about' className= 'w-full h-screen text-gray-300 ' >
        <div className=' flex flex-col justify-center items-center w-full h-full' >
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
                        <p>Experienced application developer skilled in both web and native application development, with expertise spanning operating systems, database back-ends, business logic, and UI. Interested in customer-facing applications with short release cycles and iterative development. Actively seeks opportunities to expand knowledge and stay current with the latest technologies. Committed to continuous learning and exploring innovative solutions. A tireless perfectionist dedicated to delivering the best possible results. Eager to contribute to the field of software development and create a positive impact.
                        </p>
                    </div>
                </div>
            

        </div>
    </div>
  )
}

export default About;

     