import { FormEvent, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { IPlace } from "../../types/places.types";
import getClassNames from "../../utils/getClassNames";

const placeDescriptions = [
  {
    place: "Rental unit",
    description:
      "A rented place within a multi-unit residential building or complex.",
  },
  {
    place: "Condo",
    description:
      "A place within a multi-unit building or complex owned by the residents.",
  },
  {
    place: "Loft",
    description:
      "An open layout apartment or condo, which may have short interior walls.",
  },
  {
    place: "Serviced apartment",
    description:
      "An apartment with hotel-like amenities serviced by a professional management company.",
  },
  {
    place: "Casa particular",
    description:
      "A private room in a Cuban home that feels like a bed and breakfast.",
  },
  {
    place: "Vacation home",
    description:
      "A furnished rental property that includes a kitchen and bathroom and may offer some guest services, like a reception desk.",
  },
];

interface Props {
  nextStep: () => any;
  prevStep: () => any;
  handleChange: (params: any) => any;
  formData: IPlace;
}

const StepTwo = ({ nextStep, prevStep, handleChange, formData }: Props) => {
  const [selected, setSelected] = useState(placeDescriptions[0]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Place Types</RadioGroup.Label>
        <div className="space-y-3">
          {placeDescriptions.map((placeDescription) => (
            <RadioGroup.Option
              key={placeDescription.place}
              id={placeDescription.place}
              value={formData.placeDescription}
              onChange={handleChange}
              className={({ checked, active }) =>
                getClassNames(
                  checked ? "border-transparent" : "border-gray-300",
                  active ? "border-[#222222] bg-[#F7F7F7]" : "",
                  "relative block min-h-[122px] max-w-[464px] max-h-[142px] bg-white border-2 border-transparent rounded-xl px-6 py-4 cursor-pointer sm:flex sm:justify-between sm:flex-col focus:outline-none hover:border-[#222222] hover:border-2"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <span className="flex items-center">
                    <span className="text-sm flex flex-col">
                      <RadioGroup.Label
                        as="span"
                        className="font-semibold text-lg text-[#222222]"
                      >
                        {placeDescription.place}
                      </RadioGroup.Label>
                    </span>
                  </span>
                  <RadioGroup.Description
                    as="span"
                    className="mt-2 flex text-sm flex-col text-left"
                  >
                    <div className="">
                      <span className="text-[#666666]">
                        {placeDescription.description}
                      </span>
                    </div>
                  </RadioGroup.Description>
                  <span
                    className={getClassNames(
                      active ? "border-2" : "border",
                      checked
                        ? "border-2 border-[#222222]"
                        : "border-transparent",
                      "absolute -inset-px rounded-xl pointer-events-none hover:border-[#222222] hover:border-2"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </form>
  );
};

export default StepTwo;
