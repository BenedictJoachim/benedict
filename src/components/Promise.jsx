import { motion } from "framer-motion";

const Promise = () => {
    return (
        <motion.section
            id="promise" 
            className="mx-5 my-[150px] p-3 flex flex-col lg:flex-row gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div>
                <h2 className="text-[#5800E3] text-4xl font-bold ">Design</h2>
                <p className="mt-3 text-sm">I love to design solutions, the entire process of designing layouts, presentations and User Experinces is simply my passion.</p>
            </div>
            <div>
                <h2 className="text-[#5800e3] text-4xl font-bold">Engineering</h2>
                <p className="mt-3 text-sm">Using all the current and previous Javascript tools I find it an absolute thrill to implement performant and scalable applications.</p>
            </div>
        </motion.section>
    )
}

export default Promise