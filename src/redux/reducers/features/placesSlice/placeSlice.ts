import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../../../types/places.types";

const initialState: IPlace = {
  title: "",
  description: "",
  image: "",
  address: "",
  city: "",
  placeType: "",
  placeDescription: "",
  price: 0,
  numberOfRooms: 0,
  numberOfBeds: 0,
  numberOfGuests: 0,
  creator: "",
  rating: 0,
  isListed: false,
  kilometers: 0,
  category: "",
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
