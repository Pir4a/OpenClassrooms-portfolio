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
          ? "opacity-0 transition-all duration-300 ease-in-out pb-16"
          : " opacity-100 flex justify-center items-center transition-all duration-300 ease-in-out pb-16"
      }
    >
      <div className=" flex gap-16 justify-center w-full">
        <span className="text-blue-600 font-semibold text-2xl w-[10%] flex justify-end">
          Profil
        </span>

        <p className=" leading-7 w-2/5">
          Salut, moi c'est Stéphane, développeur front-end actuellement en
          Formation Developpeur Web chez OpenClassrooms, je code et ai appris ce
          dernier en auto didacte depuis Novembre 2023.
          <br /> Ma passion est de créer et développer un UI/UX propre. Ma main
          stack est actuellement React en combinaison avec Typescript et
          Tailwind CSS
        </p>
      </div>
    </div>
  )
}

export default Profil
