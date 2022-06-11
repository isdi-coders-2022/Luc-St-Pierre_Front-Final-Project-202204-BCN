import axios from "axios";
import { getAllPlacesResponse, IPlace } from "../../types/places.types";
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

export const deletePlaceThunk =
  (placeId: string) => async (dispatch: AppDispatch) => {
    try {
      const { status } = await axios.delete(
        `${baseUrl}hosts/places/${placeId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );

      if (status === 200) {
        setLoadingOn();
        dispatch(deletePlaceActionCreator(placeId));
        setLoadingOffWithMessage("Place deleted successfully", false);
      }
    } catch {
      setLoadingOffWithMessage("Error while creating a new place", true);
    }
  };

export const updatePlaceThunk =
  (placeId: string, placeData: any) => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { updatePlace },
      } = await axios.put(`${baseUrl}hosts/places/${placeId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      if (updatePlace) {
        setLoadingOn();
        dispatch(updatePlaceActionCreator(updatePlace));
        setLoadingOffWithMessage("Place updated successfully", false);
      }
    } catch {
      setLoadingOffWithMessage(
        `Error while trying to update place ${placeId}`,
        true
      );
    }
  };
