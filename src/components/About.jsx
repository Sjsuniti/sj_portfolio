import React from 'react'
import Tilt from 'react-parallax-tilt';

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring" , 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shawdow-card'>
        <div options={{ max: 45, scale: 1, speed: 450}}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
            className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview </h2>
       </motion.div>

       <motion.p variants={fadeIn("", "", 0.1, 1) }
       className='mt-4 text-secondary text-[15px] max-w-5xl leading-[30px]'>
        I'm a Computer Science student with a strong interest in backend development and crafting scalable web applications. My experience includes Node.js, Express.js, Socket.io, and databases, alongside a foundation in frontend technologies. I've built projects like a real-time multiplayer Tic Tac Toe game, demonstrating my focus on backend logic, server-client communication, and performance. I'm currently seeking backend-focused opportunities to contribute to real-world projects and continue growing as a developer.
         </motion.p>

       <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key ={service.title} index={index} {...service} />
        ))}
       </div>
    </>
  )
}

export default SectionWrapper(About, "about");






