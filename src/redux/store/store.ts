import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "../reducers/features/placesSlice/placeSlice";
import placesReducer from "../reducers/features/placesSlice/placesSlice";
import uiReducer from "../reducers/features/uiSlice/uiSlice";
import userReducer from "../reducers/features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    places: placesReducer,
    place: placeReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
