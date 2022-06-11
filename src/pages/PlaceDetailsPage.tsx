import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/store/hooks";
import { loadPlaceThunk } from "../redux/thunks/placeThunk";

const PlaceDetailsPage = () => {
  const { placeId } = useParams();
  const dispatch = useAppDispatch();

  // const {
  //   title,
  //   description,
  //   imageBackup,
  //   address,
  //   city,
  //   placeType,
  //   placeDescription,
  //   price,
  //   numberOfRooms,
  //   numberOfBeds,
  //   numberOfGuests,
  //   country,
  //   rating,
  //   kilometers,
  //   category,
  // } = useAppSelector((state) => state.place);

  useEffect(() => {
    dispatch(loadPlaceThunk(placeId as string));
  }, [dispatch, placeId]);

  return <div>PlaceDetailsPage</div>;
};

export default PlaceDetailsPage;
