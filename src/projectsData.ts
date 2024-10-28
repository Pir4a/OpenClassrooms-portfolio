import carrental from "./assets/carrental.png"
import ecommerce from "./assets/Ecommerce.png"
import gym from "./assets/zyzzgym.png"
import kasa from "./assets/Kasa.png"
import { FaCss3, FaReact, FaSass } from "react-icons/fa"
import { SiTailwindcss, SiTypescript } from "react-icons/si"
import { VscBlank } from "react-icons/vsc"
export const PROJECTS_DATA = [
  {
    projectName: "Car Rental",
    projectDescription:
      "Front-End d'un site de réservation de voiture, projet personnel",
    technoOneImg: FaReact,
    technoTwoImg: SiTypescript,
    technoThreeImg: SiTailwindcss,
    technoOne: "React / TS",
    technoTwo: "TailwindCSS",
    gitLink: "https://github.com/Pir4a/car-rent-website",
    liveLink: "https://car-rent-website-six.vercel.app",
    projectImg: carrental,
  },
  {
    projectName: "Kasa (OC)",
    projectDescription:
      "Front-End d'un site de réservation de biens immobiliers, projet de formation Openclassrooms",
    technoOneImg: FaReact,
    technoTwoImg: VscBlank,
    technoThreeImg: FaSass,
    technoOne: "React",
    technoTwo: "SaSS",
    gitLink: "https://github.com/Pir4a/OpenClassrooms-projet-4.git",
    liveLink: "https://open-classrooms-projet-4.vercel.app/",
    projectImg: kasa,
  },
  {
    projectName: "Zyzz Gym",
    technoOneImg: FaReact,
    technoTwoImg: SiTypescript,
    technoThreeImg: SiTailwindcss,
    projectDescription:
      "Front-End d'un site de salle de sportn projet personnel",
    technoOne: "React / TS",
    technoTwo: "TailwindCSS",
    gitLink: "https://github.com/Pir4a/gym-website.git",
    liveLink: "https://github.com/Pir4a/gym-website",
    projectImg: gym,
  },

  {
    projectName: "Site E-commerce",
    technoOneImg: FaReact,
    technoTwoImg: VscBlank,
    technoThreeImg: FaCss3,
    projectDescription:
      "E-commerce de nutrition sportive, premier projet (personnel) en react",
    technoOne: "React",
    technoTwo: "CSS3",
    gitLink: "https://github.com/Pir4a/EcommerceWebsite",
    liveLink: "https://eshopsupplements.netlify.app//",
    projectImg: ecommerce,
  },
]
export default PROJECTS_DATA
