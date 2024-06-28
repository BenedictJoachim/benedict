import { backgroundImage1 } from "../assets/images"
import { motion } from "framer-motion";

const Background = () => {
    return (
        <motion.section 
            id="background" 
            className="px-4 py-20 lg:p-20 flex flex-col gap-10 lg:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="sm:basis-1/2">
                <h2 className="text-4xl font-bold text-white">Here is my Story...</h2>
                <p className="mt-3 text-sm text-white">I am a passionate full-stack web developer who has honed my skills through formal online courses and practical project experiences. My journey began with foundational courses in HTML, CSS, and JavaScript, where I built a solid understanding of front-end development.</p>
                <p className="mt-3 text-sm text-white">Expanding my toolkit, I delved into frameworks like React, utilizing its power to create dynamic and responsive user interfaces.</p>
                <p className="mt-3 text-sm text-white">With a keen eye for design, I've integrated frameworks such as Tailwind CSS, Bootstrap, and MaterialUI into my projects, mastering the art of crafting visually appealing and functional web applications. From creating a striking Nike landing page to designing intuitive admin dashboards, each project has been an opportunity to apply my knowledge and refine my skills.</p>
                <p className="mt-3 text-sm text-white">Venturing into full-stack development, I developed a game discovery app that combines my front-end prowess with back-end technologies to deliver seamless user experiences. Additionally, I've built a developer portfolio that showcases my projects and growth as a developer.</p>
                <p className="mt-3 text-sm text-white">Looking ahead, I am eager to continue expanding my expertise, tackling new challenges, and contributing to innovative web solutions that make a positive impact.</p>
            </div>
            <div className="flex justify-center items-center">
                <img 
                    src={backgroundImage1} 
                    alt="developer"
                 />
            </div>
        </motion.section>
    )
}

export default Background