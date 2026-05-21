import React from 'react'
import TitleHeader from './TitleHeader'

function AboutMe() {
    return (
        <section id="about" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="About Me & Career Objective"
                    sub="Turning Ideas into Digital Reality"
                />

                <div className="grid-12-cols mt-16 items-center">
                    {/* Image Section with Spinning Rings */}
                    <div className="xl:col-span-5 flex justify-center items-center relative py-10">
                        <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] xl:w-[28rem] xl:h-[28rem] flex items-center justify-center">
                            {/* Outer dashed ring */}
                            <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#cd7c2e]/40 animate-[spin_20s_linear_infinite]" />

                            {/* Middle thick ring */}
                            <div className="absolute inset-5 md:inset-6 rounded-full border-[2px] border-transparent border-t-white/60 border-b-white/60 animate-[spin_12s_linear_infinite_reverse]" />

                            {/* Inner ring */}
                            <div className="absolute inset-10 md:inset-12 rounded-full border border-blue-50/30 border-l-[#cd7c2e]/80 animate-[spin_15s_linear_infinite]" />

                            {/* Main Rounded Image */}
                            <div className="absolute inset-[3.5rem] md:inset-[4.5rem] rounded-full overflow-hidden shadow-[0_0_40px_rgba(205,124,46,0.3)] z-10 border border-white/10">
                                <img
                                    src="/projects_Images/myself.jpg"
                                    alt="Akash Madbor"
                                    className="w-full h-full object-cover transition-transform duration-700 scale-[1.08] hover:scale-[1.15]"
                                    style={{ objectPosition: '50% 30%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="xl:col-span-7 xl:pl-10">
                        <div className="card-border rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                            {/* Background glow effect */}
                            <div className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"
                                style={{ background: 'radial-gradient(circle at center, #cd7c2e 0%, transparent 70%)' }} />

                            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
                                Crafting High-Performance <span className="text-[#cd7c2e]">Frontend Architectures</span>
                            </h3>

                            <div className="text-white-50 text-lg leading-relaxed space-y-6 relative z-10">
                                <p>
                                    My name is <strong>Akash Muhammad Abrrar</strong>, a dynamic Frontend Engineer specializing in architecting modern, high-performance, and mobile-first web platforms. With deep expertise in JavaScript, TypeScript, React.js, and Next.js, I bridge the gap between complex UI/UX design and robust, scalable technical implementations. I specialize in building highly responsive layouts, integrating sophisticated APIs, and designing optimized frontend architectures complete with immersive interactive elements and smooth animations.
                                </p>
                                <p>
                                    My philosophy background shapes my engineering. It refined my logic and critical thinking, enabling me to write highly structured code, design clean architectures, and tackle complex debugging with rigorous precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
