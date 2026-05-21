import { RevealOnScroll } from "../RevealOnScroll"
export const About =() =>{
    const digitalmarketingSkills=[
        "Social Media Marketing",
        "Seo & Sem",
        "Profile Optimization",
        "Content Marketing",
        "Email Marketing",
    ];
    const uiuxSkills=[
        "User Research",
        "Wireframing & Prototyping",
        "Interaction Design",
        "User-Centered Design (UCD)",
    ];
    const webdevSkills=[
        "React.js",
        "Tailwind CSS",
        "Portfolio Website",
        "Blogging Website",
    ];
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                I'm a passionate digital marketer, UI/UX enthusiast,
                 and web developer. I specialize in creating impactful marketing strategies,
                  intuitive designs, and simple yet effective websites using React.js, JavaScript, and Tailwind CSS.

                With a keen eye for user experience and digital growth, I help brands enhance their online presence, 
                engage their audience, and drive results. Whether it's building a website, optimizing a marketing campaign, 
                or designing a seamless user journey, I love bringing ideas to life!
                </p>
                <div >
                    <h5 className="text-2xl font-bold ">SKILLS</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
                        <div className="flex flex-wrap gap-2">
                            {digitalmarketingSkills.map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                
                                                              hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                     {tech}
                                 </span>
                            ))}
                        </div>
                    </div>
                   
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">UI UX Design</h3>
                        <div className="flex flex-wrap gap-2">
                            {uiuxSkills.map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                
                                                              hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                     {tech}
                                 </span>
                            ))}
                        </div>
                    </div> 
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Simple Website Devlopment</h3>
                        <div className="flex flex-wrap gap-2">
                            {webdevSkills.map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                
                                                              hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                     {tech}
                                 </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 trassition-all">
                  <h3 className="text-xl font-bold mb-4">📚Education</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>...to be continued-x University(2025-2029)</strong>
                    </li>
                    <li>
                        Relevant coursework: Digital marketing- Elearning & Earning.com
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 trassition-all">
                  <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">
                        Digital Marketer (4 Years Experience)
                        </h4>
                        <p>SEO | Paid Ads | Social Media Marketing | Helping Brands Scale</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">
                        UI/UX Designer (2 Years Experience) 
                        </h4>
                        <p>User-Centered Design | Wireframing | Prototyping | Usability Testing</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">
                        Web Developer (3 Years Experience) 
                        </h4>
                        <p>React.js | JavaScript | Tailwind CSS | Building Portfolio & Blog Websites</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}