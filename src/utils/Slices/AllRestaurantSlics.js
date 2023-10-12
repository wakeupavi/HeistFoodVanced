import { createSlice } from "@reduxjs/toolkit";
import {restaurants} from "../../../config"

const AllRestaurantSlice=createSlice({
    name:"AllRestaurant",
    initialState:{
        AllRestItems:[restaurants]
    },
    reducers:{
        addRestaurants:(state,action)=>{
            state.AllRestItems.push(action.payload);
        }
    }

})

export const {addRestaurants}=AllRestaurantSlice.actions;
export default AllRestaurantSlice.reducer