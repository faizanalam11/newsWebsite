import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";

const Navbar = () => {
    return (
        <div className="flex justify-around items-center bg-cyan-600 p-2">
            <h1 className="text-lg font-bold text-neutral-700">News Maniac</h1>
            <ul className="flex text-gray-200 gap-4">
                {
                    navLinks.map(({id, title, link}) => (
                        <li className="p-1 md:m-1 m-0 tracking-wide cursor-pointer text-lg" key={id}>
                            {title}
                        </li>
                    ))
                }
            </ul>
            <div className="flex focus:border-cyan-600">
                <input type="text" placeholder="Search" className="p-1 rounded-l-md"/>
                <button className="bg-white rounded-r-md p-1"><BiSearch/></button>
            </div>
        </div>
    )
}

export default Navbar;