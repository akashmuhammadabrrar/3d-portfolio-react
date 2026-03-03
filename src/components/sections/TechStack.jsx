import TitleHeader from './TitleHeader'
import { techStackIcons } from '../../constants'
import TechIcon from '../Moldels/TechIcon'
import { useGSAP } from '@gsap/react'

function TechStack() {

  useGSAP(() => {
    gsap.fromTo(".tech-card", {})
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
                  <TechIcon model={icon} />
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