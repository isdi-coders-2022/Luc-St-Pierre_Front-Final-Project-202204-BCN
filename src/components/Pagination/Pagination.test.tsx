import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { placesMock } from "../../mocks/placesMocks";
import { store } from "../../redux/store/store";
import Pagination from "./Pagination";

describe("Given a Pagination component function", () => {
  const numberOfPages = 4;
  const currentPage = 1;
  const perPageCount = 5;
  const setCurrentPage = jest.fn();

  describe("When it's invoked", () => {
    test("Then it should render a button with the text 'Next'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pagination
              items={placesMock}
              pages={numberOfPages}
              perPageCount={perPageCount}
              currentPage={currentPage}
              onNext={setCurrentPage}
              onPrev={setCurrentPage}
            />
          </Provider>
        </BrowserRouter>
      );

      const buttonNext = screen.getByRole("button", {
        name: "Next",
      });

      expect(buttonNext).toBeInTheDocument();
    });
  });
});
