import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";
import { filterNews } from "../utils/filterNews";
import { useState } from "react";

const Navbar = ({setQuery}) => {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="flex justify-around items-center bg-cyan-600 p-2 flex-col md:flex-row">
            <h1 className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-bold text-neutral-700 z-50">News Maniac</h1>
            <ul className="flex text-gray-300 font-semibold gap-4">
                {
                    navLinks.map(({id, title, link}) => (
                        <li className="p-1 md:m-1 m-0 tracking-wide cursor-pointer text-lg hover:text-white duration-300" key={id} onClick={() => {
                            setQuery(link);
                        }}>
                            {title}
                        </li>
                    ))
                }
            </ul>
            <div className="flex focus:border-cyan-600">
                <input type="text" placeholder="Search" className="p-1 rounded-l-md" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={(event) => {
                            if(event.key === 'Enter'){
                                if(searchText === ''){
                                    setQuery("latest");
                                }
                                else setQuery(searchText);
                            }
                        }}/>
                <button className="bg-white rounded-r-md p-1" onClick={() => {
                    setQuery(searchText)
                }}><BiSearch/></button>
            </div>
        </div>
    )
}

export default Navbar;