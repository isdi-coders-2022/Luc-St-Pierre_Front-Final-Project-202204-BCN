import { FormEvent, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { IPlace } from "../../types/places.types";
import getClassNames from "../../utils/getClassNames";

const placeTypes = [
  { placeType: "Apartment", image: "/assets/placeTypes/apartment.webp" },
  { placeType: "House", image: "/assets/placeTypes/house.webp" },
  {
    placeType: "Secondary unit",
    image: "/assets/placeTypes/secondary-unit.webp",
  },
  { placeType: "Unique space", image: "/assets/placeTypes/unique-space.webp" },
  {
    placeType: "Bed and breakfast",
    image: "/assets/placeTypes/bed-breakfast.webp",
  },
  {
    placeType: "Boutique hotel",
    image: "/assets/placeTypes/boutique-hotel.webp",
  },
];

interface Props {
  nextStep: () => any;
  handleChange: (params: any) => any;
  formData: IPlace;
}

const StepOne = ({ nextStep, handleChange, formData }: Props) => {
  const [selected, setSelected] = useState(placeTypes[0]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("selected.placeType: ", selected);
    console.log("formData: ", formData);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <RadioGroup value={selected} onChange={setSelected} name="placeType">
        <RadioGroup.Label className="sr-only">Place Types</RadioGroup.Label>
        <div className="space-y-3">
          {placeTypes.map((place) => {
            return (
              <RadioGroup.Option
                key={place.placeType}
                id="placeType"
                value={selected.placeType}
                onChange={handleChange}
                className={({ checked, active }) =>
                  getClassNames(
                    checked ? "border-transparent" : "border-gray-300",
                    active ? "bg-[#F7F7F7]" : "",
                    "relative block min-h-[88px] max-w-[464px] max-h-[90px] bg-white border-2 border-transparent rounded-xl px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none hover:border-[#222222] hover:border-2"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <span className="flex items-center z-50">
                      <span className="text-sm flex flex-col">
                        <RadioGroup.Label
                          as="span"
                          className="font-semibold text-lg text-gray-900"
                        >
                          {place.placeType}
                        </RadioGroup.Label>
                      </span>
                    </span>
                    <RadioGroup.Description
                      as="span"
                      className="mt-2 flex text-sm sm:mt-0 sm:flex-col sm:ml-4 sm:text-right z-50"
                    >
                      <div className="h-14 w-14">
                        <img
                          className="rounded-[4px]"
                          src={place.image}
                          alt={place.placeType}
                        />
                      </div>
                    </RadioGroup.Description>
                    <span
                      className={getClassNames(
                        active
                          ? "border-2 bg-[#F7F7F7] hover:border-0"
                          : "border",
                        checked ? "border-[#222222]" : "border-transparent",
                        "absolute -inset-px rounded-xl pointer-events-none hover:border-[#222222] hover:border-2"
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </RadioGroup.Option>
            );
          })}
        </div>
      </RadioGroup>
      <button className="text-base text-black">Submit</button>
    </form>
  );
};

export default StepOne;
