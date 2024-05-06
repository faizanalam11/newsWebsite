import { useEffect, useState } from "react";
import { url } from "../utils/constants";
import { apiKey } from "../utils/constants";
import Shimmer from "./Shimmer";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

const Body = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        getNewsData("IPL");
    },[]);

    async function getNewsData(query) {
        try{
            const newsData = await fetch(`${url}${query}&apiKey=${apiKey}`);
            const jsonNews = await newsData.json();
            console.log(jsonNews);
            setData(jsonNews?.articles);
        }
        catch(error){
            console.log(error);
        }
    }

    if(!data){
        return (
            <Shimmer/>
        )
    }

    return data?.length === 0 ? ( <Shimmer/>
    ) : (
        <div className="flex flex-wrap cursor-pointer w-5/6 justify-center items-center m-auto">
            {
                data?.map((news) => {
                    return (
                        <NewsCard {...news}/>
                    )
                })
            }
        </div>
    );
}

export default Body;