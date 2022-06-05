import axios from "axios";
import { getAllPlacesResponse } from "../../types/places.types";
import { loadPlacesActionCreator } from "../reducers/features/placesSlice/placesSlice";
import { AppDispatch } from "../store/store";

export const loadPlacesThunk = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { places },
    } = await axios.get<getAllPlacesResponse>(
      `${process.env.REACT_APP_API_URL}hosts/places`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(loadPlacesActionCreator(places));
  }
};
