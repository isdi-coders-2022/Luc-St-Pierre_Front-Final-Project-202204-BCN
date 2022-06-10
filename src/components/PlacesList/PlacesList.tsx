import { IPlace } from "../../types/places.types";
import Place from "../Place/Place";

const PlacesList = ({ places }: { places: IPlace[] }) => {
  return (
    <section aria-labelledby="related-heading">
      <ul className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
        {places.map((place, index) => {
          return (
            <li key={index} className="group relative">
              <Place place={place} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PlacesList;
