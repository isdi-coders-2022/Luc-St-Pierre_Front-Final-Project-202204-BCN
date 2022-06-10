export interface IinitialState {
  places: IPlace[];
}

export interface IPlace {
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
  imageBackup?: string;
  creator: string;
  rating: string;
  kilometers: string;
  category: string;
}

// export interface IRegisterPlaceForm {
//   title: string;
//   description: string;
//   address: string;
//   city: string;
//   placeType: string;
//   placeDescription: string;
//   price: string;
//   numberOfRooms: string;
//   numberOfBeds: string;
//   numberOfGuests: string;
//   country: string;
//   image: string | File;
//   imageBackup?: string;
//   creator: string;
//   rating: string;
//   kilometers: string;
//   category: string;
// }

export interface getAllPlacesResponse {
  places: IPlace[];
}

// export interface Props {
//   showAllPlaces: IRegisterPlaceForm[];
// }
