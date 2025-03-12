import { useEffect, useState } from "react"

function Competences() {
  const [revealCompetences, setRevealCompetences] = useState(false)

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY < 400) {
        setRevealCompetences(true)
      } else {
        setRevealCompetences(false)
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
        revealCompetences === true
          ? "opacity-0 transition-all duration-300 ease-in-out flex justify-center items-center py-16 "
          : "flex justify-center items-center py-16 opacity-100 transition-all duration-300 ease-in-out"
      }
    >
      <div className=" flex gap-16 justify-center w-full lg:flex-row  flex-col lg:items-start items-center lg:text-left text-center">
        <span className="text-blue-600 font-semibold text-2xl  lg:w-[10%] flex justify-end">
          Compétences
        </span>

        <div className=" leading-7  2xl:w-3/5 lg:w-3/5 w-[55%] grid lg:grid-cols-4 lg:grid-rows-1 lg:gap-0 gap-8 lg:text-lg">
          <span>
            <h3 className="font-medium text-lg">Langages</h3>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>HTML</p>
            <p>CSS / Sass</p>
          </span>
          <span>
            <h3 className="font-medium text-lg">Frameworks</h3>
            <p>React</p>
            <p>Tailwind</p>
            <p>Node</p>
          </span>
          <span>
            <h3 className="font-medium text-lg">Outils</h3>
            <p>Bash</p>
            <p>Github</p>
            <p>Chrome DevTools</p>
          </span>
          <span>
            <h3 className="font-medium text-lg">Design</h3>
            <p>Sketch</p>
            <p>Figma</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Competences
