import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import  {SectionWrapper}  from '../hoc'


const ServiceCard = ({ index, title, icon}) => {
    return(
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} 
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div> 
        </motion.div>
      </Tilt>
    )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17] max-w-3xl leading-[30px]'
      >
        Ph.D. student in a CIFRE collaboration between Numeryx Technologies and Unicaen. 
        Focused on securing Industrial Internet of Things (IIoT) networks, 
        with expertise in network architecture, protocols, and cybersecurity. 
        Actively researching threat modeling, access control, secure communication, 
        intrusion detection, and anomaly detection. Dedicated to developing innovative 
        solutions for ensuring the confidentiality, integrity, and availability of IIoT systems.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'  >
        {services.map((service, index) => {
          return (<ServiceCard key={service.title} index={index} {...service} />)
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")