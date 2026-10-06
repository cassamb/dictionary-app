import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav className="mx-auto flex w-9/10 justify-between py-5 md:max-w-4xl md:py-7"> 
                <NavLink to="/" className="text-lg font-semibold text-[#4c1f20] transition-all duration-300 hover:scale-90 md:pt-1 md:text-2xl">App | Dictionary</NavLink> 
                <div className="hidden w-2/5 text-center font-semibold text-white md:flex md:w-1/2 md:text-md">
                    <NavLink to="/" className="flex-1 rounded-l-3xl bg-[#4d3432] p-4 cursor-pointer transition-all duration-300 hover:scale-90">Dictionary</NavLink>
                    <NavLink to="/games" className="flex-1 bg-[#db948f] p-4 cursor-pointer transition-all duration-300 hover:scale-90">Games</NavLink>
                    <NavLink to="/study" className="flex-1 rounded-r-3xl bg-[#874d49] p-4 cursor-pointer transition-all duration-300 hover:scale-90">Study Tools</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar