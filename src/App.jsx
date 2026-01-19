import NavBar from "./components/NavBar"
import ExperienceSection from "./components/sections/ExperienceSection"
import FeatureCards from "./components/sections/FeatureCards"
import Hero from "./components/sections/Hero"
import LogoSection from "./components/sections/LogoSection"
import ShowCaseSection from "./components/sections/ShowCaseSection"

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards/>
      <ExperienceSection/>
    </>
  )
}

export default App
