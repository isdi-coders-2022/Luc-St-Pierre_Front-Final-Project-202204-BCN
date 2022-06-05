import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "../reducers/features/placesSlice/placesSlice";
import userReducer from "../reducers/features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    places: placesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
