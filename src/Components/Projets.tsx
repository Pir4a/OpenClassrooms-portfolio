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
      <div className=" flex gap-16 justify-center w-full">
        <span className="text-blue-600 font-semibold text-2xl  w-[10%] flex justify-end">
          Projets
        </span>

        <div className=" leading-7 w-2/5 grid grid-cols-4 grid-rows-1 gap-y-20 gap-x-8">
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
          <span>
            <h4 className="text-lg pb-4">Car Rental</h4>
            <p className="pb-4">
              Front-End d'un site de réservation de voiture.
            </p>
            <p className="pb-4">Technos utilisées :</p>
            <span className="grid grid-cols-2 gap-y-2">
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
          <span>
            <h4 className="text-lg pb-4">Zyzz Gym</h4>
            <p className="pb-4">Front-End d'un site de salle de sport.</p>
            <p className="pb-4">Technos utilisées :</p>
            <span className="grid grid-cols-2 gap-y-2">
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
          <span>
            <h4 className="text-lg pb-4">Site E-commerce</h4>
            <p className="pb-4">E-commerce de nutrition sportive.</p>
            <p className="pb-4">Technos utilisées :</p>
            <span className="grid grid-cols-2 gap-y-2">
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
