import axios from "axios";
import { getAllPlacesResponse } from "../../types/places.types";
import { loadPlacesActionCreator } from "../reducers/features/placesSlice/placesSlice";
import { AppDispatch } from "../store/store";

const baseUrl = process.env.REACT_APP_API_URL;

export const loadPlacesThunk =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { places },
      } = await axios.get<getAllPlacesResponse>(`${baseUrl}hosts/places`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(loadPlacesActionCreator(places));
    } catch (error: any) {
      return error.message;
    }
  };
