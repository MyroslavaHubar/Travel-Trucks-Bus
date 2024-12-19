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
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    toggleFeature(state, action) {
      const feature = action.payload;
      if (state.features.includes(feature)) {
        state.features = state.features.filter((f) => f !== feature);
      } else {
        state.features.push(feature);
      }
    },
    resetFilters(state) {
      state.location = "";
      state.form = "";
      state.features = [];
    },
  },
});

export const { setLocation, setForm, toggleFeature, resetFilters } =
  filterTrucksSlice.actions;

export const filterTruckReducer = filterTrucksSlice.reducer;
