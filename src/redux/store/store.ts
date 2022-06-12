import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "../reducers/features/placesSlice/placeSlice";
import placesReducer from "../reducers/features/placesSlice/placesSlice";
import userReducer from "../../redux/reducers/features/userSlice/userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    places: placesReducer,
    place: placeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
