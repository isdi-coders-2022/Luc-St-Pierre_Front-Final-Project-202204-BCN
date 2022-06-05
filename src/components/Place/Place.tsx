import { IPlace } from "../../types/places.types";

interface Props {
  place: IPlace;
}
const Place = ({
  place: {
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
    creator,
  },
}: Props): JSX.Element => {
  return (
    <>
      <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-[301px] xl:h-[324px] lg:aspect-none">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-[15px] font-semibold text-gray-900">
            <a href="/test">
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="text-[15px] text-[#666666]">323 kilometers away</p>
          <p className="text-[15px] text-[#666666]">Jun 20 - 25</p>
          <p className="mt-1 text-[15px] font-semibold text-[#222222]">
            € {price} <span className=" font-normal">night</span>
          </p>
        </div>
        <p className="text-sm text-gray-900"> {price} night</p>
      </div>
    </>
  );
};

export default Place;
