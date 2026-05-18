import TitleHeader from './TitleHeader'
import { techStackIcons } from '../../constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function TechStack() {

  useGSAP(() => {
    gsap.fromTo(".tech-card", { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
      }
    })
  })


  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="The Skills I Bring To the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div key={icon.id} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
              <div className="tech-card-animated-bg" />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <img 
                    src={icon.imgPath} 
                    alt={icon.name} 
                    className="w-24 h-24 md:w-28 md:h-28 object-contain transition-transform duration-500 ease-in-out group-hover:scale-110 select-none pointer-events-none"
                  />
                </div>

                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack