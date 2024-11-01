import React from "react"
import {
  FaGithub,
  FaReact,
  FaSass,
  FaDatabase,
  FaNodeJs,
  FaCss3,
} from "react-icons/fa"
import { SiTailwindcss, SiTypescript } from "react-icons/si"
import { VscBlank } from "react-icons/vsc"
import PROJECTSDATA from "../projectsData.json"

// Mapping des noms de technologies aux composants d'icônes
const iconMap = {
  FaCss3: FaCss3,
  FaDatabase: FaDatabase,
  FaNodeJs: FaNodeJs,
  FaReact: FaReact,
  FaSass: FaSass,
  SiTailwindcss: SiTailwindcss,
  SiTypescript: SiTypescript,
  VscBlank: VscBlank,
}

function ProjetCard() {
  return (
    <>
      {PROJECTSDATA.map((data) => (
        <React.Fragment key={data.projectName}>
          {/* Affichage de l'image pour les grands écrans */}
          <a
            className="col-start-1 col-end-4 cursor-pointer xl:block hidden"
            href={data.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={data.projectImg}
              alt={`Aperçu de ${data.projectName}`}
              className="hover:scale-105 transition-all duration-300 lg:border-x-gray-100 lg:border-2 xl:block hidden"
            />
          </a>

          {/* Affichage des informations textuelles et des technologies */}
          <div className="xl:col-span-1 col-span-2 lg:pb-0 2xl:text-lg border-[1px] p-[1px] lg:border-none lg:p-0">
            <h4 className="text-lg pb-4 font-bold">{data.projectName}</h4>
            <p className="pb-4">{data.projectDescription}</p>
            <p className="pt-4 font-semibold">Technos utilisées :</p>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-x-0 gap-x-2 w-2/3 mx-auto lg:mx-0 lg:w-full py-8">
              {data.technos.map((techno, index) => {
                // Récupère l'icône correspondante dans iconMap
                // @ts-ignore
                const IconComponent = iconMap[data.technosImg[index]]

                return (
                  <span
                    key={index}
                    className="flex items-center gap-3 row-span-1"
                  >
                    {/* Affiche dynamiquement l'icône associée */}
                    {IconComponent && (
                      <IconComponent className="text-blue-600 size-8" />
                    )}
                    <span>{techno}</span>
                  </span>
                )
              })}
            </div>
            {/* Lien GitHub */}
            <a
              href={data.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:pt-8 flex items-center justify-center lg:justify-start"
            >
              <FaGithub className="size-8 cursor-pointer hover:scale-110 transition-all duration-150" />
              <span className="pl-2">Github</span>
            </a>{" "}
            {/* Affichage de l'image pour les petits écrans */}
            <a
              className="col-start-1 col-end-4 cursor-pointer block xl:hidden mt-8"
              href={data.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={data.projectImg}
                alt={`Aperçu de ${data.projectName}`}
                className="hover:scale-110 transition-all duration-300 border-x-gray-100 border-2 block xl:hidden"
              />
            </a>
          </div>
        </React.Fragment>
      ))}
    </>
  )
}

export default ProjetCard
