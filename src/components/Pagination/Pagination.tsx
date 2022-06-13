import { useEffect } from "react";
import {
  setDecrementPageActionCreator,
  setIncrementPageActionCreator,
  setPageCountActionCreator,
  // setPerPageCountActionCreator,
} from "../../redux/reducers/features/paginationSlice/paginationSlice";
// import { loadPlacesActionCreator } from "../../redux/reducers/features/placesSlice/placesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { IPlace } from "../../types/places.types";

interface Props {
  places: IPlace[];
}

const Pagination = ({ places }: Props) => {
  const dispatch = useAppDispatch();

  let { pages, currentPage, perPageCount } = useAppSelector(
    (state) => state.pagination
  );

  const totalPlaces = places.length;

  useEffect(() => {
    let numberOfPages = Math.floor(
      (places.length + perPageCount - 1) / perPageCount
    );

    dispatch(setPageCountActionCreator(numberOfPages));

    // let start = pages * perPageCount - (perPageCount - 1);
    // const partialData = places.slice(pages, pages + perPageCount);
    // let items = places.slice(pages * perPageCount, (pages + 1) * perPageCount);

    // pagesRef = Math.min(start + perPageCount - 1, totalPlaces);

    // dispatch(loadPlacesActionCreator(items));
  }, [dispatch, pages, perPageCount, places, totalPlaces]);

  const nextPage = () => {
    // dispatch(setPageCountActionCreator());
    dispatch(setIncrementPageActionCreator());
  };

  const previousPage = () => {
    // dispatch(setPageCountActionCreator());
    dispatch(setDecrementPageActionCreator());
  };

  return (
    <nav
      className="fixed bottom-0 right-0 left-0 bg-white px-4 sm:px-6 md:px-10 xl:px-20 py-2 flex items-center justify-between border-t border-gray-200"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-[#222222]">
          Showing <span className="font-medium">{currentPage}</span> to{" "}
          <span className="font-medium">{pages}</span> of{" "}
          <span className="font-medium">{totalPlaces}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <button
          onClick={previousPage}
          className="relative inline-flex items-center px-4 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="ml-3 relative inline-flex items-center px-4 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
