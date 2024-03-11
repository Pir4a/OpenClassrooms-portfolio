import Competences from "../Components/Competences"
import Hero from "../Components/Hero"
import Profil from "../Components/Profil"

function Home() {
  return (
    <>
      <div className="font-montserrat">
        <Hero />
        <Profil />
        <Competences />
      </div>
    </>
  )
}

export default Home
