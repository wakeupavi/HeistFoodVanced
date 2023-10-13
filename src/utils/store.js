import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./Slices/cartSlice";
import AllRestaurantSlics from "./Slices/AllRestaurantSlics";
import RecentSearchSlice from "./Slices/RecentSearchSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        allRest:AllRestaurantSlics,
        allRecentSearch:RecentSearchSlice

    }

})

export default store;