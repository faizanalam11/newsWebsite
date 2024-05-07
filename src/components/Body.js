import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

const Body = ({data, filteredData}) => {

    if(!data){
        return (
            <Shimmer/>
        )
    }

    return data?.length === 0 ? ( <Shimmer/>
    ) : (
        <div className="flex flex-wrap w-5/6 justify-center items-center m-auto">
            {
                filteredData?.map((news) => {
                    return (
                        <NewsCard {...news}/>
                    )
                })
            }
        </div>
    );
}

export default Body;