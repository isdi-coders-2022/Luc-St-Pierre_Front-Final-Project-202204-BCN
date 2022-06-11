import axios from "axios";
import { getAllPlacesResponse } from "../../types/places.types";
import {
  setLoadingOffWithMessage,
  setLoadingOn,
} from "../../utils/modal/modal";
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
      setLoadingOn();
      const { data } = await axios.post(`${baseUrl}hosts/places`, placeData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      if (data) {
        setLoadingOffWithMessage("Place created successfully", false);

        dispatch(addPlaceActionCreator(data));
        dispatch(loadPlacesThunk(localStorage.token));
      }
    } catch {
      setLoadingOffWithMessage("Error while creating a new place", true);
    }
  };