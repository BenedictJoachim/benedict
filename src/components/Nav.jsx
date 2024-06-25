import { hamburger } from "../assets/icons"

const Nav = () => {
    return (
        <nav className="px-5 py-5 flex justify-between bg-transparent fixed top-0 left-0 right-0 z-10">
            <div>
                <h3 className="font-bold font-2xl text-[#ECFF33]">benedict</h3>
            </div>
            <div>
                <img 
                    src={hamburger} 
                    alt="menu"
                    width={23}
                    height={23}
                    className="stroke-current text-[#ECFF33]"
                />
            </div>
        </nav>
    )
}

export default Nav