import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IPlace } from "../../types/places.types";
import Categories from "../Categories/Categories";
import { categories } from "../PlacesList/categoryOptions";
import "./MapLeaflet.css";

interface Props {
  places: IPlace[];
}

const perPageCount = 8;

type Category = typeof categories[number];

const MapLeaflet = ({ places }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >();
  const numberOfPages = Math.floor(
    (places.length + perPageCount - 1) / perPageCount
  );

  const pagedPlaces = useMemo(() => {
    const start = (currentPage - 1) * perPageCount;
    const end = start + perPageCount;

    if (selectedCategory) {
      return places
        .filter((place) => place.category === selectedCategory.title)
        .slice(start, end);
    }

    return places.slice(start, end);
  }, [currentPage, places, selectedCategory]);

  const onSetSelectedCategory = (category: Category) => {
    setCurrentPage(1);
    setSelectedCategory(selectedCategory === category ? undefined : category);
  };
  const markers = useMemo(() => {
    return places.filter((place) => place.location?.coordinates.length);
  }, [places]);

  return (
    <>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSetSelectedCategory}
      />
      <MapContainer center={[50, 15]} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((place: IPlace, index) => {
          const [lat, lng] = place.location.coordinates as [number, number];
          return (
            <Marker key={index} position={[lat, lng]}>
              <Popup>
                <div className="flex flex-col rounded-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={
                        place.image[0].downloadURL ||
                        "/images/generic-place.png"
                      }
                      alt={place.title}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <span className="inline-flex items-center text-sm">
                        <span className="font-medium text-[#222222]">
                          {place.city}, {place.country}
                        </span>
                      </span>
                      <div className="flex items-center pt-1">
                        <span className="pr-1 text-sm font-semibold text-[#222222]">
                          € {place.price}{" "}
                          <span className=" font-normal">night ·</span>
                        </span>
                        <span className="text-sm text-[#666666]">
                          Jun 20 - 25
                        </span>
                      </div>
                    </div>
                    <div className="flex max-h-[18px]">
                      <p className="text-sm text-gray-900"> {place.rating}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 self-end"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default MapLeaflet;
