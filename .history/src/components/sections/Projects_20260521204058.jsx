import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Profile Optimization",
      description:
        "Enhancing brand presence through strategic social media profile optimization. Optimized bios, keywords, visuals, and content strategies to boost engagement and visibility.",
      tech: [
        "Profile & Bio Optimization",
        "Keyword & Hashtag Strategy",
        "Audience Targeting & Engagement",
      ],
      media: [
        { type: "image", src: "/portfolio/images/check4.png" },
        { type: "image", src: "/portfolio/images/check2.png" },
      ],
    },
    {
      title: "SEO",
      description:
        "Boosting online visibility with result-driven SEO strategies. Optimized website structure, content, and backlinks to improve search rankings and organic traffic.",
      tech: [
        "On-Page & Off-Page SEO",
        "Keyword Research & Optimization",
        "Technical SEO & Site Audits",
      ],
      media: [
        { type: "image", src: "/portfolio/images/working.png" },
        { type: "image", src: "/portfolio/images/working.png" },
      ],
    },
    {
      title: "Email Marketing",
      description:
        "Driving engagement and conversions through targeted email marketing campaigns. Optimized email sequences, automation, and personalized content to maximize open rates and ROI.",
      tech: [
        "Email Campaign Strategy",
        "Automation & Drip Sequences",
        " A/B Testing & Optimization",
        "Audience Segmentation & Personalization",
      ],
      media: [
        { type: "image", src: "/portfolio/images/working.png" },
        { type: "image", src: "/portfolio/images/working.png" },
      ],
    },
    {
      title: "Paid Ads (Facebook)",
      description:
        "Maximizing ROI with high-converting Facebook ad campaigns. Implemented targeted ad strategies, audience segmentation, and A/B testing to drive sales and engagement.",
      tech: [
        "Campaign Strategy & Optimization",
        "Audience Targeting & Retargeting",
        " A/B Testing & Performance Analysis ",
        "Audience Segmentation & Personalization",
      ],
      media: [
        { type: "image", src: "/portfolio/images/working.png" },
        { type: "image", src: "/portfolio/images/working.png" },
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and user-friendly digital experiences with a user-centered design approach. Focused on usability, accessibility, and seamless interactions to enhance engagement.",
      tech: [
        "User Research & Wireframing",
        "Prototyping & Usability Testing",
        "UI Design & Interaction Design",
        "Figma, Adobe XD, and Design System",
      ],
      media: [{ type: "video", src: "/portfolio/videos/video1.mp4" },{ type: "video", src: "/portfolio/videos/video2.mp4" }],
    },
    {
      title: "Building Portfolio Websites",
      description:
        "Designing and developing sleek, responsive portfolio websites to showcase personal brands and professional work. Focused on clean UI, fast performance, and seamless user experience",
      tech: [
        "React.js & JavaScript",
        " Tailwind CSS for Styling",
        " Responsive & Mobile-First Design",
        "SEO & Performance Optimization",
      ],
      media: [{ type: "image", src: "/portfolio/images/portfolioss.png" }],
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl border border-white/10 bg-black/80 hover:border-blue-500/30 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    View Project →
                  </button>
                </div>

                {/* Image and Video Slider Pop-up with Animation */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/80 p-4 rounded-xl"
                    >
                      <Swiper
                        navigation
                        modules={[Navigation]}
                        className="mySwiper"
                        spaceBetween={10}
                        slidesPerView={1}
                      >
                        {project.media.map((item, i) => (
                          <SwiperSlide key={i}>
                            {item.type === "image" ? (
                              <img
                                src={item.src}
                                alt={`Media ${i}`}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                              />
                            ) : (
                              <video
                                controls
                                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                                src={item.src}
                              />
                            )}
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      {/* Close Button */}
                      <button
                        className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
                        onClick={() => setActiveIndex(null)}
                      >
                        ✖
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
