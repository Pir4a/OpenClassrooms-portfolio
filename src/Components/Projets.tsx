import ecommerce from "../assets/Ecommerce.png"
import gym from "../assets/zyzzgym.png"
import carrental from "../assets/carrental.png"
import { FaCss3, FaGithub, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiTypescript } from "react-icons/si"
import { useEffect, useState } from "react"
import ProjetCard from "./ProjetCard"

function Projets() {
  const [revealProjets, setRevealProjets] = useState(false)

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY < 650) {
        setRevealProjets(true)
      } else {
        setRevealProjets(false)
      }
    }
    window.addEventListener("scroll", onPageScroll)

    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div
      className={
        revealProjets === true
          ? "opacity-0 transition-all duration-300 ease-in-out flex justify-center items-center py-0 "
          : "flex justify-center items-center py-16 opacity-100 transition-all duration-300 ease-in-out"
      }
    >
      <div className=" flex gap-16 justify-center w-full lg:flex-row  flex-col lg:items-start items-center lg:text-left text-center">
        <span className="text-blue-600 font-semibold text-2xl  lg:w-[10%] flex justify-end">
          Projets
        </span>

        <div className=" leading-7 2xl:w-2/5 lg:w-3/5 w-11/12 grid xl:grid-cols-4 lg:grid-cols-5 grid-cols-1 lg:place-items-start place-items-center grid-rows-1 lg:gap-y-20 gap-y-8 lg:gap-x-8">
          <ProjetCard />
        </div>
      </div>
    </div>
  )
}

export default Projets
