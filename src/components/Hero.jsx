import { profilePicture } from "../assets/images"
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section
            id="hero"
            className="w-full flex flex-col flex-wrap sm:flex-row gap-0 min-h-[500px] relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25 }}
            transition={{ duration: 3 }}
        >
            <div className=" basis-52 bg-violet-800 flex flex-col flex-1 justify-center pt-20 px-10">
                <h1 className="text-bold text-5xl text-[#ECFF33]">Fullstack <br /> Developer.</h1>
                <p className="text-xs sm:text-xl text-white m-10">I create impressive fully functional websites, with the human user in mind.</p>
            </div>
            <div className="flex-1 flex justify-center items-center sm:items-center bg-[#ECFF33] py-20">
                <div className="flex-none rounded-br-[40px] rounded-tl-[40px] -z-15 mt-2 sm:-ml-30 border-4 border-violet-800">
                <img 
                    src={profilePicture} 
                    alt="photo"
                    width={200}
                    height={90}
                    className="rounded-br-[40px] rounded-tl-[40px]"
                />
                </div>
            </div>
        </motion.section>
    )
}

export default Hero