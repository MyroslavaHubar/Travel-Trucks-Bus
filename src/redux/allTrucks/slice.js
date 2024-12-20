import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTrucks, fetchTruckById } from "./operations";

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
  truckId: {
    name: "",
    price: 0,
    rating: 0,
    location: "",
    description: "",
    gallery: [],
    reviews: [],
  },
};

export const allTrucksSlice = createSlice({
  name: "allTrucks",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      .addCase(fetchAllTrucks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllTrucks.fulfilled, (state, action) => {
        console.log("API Response:", action.payload.items);
        state.isLoading = false;
        state.items = action.payload.items;
      })
      .addCase(fetchAllTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTruckById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTruckById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.truckId = action.payload;
      })
      .addCase(fetchTruckById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const allTrucksReducer = allTrucksSlice.reducer;
