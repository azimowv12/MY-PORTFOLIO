import React from "react";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "HTML / PUG", level: 95 },
  { name: "CSS / SCSS", level: 85 },
  { name: "Bootstrap / Tailwind", level: 80 },
  { name: "Element UI / Chakra UI", level: 80 },
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "Jquery / Gulp", level: 85 },
  { name: "ReactJs / Redux", level: 80 },
  { name: "Next / React Query", level: 70 },
  { name: "Vue 3 / Vuex", level: 65 },
  { name: "Github / Gitlab", level: 70 },
];

export default function Skills() {
    const {t} = useTranslation()
  return (
    <section id="Skill" className="text-white bg-gray-900 py-12 mt-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
          {t('header.nav3')}
          <span className="block h-1 w-16 bg-blue-400 mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-400 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
