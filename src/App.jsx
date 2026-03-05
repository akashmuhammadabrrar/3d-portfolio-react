import NavBar from "./components/NavBar"
import ExperienceSection from "./components/sections/ExperienceSection"
import FeatureCards from "./components/sections/FeatureCards"
import Hero from "./components/sections/Hero"
import LogoSection from "./components/sections/LogoSection"
import ShowCaseSection from "./components/sections/ShowCaseSection"
import TechStack from "./components/sections/TechStack"
import Testimonials from "./components/sections/Testimonials"
import Contact from "./components/sections/Contact"
import { Toaster } from 'sonner'
import Footer from "./components/sections/Footer"

function App() {

  return (
    <>
      <Toaster richColors position="bottom-right" />
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
