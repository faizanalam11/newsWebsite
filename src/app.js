import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useState, useEffect } from "react";
import { url } from "./utils/constants";
import { apiKey } from "./utils/constants";
import Footer from "./components/Footer";

const AppLayout = () => {
    const [ data, setData ] = useState(null);
    const [ filteredData, setFilteredData ] = useState(null);
    const [ query, setQuery ] = useState("latest");

    useEffect(() => {
        getNewsData(`${query}`);
    },[query]);

    async function getNewsData(query) {
        try{
            const newsData = await fetch(`${url}${query}&apiKey=${apiKey}`);
            const jsonNews = await newsData.json();
            console.log(jsonNews);
            setData(jsonNews?.articles);
            setFilteredData(jsonNews?.articles);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <Navbar setQuery={setQuery}/>
            <Body data={data} filteredData={filteredData}/>
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);