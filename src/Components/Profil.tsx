import { useEffect, useState } from "react"

function Profil() {
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY < 100) {
        setReveal(true)
      } else {
        setReveal(false)
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
        reveal === true
          ? "opacity-0 transition-all duration-300 ease-in-out pb-16 2xl:pt-0 pt-32"
          : " opacity-100 flex justify-center items-center transition-all duration-300 ease-in-out pb-16 2xl:pt-0 pt-32"
      }
    >
      <div className=" flex gap-16 justify-center w-full lg:flex-row  flex-col lg:items-start items-center lg:text-left text-center">
        <span className="text-blue-600 font-semibold text-2xl lg:w-[10%] flex justify-end">
          Profil
        </span>

        <p className=" leading-7 2xl:w-3/5 lg:w-3/5 w-5/6 lg:text-lg">
          Salut, moi c'est Stéphane, développeur Web en recherche d'un CDI/CDD.
          <br /> Diplomé d'une formation Developpeur Web OpenClassrooms, je code
          et ai appris ce dernier en autodidacte depuis Novembre 2023.
          <br /> Ma passion est de créer et développer un UI/UX propre. Ma main
          stack est actuellement React en combinaison avec Typescript et
          Tailwind CSS
        </p>
      </div>
    </div>
  )
}

export default Profil
