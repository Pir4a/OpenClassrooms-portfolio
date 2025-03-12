import { useEffect, useState } from "react"
import { FaGithub } from "react-icons/fa"
import { FaCircleArrowUp, FaLinkedin, FaTurnDown } from "react-icons/fa6"

function Hero() {
  const [goUp, setGoUp] = useState(false)
  const [isScrollDown, setScrollDown] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToProfil = () => {
    window.scrollTo({ top: 840, behavior: "smooth" })
  }

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true)
      } else {
        setGoUp(false)
      }
    }
    window.addEventListener("scroll", onPageScroll)

    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 330) {
        setScrollDown(true)
      } else {
        setScrollDown(false)
      }
    }
    window.addEventListener("scroll", onPageScroll)

    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])
  return (
    <>
      <div className="flex flex-col lg:gap-16 h-dvh lg:pl-[18%] items-center lg:items-start text-center lg:text-left justify-center px-4 lg:px-0 ">
        <h2 className="text-4xl opacity-85 pb-16">
          Bonjour!
          <span className=" duration-100 transition-all animate-bounce">
            👋
          </span>
        </h2>
        <h3 className="text-2xl lg:text-4xl max-w-[660px] opacity-85 leading-[3.5rem] ">
          Je m'appelle <b className="opacity-85">Stéphane Dedu</b>, Developpeur
          Front-end.
          <br />
          J'aime construire de belles interfaces & expériences 👨‍💻
          <span className="flex gap-4 py-4 lg:mx-0 lg:justify-start justify-center">
            <a href="https://github.com/Pir4a" target="_blank" className="">
              <FaGithub className="cursor-pointer hover:scale-125 transition-all duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/st%C3%A9phane-dedu-14579a266/"
              target="_blank"
              className=""
            >
              <FaLinkedin className="cursor-pointer hover:scale-125 transition-all duration-200" />
            </a>
          </span>
        </h3>
        <p className="text-lg pt-16">
          Contactez-moi 👉{" "}
          <a
            href="mailto: stephane.dedu@gmail.com"
            target="_blank"
            className="relative p-1 group hover:text-white transition-all duration-300 ease-in-out origin-bottom font-medium"
          >
            stephane.dedu@gmail.com
            <span className="absolute -z-10 left-0 right-0 bottom-0 h-[3px] bg-blue-600 group-hover:h-full transition-all duration-300"></span>
          </a>
        </p>

        <p
          onClick={scrollToProfil}
          className={`${
            isScrollDown ? "opacity-0" : "opacity-100"
          } hidden cursor-pointer lg:absolute hover:text-[2.5rem] bottom-[4rem] lg:flex justify-center items-center text-4xl gap-3 transition-all duration-300`}
        >
          Voir mon profil
          <FaTurnDown className="mt-8" />
        </p>
      </div>
      <div
        onClick={scrollToTop}
        className={`fixed cursor-pointer bottom-8 right-8 ${
          goUp ? "block" : "hidden"
        }`}
      >
        <FaCircleArrowUp className="text-blue-600 size-12" />
      </div>
    </>
  )
}

export default Hero
