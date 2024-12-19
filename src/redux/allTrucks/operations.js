import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/server";

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
