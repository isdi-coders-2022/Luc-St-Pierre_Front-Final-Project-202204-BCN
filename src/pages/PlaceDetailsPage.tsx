import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { deletePlaceThunk } from "../redux/thunks/placesThunks";
import { loadPlaceThunk } from "../redux/thunks/placeThunk";

const PlaceDetailsPage = () => {
  const { placeId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { place } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(loadPlaceThunk(placeId as string));
  }, [dispatch, placeId]);

  const deletePlace = (event: React.FormEvent) => {
    event.stopPropagation();
    dispatch(deletePlaceThunk(placeId as string));
    navigate("/hosts/home");
  };

  const goToEditForm = (event: React.FormEvent) => {
    event.stopPropagation();
    navigate(`/become-a-host/${placeId}`);
  };

  return (
    <>
      <section className="pt-6">
        <div>
          <h1 className="text-[#222222] text-[26px] font-semibold">
            {place.title}
          </h1>
        </div>
      </section>

      <div className="mt-6 max-w-7xl grid grid-cols-4 gap-x-2">
        <div className="max-h-[413px] col-span-2 aspect-w-3 aspect-h-8 overflow-hidden block rounded-tl-lg rounded-bl-lg">
          <img
            src={
              place.imageBackup
                ? place.imageBackup
                : "/images/generic-record.png"
            }
            alt="Two each of gray, white, and black shirts laying flat."
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="col-start-3 grid grid-cols-1 gap-y-2">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/airbnb-eed3e.appspot.com/o/1654881776507-design_photo_1_2.webp?alt=media&token=0e4f42d3-29e3-4f92-817e-0f6827ad9d46"
              alt="Model wearing plain black basic tee."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 overflow-hidden">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/airbnb-eed3e.appspot.com/o/1654881776507-design_photo_1_2.webp?alt=media&token=0e4f42d3-29e3-4f92-817e-0f6827ad9d46"
              alt="Model wearing plain gray basic tee."
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        <div className="col-start-4 grid grid-cols-1 gap-y-2">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-tr-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/airbnb-eed3e.appspot.com/o/1654881776507-design_photo_1_2.webp?alt=media&token=0e4f42d3-29e3-4f92-817e-0f6827ad9d46"
              alt="Model wearing plain black basic tee."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-br-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/airbnb-eed3e.appspot.com/o/1654881776507-design_photo_1_2.webp?alt=media&token=0e4f42d3-29e3-4f92-817e-0f6827ad9d46"
              alt="Model wearing plain gray basic tee."
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-stretch pt-12">
        <main className="flex-1 w-[58.33333%]">
          <section className="relative flex-1 h-full flex flex-col lg:order-last">
            <div className="h-full w-full flex items-center justify-between">
              <div className="pr-6 h-full">
                <div className="block rounded h-full w-full text-[#222222]">
                  <h2 className="text-[22px] font-semibold">
                    Private room in island hosted by The Arctic Hideaway
                  </h2>

                  <ol className="flex space-x-1">
                    <li className="inline-flex items-center text-sm">
                      <span className="text-base font-medium text-gray-900">
                        {place.numberOfGuests}
                      </span>
                      <span className="text-base font-normal text-gray-900 ml-1">
                        guest
                      </span>
                    </li>
                    <span>·</span>
                    <li className="inline-flex items-center text-sm">
                      <span className="text-base font-medium text-gray-900">
                        {place.numberOfRooms}
                      </span>
                      <span className="text-base font-normal text-gray-900 ml-1">
                        bedroom
                      </span>
                    </li>
                    <span>·</span>
                    <li className="inline-flex items-center text-sm">
                      <span className="text-base font-medium text-gray-900">
                        {place.numberOfBeds}
                      </span>
                      <span className="text-base font-normal text-gray-900 ml-1">
                        bed
                      </span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="h-full ml-4">
                <div className="block rounded h-full w-full text-[#222222]">
                  <img src="/assets/avatar.png" alt="" className="h-14 w-14" />
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex-1 h-full flex flex-col lg:order-last">
            <div className="h-full flex items-center">
              <div className="pr-6 h-full">
                <div className="block rounded h-full w-full text-[#222222]">
                  <p className="text-base">{place.description}</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <aside className="hidden w-[33.33333%] ml-[8.3333%] lg:block">
          <section className="w-full">
            <div className="bg-white w-[372px] rounded-xl shadow-[0_6px_16px_0px_rgba(0,0,0,0.12)] border border-[#CCCCCC80]">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[22px] font-semibold text-gray-900">
                    € {place.price}
                    <span className="ml-1 font-normal text-base">night</span>
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer hover:text-[#484848]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    onClick={goToEditForm}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#DE3151] hover:bg-[#f43054] focus:outline-none"
                    onClick={deletePlace}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
};

export default PlaceDetailsPage;
