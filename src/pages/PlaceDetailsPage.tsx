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
            src="https://firebasestorage.googleapis.com/v0/b/airbnb-eed3e.appspot.com/o/1654881776507-design_photo_1_2.webp?alt=media&token=0e4f42d3-29e3-4f92-817e-0f6827ad9d46"
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
    </>
  );
};

export default PlaceDetailsPage;
