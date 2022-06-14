export interface IinitialState {
  places: IPlace[];
}
export interface IPlaceState {
  places: IPlace;
}

export interface IStatePlaces {
  places: IPlace[];
  pages: number;
  currentPage: number;
  perPageCount: number;
}

export interface ILocation {
  type: string;
  coordinates: number[] | string[];
}

export interface IPlace {
  id?: string;
  title: string;
  description: string;
  address: string;
  city: string;
  creator: string;
  placeType: string;
  placeDescription: string;
  price: string;
  numberOfRooms: string;
  numberOfBeds: string;
  numberOfGuests: string;
  country: string;
  image: string;
  imageBackup?: string;
  rating: string;
  kilometers: string;
  category: string;
  location: ILocation;
}

export interface IRegisterPlaceForm {
  title: string;
  description: string;
  address: string;
  city: string;
  placeType: string;
  placeDescription: string;
  price: string;
  numberOfRooms: string;
  numberOfBeds: string;
  numberOfGuests: string;
  country: string;
  image: string | File;
  rating: string;
  kilometers: string;
  category: string;
  location: ILocation;
}

export interface getAllPlacesResponse {
  places: IPlace[];
}

export interface IOpenStreetPlace {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  icon: string;
  address: IAddress;
}

export interface IAddress {
  tourism: string;
  road: string;
  neighbourhood: string;
  suburb: string;
  city_district: string;
  city: string;
  town: string;
  village: string;
  county: string;
  state: string;
  region: string;
  postcode: string;
  country: string;
  country_code: string;
}
