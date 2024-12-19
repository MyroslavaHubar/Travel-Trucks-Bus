import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/server";
import { selectFilters } from "./selectors";

export const fetchFilteredTrucks = createAsyncThunk(
  "trucks/fetchFilteredTrucks",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const filters = selectFilters(state);

    try {
      const { data } = await instance.get("/trucks", {
        params: {
          location: filters.location,
          form: filters.form,
          features: filters.features.join(","),
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
