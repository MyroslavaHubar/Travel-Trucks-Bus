import { createSelector } from "@reduxjs/toolkit";
import { selectAllTrucks } from "../allTrucks/selectors";

export const selectFilters = (state) => state.filterTrucks;
export const selectLocationFilter = (state) => state.filterTrucks.location;
export const selectFormFilter = (state) => state.filterTrucks.form;
export const selectFeaturesFilter = (state) => state.filterTrucks.features;

export const selectFilterTrucks = createSelector(
  [
    selectAllTrucks,
    selectLocationFilter,
    selectFormFilter,
    selectFeaturesFilter,
  ],
  (trucks, locationFilter, formFilter, featuresFilter) => {
    return trucks.filter((truck) => {
      const matchesLocation = truck.location
        .toLowerCase()
        .includes(locationFilter.toLowerCase());
      const matchesForm = formFilter ? truck.form === formFilter : true;
      const matchesFeatures = featuresFilter.every((feature) => {
        if (feature === "automatic") {
          return truck["transmission"] === "automatic";
        }
        return truck[feature] === true;
      });
      return matchesLocation && matchesForm && matchesFeatures;
    });
  }
);
