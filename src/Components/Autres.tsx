import { BsArrowRight } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

function Autres() {
  return (
    <div className="flex justify-center items-center py-32">
      <div className=" flex gap-16 justify-center w-full lg:flex-row flex-col items-center lg:flex-row flex-col lg:items-start items-center">
        <span className="text-blue-600 font-semibold text-2xl  lg:lg:w-[10%] flex lg:lg:justify-end">
          Autres Projets
        </span>

        <div className=" leading-7  2xl:w-2/5 w-3/5 flex flex-col justify-center gap-12">
          <div className="flex flex-col justify-center gap-2">
            <a href="https://krypto-app-xi.vercel.app/" target="_blank">
              <h3 className="flex items-center gap-4 group cursor-pointer font-medium">
                Crypto Website
                <span>
                  <BsArrowRight className="text-blue-600 size-6 group-hover:translate-x-2 transition-all duration-200" />
                </span>
              </h3>
            </a>
            <p>
              Projet en JavasScript, site de visualisation du marché de la
              cryptomonnaie. Le but était d'apprendre a utiliser les données
              d'une API ainsi que Tailwind.
            </p>
            <a
              className="flex items-center gap-4"
              href="https://github.com/Pir4a/KryptoApp"
            >
              <FaGithub className="size-6" /> Code
            </a>
            <span className="flex gap-4 text-blue-600 pt-4">
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                JavaScript
              </p>
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                HTML
              </p>

              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                Tailwind
              </p>
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                API
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <a
              href="https://space-tourism-website-ivory-ten.vercel.app/"
              target="_blank"
            >
              <h3 className="flex items-center gap-4 group cursor-pointer font-medium">
                Space Tourism
                <span>
                  <BsArrowRight className="text-blue-600 size-6 group-hover:translate-x-2 transition-all duration-200" />
                </span>
              </h3>
            </a>
            <p>
              Projet en React, surtout axé sur le css, pour Front End Mentor (
              site donnant des projets pour progresser ).
            </p>

            <a className="flex items-center gap-4" href="">
              <FaGithub className="size-6" /> Code
            </a>

            <span className="flex gap-4 text-blue-600 pt-4">
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                React
              </p>
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                Typescript
              </p>

              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                CSS
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <a
              href="https://multi-step-form-nu-six.vercel.app/"
              target="_blank"
            >
              <h3 className="flex items-center gap-4 group cursor-pointer font-medium">
                Formulaire a plusieurs étapes
                <span>
                  <BsArrowRight className="text-blue-600 size-6 group-hover:translate-x-2 transition-all duration-200" />
                </span>
              </h3>
            </a>
            <p>
              Projet en React ( front end mentor ), m'a permis d'apprendre la
              logique derriere un formulaire a plusieurs étapes ainsi que des
              props.
            </p>
            <a
              className="flex items-center gap-4"
              href="https://github.com/Pir4a/multi-stepForm"
              target="_blank"
            >
              <FaGithub className="size-6" /> Code
            </a>
            <span className="flex gap-4 text-blue-600 pt-4">
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                JavaScript
              </p>
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                HTML
              </p>

              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                Tailwind
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <a
              href="https://rock-paper-scissors-sigma-orcin.vercel.app/"
              target="_blank"
            >
              <h3 className="flex items-center gap-4 group cursor-pointer font-medium">
                Pierre Feuille Ciseaux
                <span>
                  <BsArrowRight className="text-blue-600 size-6 group-hover:translate-x-2 transition-all duration-200" />
                </span>
              </h3>
            </a>
            <p>
              Projet en React ( front end mentor ), m'a permis d'apprendre une
              logique simple, et commencer a comprendre react.
            </p>
            <a
              className="flex items-center gap-4"
              href="https://github.com/Pir4a/RockPaperScissors"
              target="_blank"
            >
              <FaGithub className="size-6" /> Code
            </a>
            <span className="flex gap-4 text-blue-600 pt-4">
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                React
              </p>
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                TypeScript
              </p>

              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                CSS
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <a href="https://agecalculator-green.vercel.app/" target="_blank">
              <h3 className="flex items-center gap-4 group cursor-pointer font-medium">
                Calculateur d'age
                <span>
                  <BsArrowRight className="text-blue-600 size-6 group-hover:translate-x-2 transition-all duration-200" />
                </span>
              </h3>
            </a>
            <p>
              Projet en Javascript ( front end mentor ), m'a permis
              d'appronfondir ma connaissance en JS et algorythmes.
            </p>
            <a
              className="flex items-center gap-4"
              href="https://github.com/Pir4a/agecalculator/"
              target="_blank"
            >
              <FaGithub className="size-6" /> Code
            </a>
            <span className="flex gap-4 text-blue-600 pt-4">
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                Javascript
              </p>
              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                HTML
              </p>

              <p className="border-[1px] rounded border-blue-600 p-1 text-xs">
                CSS
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Autres
