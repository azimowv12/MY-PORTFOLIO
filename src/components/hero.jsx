import React from 'react'
import Mee from '../assets/me.jpg'
import { ReactTyped } from 'react-typed'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Herooo({ dark }) {
  const { t } = useTranslation();

  return (
    <motion.section
      id="hero"
      className="text-gray-600 dark:text-gray-200 body-font 
                 bg-white dark:bg-gray-900 transition-colors duration-500"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 4.4 }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        {/* Matn qismi */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 
                        flex flex-col md:items-start md:text-left 
                        mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('hero.title')}{" "}
            <ReactTyped
              strings={["Web Developer", "Frontend Developer", "Freelancer"]}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1000}
              loop
            />
          </h1>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          </p>
        </div>

        {/* Rasm qismi */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className=" w-70 object-cover object-center rounded-xl shadow-lg 
                       border border-gray-200 dark:border-gray-700"
            alt="hero"
            src={Mee}
          />
        </div>
      </div>
    </motion.section>
  )
}
