import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../../../types/places.types";

const initialState: IPlace = {
  title: "",
  description: "",
  image: [],
  imageBackup: "",
  address: "",
  city: "",
  creator: "",
  placeType: "",
  placeDescription: "",
  price: "",
  numberOfRooms: "",
  numberOfBeds: "",
  numberOfGuests: "",
  country: "",
  rating: "",
  kilometers: "",
  category: "",
  location: { type: "Point", coordinates: [] },
};

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    loadPlace: (place, action: PayloadAction<IPlace>) => ({
      ...action.payload,
    }),
  },
});

export const { loadPlace: loadPlaceActionCreator } = placeSlice.actions;

export default placeSlice.reducer;
