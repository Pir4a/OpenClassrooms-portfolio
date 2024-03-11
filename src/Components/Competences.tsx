function Competences() {
  return (
    <div className="flex justify-center items-center py-32">
      <div className=" flex gap-16 justify-center w-full">
        <span className="text-blue-600 font-semibold text-2xl  w-[10%] flex justify-end">
          Compétences
        </span>

        <div className=" leading-7 w-2/5 grid grid-cols-4 grid-rows-1">
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
          </span>
        </div>
      </div>
    </div>
  )
}

export default Competences
