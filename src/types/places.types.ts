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
  coordinates: number[];
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
