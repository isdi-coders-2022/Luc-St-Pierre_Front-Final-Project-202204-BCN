import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "../reducers/features/placesSlice/placeSlice";
import placesReducer from "../reducers/features/placesSlice/placesSlice";
import userReducer from "../reducers/features/userSlice/userSlice";
import paginationReducer from "../reducers/features/paginationSlice/paginationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    places: placesReducer,
    place: placeReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
