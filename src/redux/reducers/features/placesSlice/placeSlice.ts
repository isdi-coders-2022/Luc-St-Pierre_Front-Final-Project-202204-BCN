import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterPlace } from "../../../../types/places.types";

const initialState: IRegisterPlace = {
  title: "",
  description: "",
  image: "",
  imageBackup: "",
  address: "",
  city: "",
  placeType: "",
  placeDescription: "",
  price: "",
  numberOfRooms: "",
  numberOfBeds: "",
  numberOfGuests: "",
  creator: "",
  rating: "",
  kilometers: "",
  category: "",
};

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    loadPlace: (place, action: PayloadAction<IRegisterPlace>) => ({
      ...action.payload,
    }),
  },
});

export const { loadPlace: loadPlaceActionCreator } = placeSlice.actions;

export default placeSlice.reducer;
