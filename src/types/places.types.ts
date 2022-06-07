export interface IinitialState {
  allPlaces: IPlace[];
}

export interface IPlace {
  title: string;
  description: string;
  address: string;
  city: string;
  placeType: string;
  placeDescription: string;
  price: number;
  numberOfRooms: number;
  numberOfBeds: number;
  numberOfGuests: number;
  image: string;
  creator: string;
  rating: number;
  isListed: boolean;
  kilometers: number;
  category: string;
}

export interface getAllPlacesResponse {
  places: IPlace[];
}

export interface Props {
  showAllPlaces: IPlace[];
}
