import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { geocode, type GeocodeRequest } from "nominatim-browser";
import {
  addPlaceThunk,
  updatePlaceThunk,
} from "../../redux/thunks/placesThunks";
import { loadPlaceThunk } from "../../redux/thunks/placeThunk";
import Autocomplete from "../common/form/autocomplete/Autocomplete";
import { IOpenStreetPlace, IRegisterPlaceForm } from "../../types/places.types";

interface Props {
  placeId?: string;
}

const HostForm = ({ placeId }: Props): JSX.Element => {
  const placeData = useAppSelector((state) => state.place);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialForm: IRegisterPlaceForm = {
    title: "",
    description: "",
    address: "",
    city: "",
    placeType: "",
    placeDescription: "",
    price: "",
    numberOfRooms: "",
    numberOfBeds: "",
    numberOfGuests: "",
    country: "",
    image: "",
    rating: "",
    kilometers: "",
    category: "",
    location: { type: "Point", coordinates: [] },
  };

  const [formData, setFormData] = useState<IRegisterPlaceForm>(initialForm);
  const [addressQuery, setAddressQuery] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState<
    Array<IOpenStreetPlace>
  >([]);

  useEffect(() => {
    if (placeId) {
      dispatch(loadPlaceThunk(placeId));
    }
  }, [dispatch, placeId]);

  const searchAddressSuggestions = async (params: GeocodeRequest) => {
    const response = await geocode({
      ...params,
      addressdetails: true,
    });

    setAddressSuggestions(response);
  };

  const onChangeAddressQuery = (address: string) => {
    // const { city, country } = formData;
    searchAddressSuggestions({
      // city,
      // country,
      street: address,
    });
    setAddressQuery(address);
  };

  const onAddressChange = (address: IOpenStreetPlace) => {
    const {
      display_name,
      lat,
      lon,
      address: { country, city, town, village },
    } = address;

    setFormData((formData) => ({
      ...formData,
      address: display_name,
      location: {
        type: "Point",
        coordinates: [lat, lon],
      },
      city: city || town || village || formData.city,
      country: country || formData.country,
    }));
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    if (placeId) {
      setFormData(placeData);
    }
  }, [placeData, placeId]);

  const handleImageInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      image: event.target.files?.[0] as File,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const newFormData = new FormData();
      newFormData.append("title", formData.title);
      newFormData.append("description", formData.description);
      newFormData.append("address", JSON.stringify(formData.address));
      newFormData.append("city", formData.city);
      newFormData.append("placeType", formData.placeType);
      newFormData.append("placeDescription", formData.placeDescription);
      newFormData.append("price", formData.price);
      newFormData.append("numberOfBeds", formData.numberOfBeds);
      newFormData.append("numberOfRooms", formData.numberOfRooms);
      newFormData.append("numberOfGuests", formData.numberOfGuests);
      newFormData.append("country", formData.country);
      newFormData.append("image", formData.image);
      newFormData.append("rating", formData.rating);
      newFormData.append("kilometers", formData.kilometers);
      newFormData.append("category", formData.category);
      newFormData.append("lat", String(formData.location.coordinates[0]));
      newFormData.append("lon", String(formData.location.coordinates[1]));

      await (placeId
        ? dispatch(updatePlaceThunk(placeId, newFormData))
        : dispatch(addPlaceThunk(newFormData)));

      // setFormData(initialForm);
      navigate("/hosts/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-28">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-3">
          <form onSubmit={handleSubmit} noValidate>
            <div className="overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 text-[#222222] sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={formData.title}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="description"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      value={formData.description}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Address
                    </label>
                    {/* <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    /> */}
                    <Autocomplete
                      query={addressQuery}
                      setQuery={onChangeAddressQuery}
                      selected={formData.address}
                      setSelected={onAddressChange}
                      options={addressSuggestions}
                      keyExtractor={(item) => (item ? item.place_id : "")}
                      renderItem={(item) => (item ? item.display_name : "")}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Country
                    </label>
                    {/* <select
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] sm:text-sm"
                    >
                      <option>Canada</option>
                      <option>Spain</option>
                      <option>France</option>
                    </select> */}
                    <input
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="city"
                      className="block text-base font-normal text-[#222222]"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] sm:text-sm"
                    >
                      <option>Islands</option>
                      <option>Beach</option>
                      <option>Amazing pools</option>
                      <option>OMG!</option>
                      <option>National parks</option>
                      <option>Chalets</option>
                      <option>Design</option>
                      <option>Arctic</option>
                      <option>Tiny homes</option>
                      <option>Treehouses</option>
                      <option>Surfing</option>
                      <option>Amazing views</option>
                      <option>Lakefront</option>
                      <option>Camping</option>
                      <option>Shared homes</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="placeType"
                      className="block text-base font-normal text-[#222222]"
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
                      className="block text-base font-normal text-[#222222]"
                    >
                      Place description
                    </label>
                    <textarea
                      id="placeDescription"
                      rows={3}
                      value={formData.placeDescription}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                    <label
                      htmlFor="price"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                    <label
                      htmlFor="numberOfRooms"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Rooms
                    </label>
                    <input
                      type="text"
                      id="numberOfRooms"
                      value={formData.numberOfRooms}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                    <label
                      htmlFor="numberOfBeds"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Beds
                    </label>
                    <input
                      type="text"
                      id="numberOfBeds"
                      value={formData.numberOfBeds}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                    <label
                      htmlFor="numberOfGuests"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Guests
                    </label>
                    <input
                      type="text"
                      id="numberOfGuests"
                      value={formData.numberOfGuests}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                    <label
                      htmlFor="kilometers"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Km's
                    </label>
                    <input
                      type="text"
                      id="kilometers"
                      value={formData.kilometers}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 appearance-none block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="image"
                      className="block text-base font-normal text-[#222222]"
                    >
                      Upload images
                    </label>

                    <div className="mt-2">
                      <input
                        id="image"
                        onChange={handleImageInputChange}
                        accept="image/*"
                        type="file"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="px-4 py-4 w-[50%] border-t-2 border-gray-200 text-right sm:px-12 fixed bottom-0
              right-0"
              >
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none text-white bg-[#222222] hover:bg-black"
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
