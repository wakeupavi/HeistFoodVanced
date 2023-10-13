import { createSlice } from "@reduxjs/toolkit";

const ShowModal=createSlice({
    name:"ShowModal",
    initialState:{
        showModal:false
    },
    reducers: {
        setModal: (state, action) => {
            state.showModal=action.payload;
        
        }
      }
      

})

export const {setModal}=ShowModal.actions;
export default ShowModal.reducer