import { logoIconsList } from "../../constants"

const LogoIcon = ({icon}) => {
    return (
        <div className="flex-none flex-center marquee-item">
             <div className="flex-center bg-white/95 border border-white rounded-xl shadow-lg w-28 h-16 md:w-36 md:h-20 px-4 py-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img 
                      src={icon.imgPath} 
                      alt={icon.name} 
                      className="max-h-10 md:max-h-12 max-w-full object-contain select-none pointer-events-none" 
                  />
             </div>
        </div>
    )
}


function LogoSection() {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-28 md:h-36">
                 <div className="marquee-box md:gap-12 gap-5 flex items-center">
                   {logoIconsList.map((icon, index) => (
                      <LogoIcon key={index} icon={icon}/>
                   ))}
                 </div>
            </div>
        </div>
    )
}

export default LogoSection