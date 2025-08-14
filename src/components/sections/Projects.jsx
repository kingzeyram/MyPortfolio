import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                >Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*first project  */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                        <h3 className="text-xl font-bold mb-2">Nextjs Blog</h3>
                        <p className="text-gray-400 mb-4">This  Next.js blog is a fast, SEO-friendly web application built using the Next.js framework. It supports server-side rendering (SSR), static site generation (SSG), and dynamic routing—making it ideal for blogs that require high performance and easy content updates. With features like Markdown support, API integration, and automatic code splitting, a Next.js blog offers a modern, scalable way to share articles and content online.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Next.js", "Postgres"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://nextjs-blog-1mhin0kgm-ramseys-projects-014b0eb5.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    {/* second project */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                        <h3 className="text-xl font-bold mb-2">Allware Application</h3>
                        <p className="text-gray-400 mb-4">Allware is a full-featured sales management system designed to streamline the interaction between customers and sales agents for purchasing hardware and software products. The application allows users to browse products, place orders, track sales, and manage customer profiles efficiently. Admin users can oversee transactions, manage inventory, and generate reports, making the system suitable for both small and mid-sized tech vendors.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Kotlin", "Python", "Mysql"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    {/* Third project */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                        <h3 className="text-xl font-bold mb-2">innovation week app</h3>
                        <p className="text-gray-400 mb-4">Innovation Week & Industry Summit 2025 Web App
                            A modern, responsive event platform built with React and Tailwind CSS featuring an immersive background image carousel, structured event details, and speaker highlights. Designed for KCA University’s 4th Innovation Week & Industry Summit, the app provides attendees with key schedules, venue information, and program details while showcasing a sleek, user-friendly interface optimized for all devices.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["nextjs", "typescript", "react", "vercel"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://innovationweekapp.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                    {/* Fourth project */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                        <h3 className="text-xl font-bold mb-2">Fashionova Web</h3>
                        <p className="text-gray-400 mb-4">Our fashion store offers stylish, affordable, and high-quality clothing for all occasions. We specialize in trendy designs inspired by the latest fashion trends, ensuring our customers always look and feel their best. With a wide selection of apparel, footwear, and accessories, we cater to diverse styles and preferences, providing an enjoyable shopping experience both in-store and online</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Html", "Css", "js", "aos", "vercel"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://fashionova-web.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}