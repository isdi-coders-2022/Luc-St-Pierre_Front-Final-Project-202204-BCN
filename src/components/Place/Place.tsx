import React from "react";
import { useNavigate } from "react-router-dom";
import { IPlace } from "../../types/places.types";

const Place = ({
  place: {
    id,
    title,
    description,
    address,
    city,
    placeType,
    price,
    numberOfRooms,
    numberOfBeds,
    numberOfGuests,
    image,
    imageBackup,
    rating,
    kilometers,
  },
}: {
  place: IPlace;
}): JSX.Element => {
  const navigate = useNavigate();

  const goToPlaceDetails = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/places/${id}`);
  };

  return (
    <li className="group relative" onClick={goToPlaceDetails}>
      <div className="relative w-full min-h-80 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 h-[429px] sm:h-[346px] md:h-[276px] lg:h-[301px] xl:h-[301px] 2xl:h-[324px] lg:aspect-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 absolute cursor-pointer top-3.5 right-3.5"
          fill="#22222290"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <img
          src={image[0].downloadURL || "/images/generic-place.png"}
          alt={title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-2 flex justify-between">
        <div>
          <h3 className="text-[15px] font-semibold text-gray-900">
            <a href="/test">
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="text-[15px] text-[#666666]">
            {kilometers} Kilometers away
          </p>
          <p className="text-[15px] text-[#666666]">Jun 20 - 25</p>
          <p className="mt-1 text-[15px] font-semibold text-[#222222]">
            € {price} <span className=" font-normal">night</span>
          </p>
        </div>
        <div className="flex max-h-[18px]">
          <p className="text-sm text-gray-900"> {rating}</p>
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
    </li>
  );
};

export default Place;
