
// import { addRestaurants } from "./Slices/AllRestaurantSlics";
// import { useSelector } from "react-redux";


// let allRestaurant = useSelector((store) => store.allRest.AllRestItems);

 export function filteredRes(searchText, restaurant) {
    const filterRest = restaurant.filter((rest) => {
      return rest?.info?.name?.toLowerCase().includes(searchText?.toLowerCase());
    });
    return filterRest;
  }
  
