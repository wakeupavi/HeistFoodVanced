import { createSlice } from "@reduxjs/toolkit";

const RecentSearchSlice = createSlice({
  name: "RecentSearch",
  initialState: {
    RecentSearch: [],
  },
  reducers: {
    addIntoRecentSearch: (state, action) => {
      //   state.AllRestItems = state.AllRestItems.concat(action.payload);
      state.RecentSearch = action.payload;
    },
  },
});

export const { addIntoRecentSearch } = RecentSearchSlice.actions;
export default RecentSearchSlice.reducer;
