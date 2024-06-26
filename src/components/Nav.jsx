import { hamburger } from "../assets/icons"
import HamburgerMenu from "./HamburgerMenu";
const Nav = () => {
    return (
        <nav className="px-5 py-5 flex justify-between items-center bg-transparent fixed top-0 left-0 right-0 z-10">
            <div>
                <h3 className="font-bold font-2xl text-[#ECFF33]">benedict</h3>
            </div>
            <HamburgerMenu />
        </nav>
    )
}

export default Nav