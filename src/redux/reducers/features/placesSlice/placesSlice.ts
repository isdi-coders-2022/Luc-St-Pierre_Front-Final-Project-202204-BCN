import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../../../types/places.types";

interface IinitialState {
  allPlaces: IPlace[];
}

const initialState: IinitialState = {
  allPlaces: [],
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    loadPlaces: (places, action: PayloadAction<IPlace[]>): IinitialState => ({
      ...places,
      allPlaces: [...action.payload],
    }),
  },
});

export const { loadPlaces: loadPlacesActionCreator } = placesSlice.actions;

export default placesSlice.reducer;
