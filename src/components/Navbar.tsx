import { useState } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import RandomButton from "./RandomButton";

const Navbar = () => {
    const [showMobile, setShowMobile] = useState<boolean>(false);

    const linkClass: string = "flex-1 p-4 cursor-pointer transition-all duration-300 hover:scale-90 2xl:text-lg";
    const mobileLinkClass: string = "block flex items-center gap-2 w-full text-center px-5 py-4 text-base font-medium transition-all duration-300 text-white hover:scale-90 hover:rounded-lg";
    const mobileOverlayClass: string = "fixed bg-black/50 min-h-screen z-9 w-screen flex justify-center items-center top-0";
    const mobileMenuClass: string = "fixed bg-primary rounded-l-xl overflow-y-hidden z-10 top-0 w-3/4 min-h-screen flex flex-col pt-18 transition-all duration-350 ease-in";

    return (
        <header>
            <nav className="mx-auto flex w-9/10 justify-between py-6 md:max-w-4xl md:py-10 2xl:max-w-5xl"> 
                <NavLink to="/" className="my-auto text-lg font-semibold text-accent-dark transition-all duration-300 hover:scale-90 sm:text-xl md:text-2xl 2xl:text-3xl">App | Dictionary</NavLink> 

                {/* toggle btn for mobile navbar */}
                <button onClick={() => setShowMobile((prevState => !prevState))} className="md:hidden cursor-pointer z-20 text-accent-dark transition-all duration-300 hover:scale-80">
                    {showMobile ? <FaTimes className="text-2xl"/> : <IoMdMenu className="text-2xl"/>}
                </button>

                {/* normal navbar (hidden for mobile) */}
                <div className="hidden w-2/5 text-center font-semibold text-white md:flex md:w-1/2">
                    <NavLink to="/" className={`${linkClass} rounded-l-3xl bg-primary-dark`}>Dictionary</NavLink>
                    <NavLink to="/games" className={`${linkClass} bg-accent-light`}>Games</NavLink>
                    <NavLink to="/study" className={`${linkClass} rounded-r-3xl bg-accent`}>Study Tools</NavLink>
                </div>

                {/* mobile navbar (hidden offscreen if inactive) */}
                {showMobile ? (
                    <div onClick={() => setShowMobile(false)} className={`${mobileOverlayClass} left-0 md:hidden`}>
                        <div className={`${mobileMenuClass} right-0`}>
                            <NavLink to="/" className={`${mobileLinkClass} bg-primary-dark`}><FaSearch/>Dictionary</NavLink>
                            <RandomButton/>
                            <NavLink to="/games" className={`${mobileLinkClass} bg-accent-light`}><IoGameController/>Games</NavLink>
                            <NavLink to="/study" className={`${mobileLinkClass} bg-accent`}><ImBooks/>Study Tools</NavLink>
                        </div>
                    </div>
                ) : (
                    <div className={`${mobileOverlayClass} -right-full md:hidden`}>
                        <div className={`${mobileMenuClass} -right-full items-center`}>
                            <NavLink to="/" className={`${mobileLinkClass} bg-primary-dark`}><FaSearch/>Dictionary</NavLink>
                            <RandomButton/>
                            <NavLink to="/games" className={`${mobileLinkClass} bg-accent-light`}><IoGameController/>Games</NavLink>
                            <NavLink to="/study" className={`${mobileLinkClass} bg-accent`}><ImBooks/>Study Tools</NavLink>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar