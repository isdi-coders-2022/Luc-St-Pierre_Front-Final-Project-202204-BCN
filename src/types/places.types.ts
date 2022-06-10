export interface IinitialState {
  allPlaces: IRegisterPlace[];
}

export interface IRegisterPlace {
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
  image: string;
  imageBackup?: string;
  creator: string;
  rating: string;
  kilometers: string;
  category: string;
}

export interface getAllPlacesResponse {
  places: IRegisterPlace[];
}

export interface Props {
  showAllPlaces: IRegisterPlace[];
}
