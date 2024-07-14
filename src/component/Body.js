import Restocard from "./Restocard";
import reslist from "../utils/mock";
import { useEffect, useState } from "react";
    const Body= () =>{
        const [listofrestaurants,setlistofrestaurants]=useState(reslist);
        useEffect(()=>{
            fetchData();
        },[]);
 const fetchData =async ()=>{
    const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json =await data.json();
    console.log( json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
     setlistofrestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
 }
      return(
          <div className="body">
              <div className="filter">
                <button
                className="filter-btn"
                onClick={()=>{
                    const filteredlist = listofrestaurants.filter(
                        (res)=>res.info.avgRating>4.4
                    );
                    setlistofrestaurants(filteredlist);
                }}
                >
                Top Rated Restaurants
                </button>
                </div>
              <div className="resto-container">
              {listofrestaurants.map((info)=>(
                  <Restocard key={info.id} resdata={info}/>
              ))}
              </div>
          </div>
      );
  };
 export default Body;