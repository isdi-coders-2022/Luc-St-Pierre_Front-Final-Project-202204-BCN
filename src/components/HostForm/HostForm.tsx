import { ChangeEvent, useState } from "react";

import { IPlace } from "../../types/places.types";

import StepOne from "./StepOne";

const HostForm = (): JSX.Element => {
  const [step, setStep] = useState(1);

  const initialForm: IPlace = {
    title: "",
    description: "",
    address: "",
    city: "",
    placeType: "",
    price: 0,
    numberOfRooms: 0,
    numberOfBeds: 0,
    numberOfGuests: 0,
    image: "",
    creator: "",
    rating: 0,
    kilometers: 0,
  };

  const [formData, setFormData] = useState<IPlace>(initialForm);

  const nextStep = () => {
    setStep(step + 1);
  };

  // const prevStep = () => {
  //   setStep(step - 1);
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[464px]">
      <div className="pb-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-[464px]">
          <StepOne
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        </div>
      </div>
    </div>
  );
};

export default HostForm;
