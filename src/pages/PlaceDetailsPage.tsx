import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { loadPlaceThunk } from "../redux/thunks/placeThunk";

const PlaceDetailsPage = () => {
  const { placeId } = useParams();
  const dispatch = useAppDispatch();

  const { place } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(loadPlaceThunk(placeId as string));
  }, [dispatch, placeId]);

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

      <div className="flex-1 flex items-stretch">
        <main className="flex-1">
          <section className="min-w-0 flex-1 h-full flex flex-col lg:order-last pt-12">
            <div className="h-full flex items-center">
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

              <div className="h-full">
                <div className="block rounded h-full w-full text-[#222222]">
                  <img src="/assets/avatar.png" alt="" className="h-14 w-14" />
                </div>
              </div>
            </div>
          </section>

          <section className="min-w-0 flex-1 h-full flex flex-col lg:order-last pt-12">
            <div className="h-full flex items-center">
              <div className="pr-6 h-full">
                <div className="block rounded h-full w-full text-[#222222]">
                  <p className="text-base">{place.description}</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <aside className="hidden w-96 bg-white overflow-y-auto lg:block">
          <div className="h-full">
            <div className="p-6 h-full">
              <div className="block rounded h-full w-full text-gray-200">
                Aside
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default PlaceDetailsPage;
