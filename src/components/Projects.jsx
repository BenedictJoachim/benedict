import { admindashboard, gamediscoveryhub, nikelandingpage } from "../assets/images";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.section 
            id="projects" 
            className="p-2 mt-5 projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
        <div className="content">
            <h2 className="text-[#5800e3] text-4xl font-bold ml-5">My Projects</h2>
            <div className="flex justify-around flex-wrap">
                <div className="w-72 m-5 bg-white p-5 rounded-lg shadow-2xl text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img src={admindashboard} alt="Project 1" />
                    <a href="https://react-admin-dashboard-psi-teal.vercel.app/ecommerce" className="mt-5 text-xl">Admin Dashboard</a>
                    <p className="mt-3 text-gray-400">A MaterialUI-components web application.</p>
                </div>
                <div className="w-72 m-5 bg-white p-5 rounded-lg shadow-2xl text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img src={gamediscoveryhub} alt="Project 2" />
                    <a href="https://game-discovery-hub-eight.vercel.app/" className="mt-5 text-xl">Game Hub</a>
                    <p className="mt-3 text-gray-400">A chackra game discovery app consuming the rawg.io API.</p>
                </div>
                <div className="w-72 m-5 bg-white p-5 rounded-lg shadow-2xl text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img src={nikelandingpage} alt="Project 3" />
                    <a href="https://nike-landing-page-2nyghbqiw-higheribs-projects.vercel.app/" className="mt-5 text-xl">Nike landing page</a>
                    <p className="mt-3 text-gray-400">A SPW built with tailwindcss.</p>
                </div>
            </div>
        </div>
    </motion.section>

    )
}

export default Projects