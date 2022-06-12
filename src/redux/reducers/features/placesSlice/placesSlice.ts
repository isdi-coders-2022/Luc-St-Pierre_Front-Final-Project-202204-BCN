import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlace, IStatePlaces } from "../../../../types/places.types";

const initialState: IStatePlaces = {
  places: [],
  pages: 0,
  currentPage: 1,
  perPageCount: 8,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    loadPlaces: (places, action: PayloadAction<IPlace[]>): IStatePlaces => ({
      ...places,
      places: [...action.payload],
    }),
    addPlace: (places, action: PayloadAction<IPlace>): IStatePlaces => ({
      ...places,
      places: [...places.places, action.payload],
    }),
    deletePlace: (places, action: PayloadAction<string>): IStatePlaces => ({
      ...places,
      places: places.places.filter((place) => place.id !== action.payload),
    }),
    updatePlace: (places, action: PayloadAction<IPlace>): IStatePlaces => ({
      ...places,
      places: places.places.map((place) =>
        place.id === action.payload.id ? { ...action.payload } : { ...place }
      ),
    }),
  },
});

export const {
  loadPlaces: loadPlacesActionCreator,
  addPlace: addPlaceActionCreator,
  deletePlace: deletePlaceActionCreator,
  updatePlace: updatePlaceActionCreator,
} = placesSlice.actions;

export default placesSlice.reducer;
