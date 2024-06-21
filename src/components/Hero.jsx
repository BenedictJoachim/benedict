const Hero = () => {
    return (
        <section
            id="about"
            className="w-full flex flex-row gap-0 min-h-[500px]"
        >
            <div className="bg-violet-800 flex flex-col flex-1 w-[700px] justify-center py-[10px]">
                <h1 className="text-bold text-7xl text-[#ECFF33] text-decoration-thickness-[18px]">Fullstack <br /> Developer.</h1>
                <p className="text-xl text-white mt-10">I create impressive fully functional websites, with the human user in mind</p>
            </div>
            <div className="bg-[#74FF33] flex-1 w-[450px] justify-center items-center">
                <div>Picture</div>
            </div>
        </section>
    )
}

export default Hero