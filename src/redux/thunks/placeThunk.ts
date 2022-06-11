import axios from "axios";
import { loadPlaceActionCreator } from "../reducers/features/placesSlice/placeSlice";
import { AppDispatch } from "../store/store";

const baseUrl = process.env.REACT_APP_API_URL;

export const loadPlaceThunk =
  (placeId: any) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.post(`${baseUrl}places/${placeId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      dispatch(loadPlaceActionCreator(data));
    } catch (error: any) {
      return error.messsage;
    }
  };
