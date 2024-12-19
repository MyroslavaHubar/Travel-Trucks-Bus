import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/server";
import { selectFilters } from "../filterTrucks/selectors";

export const fetchAllTrucks = createAsyncThunk(
  "trucks/fetchAllTrucks",
  async (__, thunkApi) => {
    try {
      const { data } = await instance.get("/trucks");
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTruckById = createAsyncThunk(
  "trucks/truckById",
  async (truckId, thunkApi) => {
    try {
      const { data } = await instance.get(`/trucks/${truckId}`);
      console.log("dataId: ", data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

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
