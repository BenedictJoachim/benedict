const Projects = () => {
    return (
        <section id="projects" className="p-2 mt-5 projects">
        <div className="content">
            <h2 className="text-[#5800e3] text-4xl font-bold ml-5">My Projects</h2>
            <div className="flex justify-around flex-wrap">
                <div className="w-72 m-5 bg-white p-5 rounded-lg shadow-2xl text-center">
                    <img src="https://placehold.co/400" alt="Project 1" />
                    <h3 className="mt-3">Admin Dashboard</h3>
                    <p className="mt-3 text-gray-400">A MaterialUI-components web application.</p>
                </div>
                <div className="w-72 m-5 bg-white p-5 rounded-lg shadow-2xl text-center">
                    <img src="https://placehold.co/400" alt="Project 2" />
                    <h3 className="mt-3">Game Hub</h3>
                    <p className="mt-3 text-gray-400">A chackra game discovery app consuming the rawg.io API.</p>
                </div>
                <div className="w-72 m-5 bg-white p-5 rounded-lg shadow-2xl text-center">
                    <img src="https://placehold.co/400" alt="Project 3" />
                    <h3 className="mt-3">Nike landing page</h3>
                    <p className="mt-3 text-gray-400">A SPW built with tailwindcss.</p>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Projects