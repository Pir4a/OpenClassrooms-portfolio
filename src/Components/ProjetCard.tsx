import React, { useEffect, useState } from "react"
import { FaCss3, FaGithub, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiTypescript } from "react-icons/si"
import PROJECTSDATA from "../projectsData"
import { VscBlank } from "react-icons/vsc"

function ProjetCard() {
  return (
    <>
      {PROJECTSDATA.map((data) => (
        <React.Fragment key={data.projectName}>
          <a
            key={data.projectName}
            className="col-start-1 col-end-4 cursor-pointer xl:block hidden"
            href={data.liveLink}
            target="_blank"
          >
            <img
              src={data.projectImg}
              className="hover:scale-110 transition-all duration-300 border-x-gray-100 border-2 xl:block hidden"
            />
          </a>

          <span className="xl:col-span-1   col-span-2 lg:pb-0 pb-8">
            <h4 className="text-lg pb-4">{data.projectName}</h4>
            <p className="pb-4">{data.projectDescription}</p>
            <p className="pb-4">Technos utilisées :</p>
            <span className="grid grid-cols-2 gap-y-2 lg:gap-x-0 gap-x-2 w-2/3 mx-auto lg:mx-0 lg:w-full place-items-center">
              <span className="flex items-center gap-3">
                <data.technoOneImg className="text-blue-600 size-8" />
                {data.technoTwoImg == VscBlank ? (
                  <></>
                ) : (
                  <data.technoTwoImg className="text-blue-600 size-7" />
                )}
              </span>
              {data.technoOne}
              <data.technoThreeImg className="text-blue-600 size-8" />
              {data.technoTwo}
              <a href={data.gitLink} target="_blank">
                <FaGithub className="size-8 cursor-pointer hover:scale-110 transition-all duration-150" />
              </a>
              Code
            </span>
          </span>
          <a
            key={data.projectName}
            className="col-start-1 col-end-4 cursor-pointer block xl:hidden"
            href={data.liveLink}
            target="_blank"
          >
            <img
              src={data.projectImg}
              className="hover:scale-110 transition-all duration-300 border-x-gray-100 border-2 block xl:hidden"
            />
          </a>
        </React.Fragment>
      ))}
    </>
  )
}

export default ProjetCard
