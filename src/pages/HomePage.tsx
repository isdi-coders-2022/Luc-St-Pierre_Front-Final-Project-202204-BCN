import { useEffect } from "react";
import PlacesList from "../components/PlacesList/PlacesList";

import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { loadPlacesThunk } from "../redux/thunks/placesThunks";

function HomePage() {
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(loadPlacesThunk(token as string));
  }, [dispatch, token]);

  const places = useAppSelector((state) => state.places);

  return (
    <div>
      <PlacesList showAllPlaces={places} />
    </div>
  );
}

export default HomePage;
