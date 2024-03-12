import Autres from "../Components/Autres"
import Competences from "../Components/Competences"
import Hero from "../Components/Hero"
import Profil from "../Components/Profil"
import Projets from "../Components/Projets"

function Home() {
  return (
    <>
      <div className="font-montserrat">
        <Hero />
        <Profil />
        <Competences />
        <Projets />
        <Autres />
      </div>
    </>
  )
}

export default Home
