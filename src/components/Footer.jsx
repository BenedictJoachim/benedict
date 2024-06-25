const Footer = () => {
    return (
        <section className="py-10 px-10 flex-col gap-2">
            <div className="flex flex-col sm:flex-row justify-between gap-8 py-10 px-10 border-b-2 border-[#ECFF33]">
            <div>
                <h3 className="font-semibold uppercase text-[#FEECEB]">Holla @ me</h3>
                <ul className="text-[#ECFF33]">
                    <li className="mt-3">benedictorng'wandu@gmail.com</li>
                    <li className="mt-3 cursor-pointer">https://wa.me/+255759908891</li>
                </ul>
            </div>
            <div>
                <ul className="text-[#ECFF33]">
                    <li className="mt-3">My work</li>
                    <li className="mt-3">My archives</li>
                    <li className="mt-3">My Resume</li>
                </ul>
            </div>
            </div>
            <div>
                <p className="text-[#ECFF33] mt-5">©Benedict Ng'wandu 2024</p>
            </div>
        </section>
    )
}

export default Footer