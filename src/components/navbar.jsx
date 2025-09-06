import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="w-full">
        {/* Asosiy qator */}
        <div className="container mx-auto flex p-5 flex-row items-center justify-between">
          
          {/* Logo (A + Azimov) */}
          <a className="flex title-font font-medium items-center text-gray-900">
            <h1 className="w-10 h-10 text-white p-2 bg-black rounded-full text-center">A</h1>
            <span className="ml-3 text-xl">Azimov</span>
          </a>

          {/* Nav linklar (faqat md dan katta ekranda) */}
          <nav className="hidden md:flex items-center text-base cursor-pointer space-x-5">
            <a href="#Home" className="hover:text-gray-900">{t('header.nav1')}</a>
            <a href="#About" className="hover:text-gray-900">{t('header.nav2')}</a>
            <a href="#Skill" className="hover:text-gray-900">{t('header.nav3')}</a>
            <a href="#Work" className="hover:text-gray-900">{t('header.nav5')}</a>
            <a href="#Aloqa" className="hover:text-gray-900">{t('header.nav4')}</a>
          </nav>

          {/* Til tugmalari (faqat md dan katta ekranda) */}
          <div className="hidden md:flex gap-2 ml-6">
            <button onClick={() => i18n.changeLanguage('uz')} className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-900 hover:text-white">uz</button>
            <button onClick={() => i18n.changeLanguage('en')} className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-900 hover:text-white">en</button>
            <button onClick={() => i18n.changeLanguage('ru')} className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-900 hover:text-white">ru</button>
          </div>

          {/* Hamburger / X tugma (faqat md dan kichik ekranda) */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Bar icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menyu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-6">
            <a href="#Home" onClick={() => setOpen(false)}>{t('header.nav1')}</a>
            <a href="#About" onClick={() => setOpen(false)}>{t('header.nav2')}</a>
            <a href="#Skill" onClick={() => setOpen(false)}>{t('header.nav3')}</a>
            <a href="#Work" onClick={() => setOpen(false)}>{t('header.nav5')}</a>
            <a href="#Aloqa" onClick={() => setOpen(false)}>{t('header.nav4')}</a>
            
            {/* Til tugmalari mobil uchun */}
            <div className="flex gap-2 pt-4">
              <button onClick={() => { i18n.changeLanguage('uz'); setOpen(false); }} className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-900 hover:text-white">uz</button>
              <button onClick={() => { i18n.changeLanguage('en'); setOpen(false); }} className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-900 hover:text-white">en</button>
              <button onClick={() => { i18n.changeLanguage('ru'); setOpen(false); }} className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-900 hover:text-white">ru</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
