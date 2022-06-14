import { useState, useMemo } from "react";
import { IPlace } from "../../types/places.types";
import Place from "../Place/Place";
import Pagination from "../Pagination/Pagination";
import Categories from "../Categories/Categories";
import { categories } from "./categoryOptions";

interface Props {
  places: IPlace[];
}
const perPageCount = 8;

type Category = typeof categories[number];

const PlacesList = ({ places }: Props) => {
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
  console.log({ pagedPlaces });
  const onSetSelectedCategory = (category: Category) => {
    console.log("on set selected", category);
    setCurrentPage(1);
    setSelectedCategory(selectedCategory === category ? undefined : category);
  };

  return (
    <>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSetSelectedCategory}
      />
      <section aria-labelledby="related-heading">
        <ul className="mt-[12.1rem] mb-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
          {pagedPlaces.length ? (
            pagedPlaces.map((place: IPlace, index) => {
              return <Place key={index} place={place} />;
            })
          ) : (
            <p>No places found</p>
          )}
        </ul>
      </section>
      <Pagination
        items={places}
        pages={numberOfPages}
        perPageCount={perPageCount}
        currentPage={currentPage}
        onNext={setCurrentPage}
        onPrev={setCurrentPage}
      />
    </>
  );
};

export default PlacesList;
