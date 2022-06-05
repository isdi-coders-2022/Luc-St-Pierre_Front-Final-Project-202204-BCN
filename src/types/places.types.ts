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
  numberOfbeds: number;
  numberOfGuests: number;
  creator: string;
}

export interface getAllPlacesResponse {
  places: IPlace[];
}

export interface Props {
  showAllPlaces: IPlace[];
}
