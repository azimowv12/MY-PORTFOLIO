import React from 'react'
import Mee from '../assets/me.jpg'
import { ReactTyped } from 'react-typed'
import { useTranslation } from 'react-i18next';

export default function Herooo() {
     const { t } = useTranslation();
    return (
        <section id="hero" className="text-gray-600 body-font radial-bg  ">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        {t('hero.title')} {" "}
                        <ReactTyped 
                            strings={["Web Developer", "Frontend Developer", "Freelancer"]}
                            typeSpeed={80}     
                            backSpeed={50}     
                            backDelay={1000}  
                            loop               
                        />
                    </h1>
                    <p className="mb-8 leading-relaxed"></p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <img className="object-cover object-center rounded w-70 " alt="hero" src={Mee} />
                </div>
            </div>
        </section>
    )
}
