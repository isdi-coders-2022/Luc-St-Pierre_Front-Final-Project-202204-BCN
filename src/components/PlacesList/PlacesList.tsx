import { IPlace } from "../../types/places.types";
import Place from "../Place/Place";

interface Props {
  places: IPlace[];
}

const PlacesList = ({ places }: Props) => {
  return (
    <section aria-labelledby="related-heading">
      <ul className="mt-6 mb-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
        {places.map((place: IPlace, index) => {
          return <Place key={index} place={place} />;
        })}
      </ul>
    </section>
  );
};

export default PlacesList;
