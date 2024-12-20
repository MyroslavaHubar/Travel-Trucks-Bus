import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  location: "",
  form: "",
  features: [],
};

export const filterTrucksSlice = createSlice({
  name: "filterTrucks",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.form = action.payload.form;
      state.location = action.payload.location;
      state.features = action.payload.features;
    },
  },
});

export const filterTruckReducer = filterTrucksSlice.reducer;
export const { changeFilter } = filterTrucksSlice.reducer;
