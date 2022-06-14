import axios from "axios";
import { getAllPlacesResponse } from "../../types/places.types";
import {
  setLoadingOffWithMessage,
  setLoadingOn,
} from "../../utils/modal/modal";
import {
  addPlaceActionCreator,
  deletePlaceActionCreator,
  loadPlacesActionCreator,
  updatePlaceActionCreator,
} from "../reducers/features/placesSlice/placesSlice";
import { AppDispatch } from "../store/store";

const baseUrl = process.env.REACT_APP_API_URL;

export const loadPlacesThunk = () => async (dispatch: AppDispatch) => {
  try {
    const {
      data: { places },
    } = await axios.get<getAllPlacesResponse>(`${baseUrl}hosts/places`);

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
      }
    } catch (error: any) {
      setLoadingOffWithMessage("Error while creating a new place", true);
      return error.message;
    }
  };

export const deletePlaceThunk =
  (placeId: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        setLoadingOn();
        await axios.delete(`${baseUrl}hosts/places/${placeId}`, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        });

        dispatch(deletePlaceActionCreator(placeId));
        setLoadingOffWithMessage("Place deleted successfully", false);
      }
    } catch (error: any) {
      setLoadingOffWithMessage("Error while creating a new place", true);
      return error.message;
    }
  };

export const updatePlaceThunk =
  (placeId: string, placeData: any) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    try {
      setLoadingOn();
      const { data } = await axios.put(
        `${baseUrl}hosts/places/${placeId}`,
        placeData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data) {
        dispatch(updatePlaceActionCreator(data));
        setLoadingOffWithMessage("Place updated successfully", false);
      }
    } catch (error: any) {
      setLoadingOffWithMessage("Error while trying to update place", true);
      return error.message;
    }
  };
