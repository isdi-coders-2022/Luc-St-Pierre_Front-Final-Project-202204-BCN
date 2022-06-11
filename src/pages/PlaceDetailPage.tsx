import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store/hooks";

const PlaceDetailPage = () => {
  const { placeId } = useParams();

  const {
    title,
    description,
    imageBackup,
    address,
    city,
    placeType,
    placeDescription,
    price,
    numberOfRooms,
    numberOfBeds,
    numberOfGuests,
    country,
    rating,
    kilometers,
    category,
  } = useAppSelector((state) => state.place);

  return <div>PlaceDetailPage</div>;
};

export default PlaceDetailPage;
