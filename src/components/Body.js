import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

const Body = ({filteredData}) => {

    if(!filteredData){
        return (
            <Shimmer/>
        )
    }

    return filteredData?.length === 0 ? ( <Shimmer/>
    ) : (
        <div className="flex flex-wrap w-5/6 justify-center items-center m-auto">
            {
                filteredData?.map((news, index) => {
                    return (
                        <NewsCard key={index} {...news}/>
                    )
                })
            }
        </div>
    );
}

export default Body;