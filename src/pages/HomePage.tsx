import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { loadPlacesThunk } from "../redux/thunks/placesThunks";

function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPlacesThunk());
  }, [dispatch]);

  const { allPlaces } = useAppSelector((state) => state.places);

  return <div showAllPlaces={allPlaces}>homepage</div>;
}

export default HomePage;
