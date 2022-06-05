export interface IinitialState {
  allPlaces: IPlace[];
}

export interface IPlace {
  title: string;
  description: string;
  address: string;
  city: string;
  placeType: string;
  price: number;
  numberOfRooms: number;
  numberOfBeds: number;
  numberOfGuests: number;
  image: string;
  creator: string;
}

export interface getAllPlacesResponse {
  places: IPlace[];
}

export interface Props {
  showAllPlaces: IPlace[];
}
