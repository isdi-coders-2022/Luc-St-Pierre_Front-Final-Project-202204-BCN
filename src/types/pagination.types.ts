import { IPlace } from "./places.types";

export interface UI {
  loading: boolean;
  modal: string;
}

export interface IPaginationState {
  pages: number;
  currentPage: number;
  pagination: number;
  places: IPlace[];
}
