import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterPlace } from "../../../../types/places.types";

const initialState: IRegisterPlace[] = [];

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    loadPlaces: (places, action: PayloadAction<IRegisterPlace[]>) => [
      ...action.payload,
    ],
    addPlace: (places, action: PayloadAction<IRegisterPlace>) => [
      ...places,
      action.payload,
    ],
  },
});

export const {
  loadPlaces: loadPlacesActionCreator,
  addPlace: addPlaceActionCreator,
} = placesSlice.actions;

export default placesSlice.reducer;
