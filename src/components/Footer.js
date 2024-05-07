import { Link } from "react-router-dom";
import { linkedIn_URL } from "../utils/constants"

const Footer = () => {
    return (<div className="text-white bg-cyan-600 flex justify-center shadow-lg"><h4>Created by 💌  
                <a href={linkedIn_URL} className="text-[#93c5fd] hover:text-[#62a8f8] font-bold"> Faizan Alam</a> ©️ 2024</h4>
            </div>
    );
}

export default Footer;