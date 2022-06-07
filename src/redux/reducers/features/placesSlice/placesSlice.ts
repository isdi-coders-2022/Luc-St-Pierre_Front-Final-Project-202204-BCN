import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../../../types/places.types";

// interface IinitialState {
//   allPlaces: IPlace[];
// }

const initialState: IPlace[] = [];

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    loadPlaces: (places, action: PayloadAction<IPlace[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadPlaces: loadPlacesActionCreator } = placesSlice.actions;

export default placesSlice.reducer;
