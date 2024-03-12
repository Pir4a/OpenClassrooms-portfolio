import ecommerce from "../assets/Ecommerce.png"
import gym from "../assets/zyzzgym.png"
import carrental from "../assets/carrental.png"
import { FaCss3, FaGithub, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiTypescript } from "react-icons/si"
import { useEffect, useState } from "react"

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
          <a
            className="col-start-1 col-end-4 cursor-pointer"
            href="https://car-rent-website-six.vercel.app"
            target="_blank"
          >
            <img
              src={carrental}
              className="hover:scale-110 transition-all duration-300"
            />
          </a>
          <span className="xl:col-span-1 col-span-2 lg:pb-0 pb-8">
            <h4 className="text-lg pb-4">Car Rental</h4>
            <p className="pb-4">
              Front-End d'un site de réservation de voiture.
            </p>
            <p className="pb-4">Technos utilisées :</p>
            <span className="grid grid-cols-2 gap-y-2 lg:gap-x-0 gap-x-2 w-2/3 mx-auto lg:mx-0 lg:w-full place-items-center">
              <span className="flex items-center gap-3">
                <FaReact className="text-blue-600 size-8" />
                <SiTypescript className="text-blue-600 size-7" />
              </span>
              React / TS
              <SiTailwindcss className="text-blue-600 size-8" />
              TailwindCSS
              <a
                href="https://github.com/Pir4a/car-rent-website"
                target="_blank"
              >
                <FaGithub className="size-8 cursor-pointer hover:scale-110 transition-all duration-150" />
              </a>
              Code
            </span>
          </span>
          <a
            className="col-start-1 col-end-4 cursor-pointer"
            href="https://gym-website-ashy.vercel.app/"
            target="_blank"
          >
            <img
              src={gym}
              className="col-start-1 col-end-4 hover:scale-110 transition-all duration-300"
            />
          </a>
          <span className="xl:col-span-1 col-span-2 lg:pb-0 pb-8">
            <h4 className="text-lg pb-4">Zyzz Gym</h4>
            <p className="pb-4">Front-End d'un site de salle de sport.</p>
            <p className="pb-4">Technos utilisées :</p>
            <span className="grid grid-cols-2 gap-y-2 lg:gap-x-0 gap-x-2 w-2/3 mx-auto lg:mx-0 lg:w-full place-items-center">
              <span className="flex items-center gap-3">
                <FaReact className="text-blue-600 size-8" />
                <SiTypescript className="text-blue-600 size-7" />
              </span>
              React / TS
              <SiTailwindcss className="text-blue-600 size-8" />
              TailwindCSS
              <a href="https://github.com/Pir4a/gym-website" target="_blank">
                <FaGithub className="size-8 cursor-pointer hover:scale-110 transition-all duration-150" />
              </a>
              Code
            </span>
          </span>
          <a
            className="col-start-1 col-end-4 cursor-pointer"
            href="https://eshopsupplements.netlify.app//"
            target="_blank"
          >
            <img
              src={ecommerce}
              className="col-start-1 col-end-4 hover:scale-110 transition-all duration-300 border-2 border-slate-200"
            />
          </a>
          <span className="xl:col-span-1 col-span-2">
            <h4 className="text-lg pb-4">Site E-commerce</h4>
            <p className="pb-4">E-commerce de nutrition sportive.</p>
            <p className="pb-4">Technos utilisées :</p>
            <span className="grid grid-cols-2 gap-y-2 lg:gap-x-0 gap-x-2 w-2/3 mx-auto lg:mx-0 lg:w-full place-items-center">
              <FaReact className="text-blue-600 size-8" />
              React
              <FaCss3 className="text-blue-600 size-8" />
              CSS3
              <a
                href="https://github.com/Pir4a/EcommerceWebsite"
                target="_blank"
              >
                <FaGithub className="size-8 cursor-pointer hover:scale-110 transition-all duration-150" />
              </a>
              Code
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Projets
