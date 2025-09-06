import React from "react";
import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";


export default function About() {
    const {t} = useTranslation()
  const aboutData = t("about.data", { returnObjects: true });
  return (
    <section id="About" className="text-white bg-gray-900 py-12 emerald-bg">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
          {t('about.title')}
          <span className="block h-1 w-44 bg-blue-300 mx-auto mt-2 rounded"></span>
        </h2>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <FaInfoCircle className="text-gray-300" />
              <p>
                <span className="font-medium">{item.label}:</span>{" "}
                <span className="text-teal-900">{item.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
