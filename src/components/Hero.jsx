import { hero1, hero6, heropattern } from "../assets/images"

const Hero = () => {
    return (
        <section
            id="about"
            className="w-full flex flex-row gap-0 min-h-[500px]"
        >
            <div className=" basis-52 bg-violet-800 flex flex-col flex-1 justify-center px-8">
                <h1 className="text-extrabold text-5xl text-[#ECFF33]">Fullstack <br /> Developer.</h1>
                <p className="text-xl text-white mt-10">I create impressive fully functional websites, with the human user in mind</p>
            </div>
            <div className="relative flex-1 flex justify-center items-center bg-[#ECFF33]">
                <div>
                </div>
            </div>
        </section>
    )
}

export default Hero