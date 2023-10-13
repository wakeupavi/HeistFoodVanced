import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./Slices/cartSlice";
import AllRestaurantSlics from "./Slices/AllRestaurantSlics";
import RecentSearchSlice from "./Slices/RecentSearchSlice";
import ShowModal from "./Slices/ShowModal";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        allRest:AllRestaurantSlics,
        allRecentSearch:RecentSearchSlice,
        modal:ShowModal,

    }

})

export default store;