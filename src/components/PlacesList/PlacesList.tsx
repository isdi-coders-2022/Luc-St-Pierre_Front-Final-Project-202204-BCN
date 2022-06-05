import { IPlace } from "../../types/places.types";

interface Props {
  showAllPlaces: IPlace[];
}

const PlacesList = ({ showAllPlaces }: Props) => {
  console.log(showAllPlaces);
  return (
    <div>
      <ul>Place</ul>
    </div>
  );
};

export default PlacesList;
