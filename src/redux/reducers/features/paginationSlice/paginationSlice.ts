import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatePlaces } from "../../../../types/places.types";
const initialState: IStatePlaces = {
  places: [],
  pages: 0,
  currentPage: 1,
  perPageCount: 8,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageCount: (places, action: PayloadAction<number>) => ({
      ...places,
      pages: action.payload,
    }),
    setIncrementPage: (places): IStatePlaces => ({
      ...places,
      currentPage: places.currentPage + 1,
    }),
    setDecrementPage: (places): IStatePlaces => ({
      ...places,
      currentPage:
        places.currentPage === 0 ? places.currentPage : places.currentPage - 1,
    }),
    resetCurrentPage: (places): IStatePlaces => ({
      ...places,
      currentPage: 1,
    }),
    setPerPageCount: (places): IStatePlaces => ({
      ...places,
      perPageCount: places.perPageCount + 8,
    }),
    resetPagination: (places): IStatePlaces => ({
      ...places,
      perPageCount: 8,
    }),
  },
});

export const {
  setPageCount: setPageCountActionCreator,
  setIncrementPage: setIncrementPageActionCreator,
  setDecrementPage: setDecrementPageActionCreator,
  resetCurrentPage: resetCurrentPageActionCreator,
  setPerPageCount: setPerPageCountActionCreator,
  resetPagination: resetPaginationActionCreator,
} = paginationSlice.actions;

export default paginationSlice.reducer;
