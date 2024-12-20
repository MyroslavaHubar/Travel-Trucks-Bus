import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { allTrucksReducer } from "./allTrucks/slice";
import { filterTruckReducer } from "./filterTrucks/slice";
import storage from "redux-persist/lib/storage";

const filtersPersistConfig = {
  key: "filterTrucks",
  storage,
};

const persistConfig = {
  key: "allTrucks",
  storage,
  whitelist: ["allTransport"],
};

export const store = configureStore({
  reducer: {
    allTrucks: persistReducer(persistConfig, allTrucksReducer),
    filterTrucks: persistReducer(filtersPersistConfig, filterTruckReducer),
  },
});

export const persistor = persistStore(store);
