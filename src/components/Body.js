import RestroCard from "./RestroCard"
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer"; 
import {Link} from "react-router-dom"
 

const Body = () => {

  //Local State variable
  const [listOfRestro , setListOfRestro] = useState([]);
  const [filteredRestro , setFilteredRestro] =useState([]);

  const [searchText , setSearchText] = useState([])

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async() => {
    const data = await fetch ("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()

   setListOfRestro(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
   setFilteredRestro(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }

  //Conditional Rendering - Rendering on the basis of condition is known as conditonal rendering.

/*  if (listOfRestro.length === 0){
    return <Shimmer/>
  }
*/


// Ternary Operator 
    return listOfRestro.length===0?<Shimmer/> : (
        <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }}/>
            <button onClick={() => {
              //Filter the restro card and update the ui
              //SearchText
              
             const filteredRestro =  listOfRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

             setFilteredRestro(filteredRestro)

            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={() => {
              const filteredList = listOfRestro.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestro  (filteredList)}}>Top Rated Button</button>
        </div>
        <div className="restro-container">
          {
            filteredRestro.map(restaurant => 
              <Link key={restaurant.info.id} to = {"/restro/"+restaurant.info.id}><RestroCard  resData={restaurant}/></Link>
          )}
        </div> 
    </div>
    )
}

export default Body; 