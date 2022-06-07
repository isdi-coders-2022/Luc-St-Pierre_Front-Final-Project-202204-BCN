import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { addPlaceThunk } from "../../redux/thunks/placesThunks";

import { IPlace } from "../../types/places.types";

const HostForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialForm: IPlace = {
    title: "",
    description: "",
    address: "",
    city: "",
    placeType: "",
    placeDescription: "",
    price: 0,
    numberOfRooms: 0,
    numberOfBeds: 0,
    numberOfGuests: 0,
    image: "",
    creator: "",
    rating: 0,
    isListed: false,
    kilometers: 0,
    category: "",
  };

  const [formData, setFormData] = useState<IPlace>(initialForm);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addPlaceThunk(formData));
    setFormData(initialForm);
    navigate("/home");
  };

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-3">
          <form onSubmit={handleSubmit} noValidate>
            <div className="overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 text-[#222222] sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-base font-light text-[#222222]"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={formData.title}
                      onChange={handleChange}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="description"
                      className="block text-base font-light text-[#222222]"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      value={formData.description}
                      onChange={handleChange}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="address"
                      className="block text-base font-light text-[#222222]"
                    >
                      address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="city"
                      className="block text-base font-light text-[#222222]"
                    >
                      City
                    </label>
                    <select
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] sm:text-sm"
                    >
                      <option>Barcelona</option>
                      <option>Madrid</option>
                      <option>Girona</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="placeType"
                      className="block text-base font-light text-[#222222]"
                    >
                      Place type
                    </label>
                    <select
                      id="placeType"
                      value={formData.placeType}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] sm:text-sm"
                    >
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Secondary unit</option>
                      <option>Unique space</option>
                      <option>Bed and breakfast</option>
                      <option>Boutique hotel</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="placeDescription"
                      className="block text-base font-light text-[#222222]"
                    >
                      Place description
                    </label>
                    <textarea
                      id="placeDescription"
                      rows={3}
                      value={formData.placeDescription}
                      onChange={handleChange}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                    <label
                      htmlFor="price"
                      className="block text-base font-light text-[#222222]"
                    >
                      price
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                    <label
                      htmlFor="numberOfRooms"
                      className="block text-base font-light text-[#222222]"
                    >
                      Rooms
                    </label>
                    <input
                      type="text"
                      id="numberOfRooms"
                      value={formData.numberOfRooms}
                      onChange={handleChange}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                    <label
                      htmlFor="numberOfBeds"
                      className="block text-base font-light text-[#222222]"
                    >
                      Beds
                    </label>
                    <input
                      type="text"
                      id="numberOfBeds"
                      value={formData.numberOfBeds}
                      onChange={handleChange}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                    <label
                      htmlFor="numberOfGuests"
                      className="block text-base font-light text-[#222222]"
                    >
                      Guests
                    </label>
                    <input
                      type="text"
                      id="numberOfGuests"
                      value={formData.numberOfGuests}
                      onChange={handleChange}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer bg-white rounded-md font-light text-[#222222] hover:text-[#222222]00 focus-within:outline-none"
                    >
                      <span>Upload image</span>
                      <input
                        id="image"
                        value={formData.image}
                        onChange={handleChange}
                        type="file"
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none text-white bg-[#222222] hover:bg-black"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostForm;
