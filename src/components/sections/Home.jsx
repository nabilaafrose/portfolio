import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-8 md:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
                
                {/*text */}
                <RevealOnScroll>
                    <div className="md:w-2/3 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold mt-16 mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                            Hi, I am Nabila Afrose Choity
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg">
                       Digital Marketing Specialist | UI/UX Designer | Website Designer.<br></br>

                         I craft engaging experiences through smart marketing
                          and intuitive design
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                View Projects
                            </a>
                            <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                                Contact me
                            </a>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* image */}
                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <img 
                        src="/images/mee.png"
                        alt="Nabila Afrose Choity"
                        className="w-64 md:w-80 rounded-xl shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
