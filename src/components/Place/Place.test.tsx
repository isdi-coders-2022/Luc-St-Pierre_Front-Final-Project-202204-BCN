import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockAppDispatch, mockNavigate } from "../../mocks/mockHooks";
import { placesMock } from "../../mocks/placesMocks";
import { store } from "../../redux/store/store";

import Place from "./Place";

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockAppDispatch,
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Place component function", () => {
  const place = placesMock[0];

  describe("When invoked with a place", () => {
    test("Then it should render an title and a date", () => {
      const expectedTitle = "House near beaches";
      const expectedDate = "Jun 20 - 25";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Place place={place} />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByText(expectedTitle);
      const date = screen.getByText(expectedDate);

      expect(title).toBeInTheDocument();
      expect(date).toBeInTheDocument();
    });
  });
});
