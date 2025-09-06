import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar({ dark, setDark }) {
    const { t, i18n } = useTranslation()
    const [open, setOpen] = useState(false)

    return (
        <header className="text-gray-600 dark:text-gray-200 body-font bg-white dark:bg-gray-800 shadow-md transition-colors duration-500">
            <div className="container mx-auto flex p-5 flex-row items-center justify-between">

                {/* Logo */}
                <a className="flex title-font font-medium items-center text-gray-900 dark:text-white">
                    <h1 className="w-10 h-10 text-white dark:text-black p-2 bg-black dark:bg-white rounded-full text-center">A</h1>
                    <span className="ml-3 text-xl">Azimov</span>
                </a>

                {/* Desktop nav links */}
                <nav className="hidden md:flex items-center text-base cursor-pointer space-x-5">
                    <a href="#Home" className="hover:text-gray-900 dark:hover:text-gray-400">{t('header.nav1')}</a>
                    <a href="#About" className="hover:text-gray-900 dark:hover:text-gray-400">{t('header.nav2')}</a>
                    <a href="#Skill" className="hover:text-gray-900 dark:hover:text-gray-400">{t('header.nav3')}</a>
                    <a href="#Work" className="hover:text-gray-900 dark:hover:text-gray-400">{t('header.nav5')}</a>
                    <a href="#Aloqa" className="hover:text-gray-900 dark:hover:text-gray-400">{t('header.nav4')}</a>
                </nav>

                {/* Til tugmalari */}
                <div className="hidden md:flex gap-2 ml-6">
                    <button onClick={() => i18n.changeLanguage('uz')} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-900 hover:text-white">uz</button>
                    <button onClick={() => i18n.changeLanguage('en')} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-900 hover:text-white">en</button>
                    <button onClick={() => i18n.changeLanguage('ru')} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-900 hover:text-white">ru</button>
                </div>

                {/* Dark / Light tugma */}
                <button
                    onClick={() => setDark(prev => !prev)}
                    className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 
                               hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700 rounded text-sm cursor-pointer ml-4">
                    {
                        dark
                            ? <FaSun className="text-amber-300" />
                            : <FaMoon className="text-white" />
                    }
                </button>

                {/* Hamburger / X tugma (faqat md dan kichik ekranda) */}
                <div className="md:hidden ml-4">
                    <button onClick={() => setOpen(!open)}>
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobil menyu */}
            {open && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-md transition-colors duration-500">
                    <nav className="flex flex-col items-center space-y-4 py-6">
                        <a href="#Home" onClick={() => setOpen(false)}>{t('header.nav1')}</a>
                        <a href="#About" onClick={() => setOpen(false)}>{t('header.nav2')}</a>
                        <a href="#Skill" onClick={() => setOpen(false)}>{t('header.nav3')}</a>
                        <a href="#Work" onClick={() => setOpen(false)}>{t('header.nav5')}</a>
                        <a href="#Aloqa" onClick={() => setOpen(false)}>{t('header.nav4')}</a>

                        {/* Til tugmalari mobil uchun */}
                        <div className="flex gap-2 pt-4">
                            <button onClick={() => { i18n.changeLanguage('uz'); setOpen(false); }} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-900 hover:text-white">uz</button>
                            <button onClick={() => { i18n.changeLanguage('en'); setOpen(false); }} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-900 hover:text-white">en</button>
                            <button onClick={() => { i18n.changeLanguage('ru'); setOpen(false); }} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-900 hover:text-white">ru</button>

                            {/* Dark/Light tugma mobil */}
                            <button
                                onClick={() => setDark(prev => !prev)}
                                className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 
                                           hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700 rounded text-sm cursor-pointer">
                                {
                                    dark
                                        ? <FaSun className="text-amber-300" />
                                        : <FaMoon className="text-white" />
                                }
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
