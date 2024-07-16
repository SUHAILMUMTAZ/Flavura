import Restocard from "./Restocard";
import { useEffect, useState } from "react";
 import Shimmer from "./shimmer.js";
    const Body= () =>{
        const [listofrestaurants,setlistofrestaurants]=useState([]);
        const [filteredrestaurants,setfilteredrestaurants]=useState([]);
        const[searchtext,Setsearchtext]=useState("");
        useEffect(()=>{
            fetchData();
        },[]);
 const fetchData =async ()=>{
    const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json =await data.json();
   
     setlistofrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
     setfilteredrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    {if (listofrestaurants.length === 0)
        return <Shimmer/>;
       }
    
 
      return(
          <div className="body">
              <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchtext} onChange={(e)=>{
                        Setsearchtext(e.target.value);
                    }}/>
                    <button
                    onClick={()=>{
                        console.log(searchtext);
                    const  filteredrestaurants=listofrestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                        setfilteredrestaurants(filteredrestaurants);
                    }}

                    >search</button> 
                </div>
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
              {filteredrestaurants.map((restaurants)=>(
                  <Restocard key={restaurants.info.id} resdata={restaurants}/>
              ))}
              </div>
          </div>
      );
  };
 export default Body;