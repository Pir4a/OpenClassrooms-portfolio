import { BsArrowRight } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import autresProjectsData from "../autresProjectsData.json"

function Autres() {
  return (
    <div className="flex justify-center items-center py-32">
      <div className=" flex gap-16 justify-center w-full lg:flex-row flex-col items-center lg:items-start ">
        <span className="text-blue-600 font-semibold text-2xl  lg:lg:w-[10%] flex lg:lg:justify-end">
          Autres Projets
        </span>

        <div className=" leading-7  2xl:w-2/5 w-3/5 flex flex-col justify-center gap-12">
          {autresProjectsData.map((project, index) => (
            <div key={index} className="flex flex-col gap-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="flex items-center gap-4 group cursor-pointer font-medium">
                  {project.title}
                  <span>
                    <BsArrowRight className="text-blue-600 size-6 group-hover:translate-x-2 transition-all duration-200" />
                  </span>
                </h3>
              </a>
              <p>{project.description}</p>
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <FaGithub className="size-6" /> Code
                </a>
              )}
              <span className="flex gap-4 text-blue-600 pt-4">
                {project.tech.map((tech, i) => (
                  <p
                    key={i}
                    className="border-[1px] rounded border-blue-600 p-1 text-xs"
                  >
                    {tech}
                  </p>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Autres
