import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
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

    updatePlace: (places, action: PayloadAction<IPlace>) =>
      places.map((place) =>
        place.id === action.payload.id ? { ...action.payload } : { ...place }
      ),
  },
});

export const {
  loadPlaces: loadPlacesActionCreator,
  addPlace: addPlaceActionCreator,
  deletePlace: deletePlaceActionCreator,
  updatePlace: updatePlaceActionCreator,
} = placesSlice.actions;

export default placesSlice.reducer;
