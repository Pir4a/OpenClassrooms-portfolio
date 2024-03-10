function Hero() {
  return (
    <>
      <div className="flex flex-col gap-16 h-dvh pl-[18%] justify-center ">
        <h2 className="text-4xl opacity-85 pb-16">Bonjour!👋</h2>
        <h3 className="text-4xl max-w-[660px] opacity-85 leading-[3.5rem]">
          Je m'appelle <b className="opacity-85">Stéphane Dedu</b>, Developpeur
          Front-end.
          <br />
          J'aime construire de belles interfaces & expériences 👨‍💻
        </h3>
        <p className="text-lg">
          Contactez-moi 👉{" "}
          <a
            href="stephane.dedu@gmail.com"
            target="_blank"
            className="relative p-1 group hover:text-white transition-all duration-300 ease-in-out origin-bottom font-medium"
          >
            stephane.dedu@gmail.com
            <span className="absolute -z-10 left-0 right-0 bottom-0 h-[3px] bg-blue-600 group-hover:h-full transition-all duration-300"></span>
          </a>
        </p>
      </div>
    </>
  )
}

export default Hero
