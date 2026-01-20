import { NavLink } from "react-router-dom";

/* TODO: Show that specific page is active in the logo by either passing the text in or by some other measure */

const Navbar = () => {
    
    return (
        <header>
            <nav className="mx-auto flex w-9/10 justify-between py-5 md:max-w-4xl md:py-7"> 
                <h3 className="text-lg font-semibold text-[#4c1f20] md:pt-1 md:text-2xl ">App | Dictionary</h3> 
                <div className="hidden w-2/5 text-center font-semibold text-white md:flex md:w-1/2 md:text-sm ">
                    <NavLink to="/" className="flex-1 rounded-l-3xl bg-[#4d3432] p-4 cursor-pointer hover:opacity-80">Dictionary</NavLink>
                    <NavLink to="/games" className="flex-1 bg-[#db948f] p-4 cursor-pointer hover:opacity-80">Games</NavLink>
                    <NavLink to="/study" className="flex-1 rounded-r-3xl bg-[#874d49] p-4 cursor-pointer hover:opacity-80">Study Tools</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar