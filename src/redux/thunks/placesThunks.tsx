import axios from "axios";
import { getAllPlacesResponse } from "../../types/places.types";
import {
  addPlaceActionCreator,
  loadPlacesActionCreator,
} from "../reducers/features/placesSlice/placesSlice";
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

export const addPlaceThunk =
  (placeData: any) => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { newPlace },
      } = await axios.post(`${baseUrl}hosts/places`, placeData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      if (newPlace) {
        dispatch(addPlaceActionCreator(newPlace));
        dispatch(loadPlacesThunk(localStorage.token));
      }
    } catch (error: any) {
      return error.message;
    }
  };
