import { useEffect, useState } from "react";

import PlacesList from "../components/PlacesList/PlacesList";
import MapLeaflet from "../components/MapLeaflet/MapLeaflet";

import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { loadPlacesThunk } from "../redux/thunks/placesThunks";

function HomePage() {
  const [showMap, setShowMap] = useState(false);

  const dispatch = useAppDispatch();
  const { places } = useAppSelector((state) => state.places);

  useEffect(() => {
    dispatch(loadPlacesThunk());
  }, [dispatch]);

  return (
    <div>
      {showMap ? (
        <MapLeaflet places={places} />
      ) : (
        <PlacesList places={places} />
      )}

      <div className="fixed w-full left-0 right-0 bottom-0 z-50 mb-24">
        <div className="flex justify-center">
          <button
            type="button"
            className="hidden md:inline-flex items-center h-[48px] px-6 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-black cursor-pointer hover:scale-[1.03] transition-all duration-300 focus:outline-none"
            onClick={() => setShowMap(!showMap)}
          >
            {showMap ? "Show list" : "Show map"}
            <div className="ml-2">
              {showMap ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="block h-4 w-4 fill-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 12v2H6v-2h9zM2.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 7v2H6V7h9zM2.5 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 2v2H6V2h9z"
                  ></path>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="block h-4 w-4 fill-white"
                >
                  <path d="M31.245 3.747a2.285 2.285 0 0 0-1.01-1.44A2.286 2.286 0 0 0 28.501 2l-7.515 1.67-10-2L2.5 3.557A2.286 2.286 0 0 0 .7 5.802v21.95a2.284 2.284 0 0 0 1.065 1.941A2.29 2.29 0 0 0 3.498 30l7.515-1.67 10 2 8.484-1.886a2.285 2.285 0 0 0 1.802-2.245V4.247a2.3 2.3 0 0 0-.055-.5zM12.5 25.975l-1.514-.303L9.508 26H9.5V4.665l1.514-.336 1.486.297v21.349zm10 1.36l-1.515.337-1.485-.297V6.025l1.514.304L22.493 6h.007v21.335z"></path>
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
