import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "kilian-rohde",
        title: "Kilian Rohde",
        subtitle: "A large commercial web application based on Next.js with AI-powered customization and bulk email capabilities.",
        summary: [
            "Built as a large-scale commercial web application utilizing Next.js for server-side rendering (SSR), optimization, and high performance.",
            "Integrated an interactive AI-powered customization engine allowing buyers to design and personalize products according to their desires.",
            "Implemented a custom token economy system where users purchase and consume tokens to generate AI customization designs.",
            "Developed a comprehensive Admin Control Panel enabling administrators to add, update, remove, and manage products dynamically.",
            "Configured an SMTP email management module that empowers admins to send bulk updates, newsletters, and system notifications.",
            "Engineered a modern, fully responsive user interface utilizing TailwindCSS to ensure a seamless purchasing experience across devices."
        ],
        liveLink: "https://thundra.de/",
        github: "https://github.com/akashmuhammadabrrar/Kilian_Rhode_Frontend.git",
        images: ["/projects_Images/thundra_landing.PNG", "/projects_Images/thundra.de_ (2).png"],
        credentials: {
            admin: {
                email: "adminf@user.com",
                password: "Afhhhbn&58)$46(+"
            },
            user: {
                email: "mypcmail093@gmail.com",
                password: "123456"
            }
        },
        tags: ["Next.js", "AI Product Customization", "SMTP Email Management", "Admin Dashboard", "E-commerce System", "Token Economy"]
    },
    {
        id: "saif-syn",
        title: "Saif syn (Thari Finance)",
        subtitle: "A stock market and Sharia compliance analysis platform built with Next.js and Zoya API integrations.",
        summary: [
            "Created a high-frequency stock market and Sharia compliance analysis platform powered by Next.js and TailwindCSS.",
            "Integrated Zoya API (a premium third-party service) to dynamically fetch and determine halal compliance and non-compliance of global stocks.",
            "Built an AI analysis engine that provides users with comprehensive insights, summaries, and forecasts of current market trends.",
            "Configured subscription tiers and gatekeeping logic to monetize access to live stock data feed and premium AI stock reports.",
            "Architected an Admin Dashboard giving administrators complete oversight over user accounts, subscriptions, and database records.",
            "Designed visually rich dashboards with charts and tables enabling users to easily analyze financial indexes."
        ],
        liveLink: "https://thari.finance/",
        github: null,
        images: ["/projects_Images/thari.finance_.png", "/projects_Images/thari.finance_user_ai-analysis.png"],
        credentials: {
            admin: {
                email: "admin@example.com",
                password: "Password123!"
            },
            user: {
                email: "user@example.com",
                password: "Password123!"
            }
        },
        tags: ["Next.js", "Stock Market Data", "Zoya API", "Sharia Compliance", "AI Financial Analysis", "Subscription Model"]
    },
    {
        id: "caroline",
        title: "Caroline (Next Zen Pros)",
        subtitle: "A Next.js sports management platform featuring 4 role-based dashboards for football tournaments.",
        summary: [
            "Developed a Next.js sports coordination application designed for tournament management, team organizing, and player databases.",
            "Architected a robust 4-role dashboard system tailoring distinct control panels and permissions for Admin, Scout, Club, and Player.",
            "Designed the Admin Dashboard with complete platform oversight, database control, config management, and user permissions.",
            "Configured the Scout Dashboard specifically for event discovery, tournament tracking, and comprehensive player performance scouting.",
            "Formulated Club and Player portals facilitating roster creation, team registrations, statistics logs, and direct tournament signups.",
            "Engineered a responsive scheduling and match progress board, optimizing large tournament brackets and brackets visualization for mobile screens."
        ],
        liveLink: "http://98.81.136.120:3000/",
        github: null,
        images: ["/projects_Images/carolineLanding.png", "/projects_Images/carolineAdmin.png"],
        credentials: {
            admin: {
                email: "admin@gmail.com",
                password: "test123@@"
            }
        },
        tags: ["Next.js", "Role-based Dashboard", "Football Club Management", "Tournament Coordination", "Scouting System"]
    }
];

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    const [activeProject, setActiveProject] = useState(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    // Disable body scroll when modal is active
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeProject]);

    // Handle Escape key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setActiveProject(null);
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    const handleCopy = (text, label) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success(`${label} copied to clipboard!`);
        }).catch(() => {
            toast.error("Failed to copy. Please select and copy manually.");
        });
    };

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* First Project: Kilian Rohde */}
                    <div 
                        ref={rydeRef} 
                        className="first-project-wrapper cursor-pointer group relative rounded-xl border border-white/10 overflow-hidden"
                        onClick={() => setActiveProject(projects[0])}
                    >
                        <div className="image-wrapper relative">
                            <img 
                                src={projects[0].images[0]} 
                                alt={projects[0].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                                <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div>
                                        <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded">
                                            Featured Commercial
                                        </span>
                                    </div>
                                    <h2 className="text-xl md:text-3xl font-bold text-white mt-2">{projects[0].title}</h2>
                                    <p className="text-xs md:text-sm text-white-50 leading-relaxed max-w-xl">
                                        {projects[0].subtitle}
                                    </p>
                                    <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                                        <span>View Project Details</span>
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second & Third Projects */}
                    <div className="project-list-wrapper overflow-hidden">
                        {/* Project 2: Saif syn */}
                        <div 
                            className="project cursor-pointer group relative rounded-xl border border-white/10 overflow-hidden" 
                            ref={libraryRef}
                            onClick={() => setActiveProject(projects[1])}
                        >
                            <div className="image-wrapper relative">
                                <img
                                    src={projects[1].images[0]}
                                    alt={projects[1].title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 md:p-6">
                                    <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div>
                                            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded">
                                                Fintech & AI
                                            </span>
                                        </div>
                                        <h2 className="text-lg md:text-xl font-bold text-white mt-1">{projects[1].title}</h2>
                                        <p className="text-xs text-white-50 leading-relaxed">
                                            {projects[1].subtitle}
                                        </p>
                                        <div className="pt-1.5 flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                                            <span>View Project Details</span>
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 3: Caroline */}
                        <div 
                            className="project cursor-pointer group relative rounded-xl border border-white/10 overflow-hidden" 
                            ref={ycDirectoryRef}
                            onClick={() => setActiveProject(projects[2])}
                        >
                            <div className="image-wrapper relative">
                                <img 
                                    src={projects[2].images[0]} 
                                    alt={projects[2].title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 md:p-6">
                                    <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div>
                                            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded">
                                                Management System
                                            </span>
                                        </div>
                                        <h2 className="text-lg md:text-xl font-bold text-white mt-1">{projects[2].title}</h2>
                                        <p className="text-xs text-white-50 leading-relaxed">
                                            {projects[2].subtitle}
                                        </p>
                                        <div className="pt-1.5 flex items-center gap-1.5 text-xs font-semibold text-purple-400">
                                            <span>View Project Details</span>
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Detail Dialog */}
            {activeProject && (
                <div 
                    data-lenis-prevent
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300"
                    onClick={() => setActiveProject(null)}
                >
                    <div 
                        data-lenis-prevent
                        className="bg-black-100 border border-black-50 rounded-2xl w-full max-w-5xl h-[85vh] md:h-[680px] overflow-hidden flex flex-col md:flex-row shadow-2xl relative transition-all duration-300 transform scale-100 opacity-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setActiveProject(null)}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/60 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Left side: Images Stack */}
                        <div 
                            data-lenis-prevent
                            className="w-full md:w-[42%] h-[40%] md:h-full overflow-y-auto flex flex-col p-4 md:p-6 gap-4 border-b md:border-b-0 md:border-r border-black-50 bg-black-200/10"
                        >
                            {activeProject.images.map((imgUrl, idx) => (
                                <div key={idx} className="relative overflow-hidden rounded-xl border border-white/10 shadow-lg bg-black-100 flex-shrink-0">
                                    <img 
                                        src={imgUrl} 
                                        alt={`${activeProject.title} screenshot ${idx + 1}`} 
                                        className="w-full h-auto object-cover rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right side: Project Details */}
                        <div 
                            data-lenis-prevent
                            className="w-full md:w-[58%] h-[60%] md:h-full overflow-y-auto flex flex-col justify-between p-6 md:p-8"
                        >
                            <div className="space-y-6">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Featured Project</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">{activeProject.title}</h2>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {activeProject.tags.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white-50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Key Features</h3>
                                    <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-white-50 leading-relaxed font-normal">
                                        {activeProject.summary.map((feature, idx) => (
                                            <li key={idx} className="marker:text-emerald-400">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Credentials Section */}
                                {activeProject.credentials && (
                                    <div className="space-y-3">
                                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                                            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                            </svg>
                                            Access Credentials
                                        </h3>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {activeProject.credentials.admin && (
                                                <div className="bg-black-200 border border-white/10 rounded-xl p-4 space-y-3 shadow-md hover:border-emerald-500/20 transition-all duration-300">
                                                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Admin Dashboard</div>
                                                    <div className="space-y-2 text-xs text-white-50">
                                                        <div className="flex items-center justify-between gap-3 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                                                            <span className="truncate text-left select-all">Email: {activeProject.credentials.admin.email}</span>
                                                            <button 
                                                                onClick={() => handleCopy(activeProject.credentials.admin.email, "Admin Email")}
                                                                className="opacity-70 hover:opacity-100 hover:text-white p-1 hover:bg-white/5 rounded transition-all cursor-pointer shrink-0"
                                                                title="Copy Email"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="flex items-center justify-between gap-3 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                                                            <span className="truncate text-left select-all">Password: {activeProject.credentials.admin.password}</span>
                                                            <button 
                                                                onClick={() => handleCopy(activeProject.credentials.admin.password, "Admin Password")}
                                                                className="opacity-70 hover:opacity-100 hover:text-white p-1 hover:bg-white/5 rounded transition-all cursor-pointer shrink-0"
                                                                title="Copy Password"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeProject.credentials.user && (
                                                <div className="bg-black-200 border border-white/10 rounded-xl p-4 space-y-3 shadow-md hover:border-blue-500/20 transition-all duration-300">
                                                    <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">User Account</div>
                                                    <div className="space-y-2 text-xs text-white-50">
                                                        <div className="flex items-center justify-between gap-3 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                                                            <span className="truncate text-left select-all">Email: {activeProject.credentials.user.email}</span>
                                                            <button 
                                                                onClick={() => handleCopy(activeProject.credentials.user.email, "User Email")}
                                                                className="opacity-70 hover:opacity-100 hover:text-white p-1 hover:bg-white/5 rounded transition-all cursor-pointer shrink-0"
                                                                title="Copy Email"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="flex items-center justify-between gap-3 bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                                                            <span className="truncate text-left select-all">Password: {activeProject.credentials.user.password}</span>
                                                            <button 
                                                                onClick={() => handleCopy(activeProject.credentials.user.password, "User Password")}
                                                                className="opacity-70 hover:opacity-100 hover:text-white p-1 hover:bg-white/5 rounded transition-all cursor-pointer shrink-0"
                                                                title="Copy Password"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer links */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-black-50 mt-6">
                                {activeProject.liveLink && (
                                    <a 
                                        href={activeProject.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-3 bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                                    >
                                        <span>Visit Live App</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                                {activeProject.github ? (
                                    <a 
                                        href={activeProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-3 bg-black-200 hover:bg-neutral-800 border border-white/10 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                                    >
                                        <span>View GitHub</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                        </svg>
                                    </a>
                                ) : (
                                    <div className="flex-1 px-4 py-3 bg-black-200 border border-white/5 text-neutral-500 font-semibold rounded-xl text-sm flex items-center justify-center gap-2 cursor-not-allowed select-none">
                                        <span>Codebase Private</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppShowcase;