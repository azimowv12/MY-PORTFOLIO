import React from 'react'
import Mee from '../assets/me.jpg'
import { ReactTyped } from 'react-typed'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Herooo() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="hero"
      className="text-gray-600 body-font radial-bg"
      initial={{ opacity: 0, y: -100 }}   // tepadan yashirin
      animate={{ opacity: 1, y: 0 }}      // pastga tushadi
      transition={{ duration: 1, delay: 4.4 }} // 3.2s dan keyin sekin chiqadi
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        {/* Matn qismi */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl font-bold mb-4">
            {t('hero.title')}{" "}
            <ReactTyped
              strings={["Web Developer", "Frontend Developer", "Freelancer"]}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1000}
              loop
            />
          </h1>

        </div>

        {/* Rasm qismi */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded w-70"
            alt="hero"
            src={Mee}
          />
        </div>
      </div>
    </motion.section>
  )
}
