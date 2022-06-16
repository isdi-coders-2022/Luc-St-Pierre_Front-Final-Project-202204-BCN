import axios from "axios";
import { loadPlaceActionCreator } from "../reducers/features/placesSlice/placeSlice";
import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../reducers/features/uiSlice/uiSlice";
import { AppDispatch } from "../store/store";

const baseUrl = process.env.REACT_APP_API_URL;

export const loadPlaceThunk =
  (placeId: any) => async (dispatch: AppDispatch) => {
    dispatch(setLoadingOnActionCreator());
    try {
      const {
        data: { placeDetail },
      } = await axios.get(`${baseUrl}places/${placeId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      dispatch(setLoadingOffActionCreator());

      dispatch(loadPlaceActionCreator(placeDetail));
    } catch (error: any) {
      return error.messsage;
    } finally {
      dispatch(setLoadingOffActionCreator());
    }
  };
