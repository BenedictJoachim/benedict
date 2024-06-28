import { motion } from "framer-motion"

const ContactMe = () => {
    return (
        <motion.section 
            id="contact"
            className=""
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.25 }}
            transition={{ duration: 3 }}
        >
            <div className="mx-auto py-12 px-6">
             <div className="max-w-lg mx-auto">
                 <h2 className="text-2xl font-bold mb-1 text-violet-800">Send me a message</h2>
                 <p className="mb-6">Do you have a question, proposal, or just want to say hello? Go on shoot!</p>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                placeholder="Enter your email address"
                                className="w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                placeholder="Hi there, I'm impressed with your portfolio and skills as a front-end developer. I'm interested in discussing a potential project collaboration. Let's connect!"
                                rows="4" 
                                className="w-full px-3 py-2 border-b border-b-gray-300 shadow-sm focus:outline-none" 
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-violet-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Shoot</button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>
    )
}

export default ContactMe