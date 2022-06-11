import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../../../types/places.types";

const initialState: IPlace[] = [];

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    loadPlaces: (places, action: PayloadAction<IPlace[]>) => [
      ...action.payload,
    ],
    addPlace: (places, action: PayloadAction<IPlace>) => [
      ...places,
      action.payload,
    ],
    deletePlace: (places, action: PayloadAction<string>) =>
      places.filter((place) => place.id !== action.payload),
  },
});

export const {
  loadPlaces: loadPlacesActionCreator,
  addPlace: addPlaceActionCreator,
  deletePlace: deletePlaceActionCreator,
} = placesSlice.actions;

export default placesSlice.reducer;
