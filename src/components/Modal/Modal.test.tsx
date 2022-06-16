import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { mockAppDispatch } from "../../mocks/mockHooks";
import { store } from "../../redux/store/store";

import Modal from "./Modal";

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppDispatch: () => mockAppDispatch,
}));

describe("Given a Modal component", () => {
  describe("When invoked", () => {
    test("Then the setTimeout function should be called", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");

      render(
        <Provider store={store}>
          <Modal />
        </Provider>
      );

      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");

      expect(setTimeout).toHaveBeenCalled();

      setTimeout(() => {
        expect(mockAppDispatch).toHaveBeenCalled();
      }, 4000);
    });
  });

  describe("When invoked  and the user clicks on the message", () => {
    test("Then the dispatch should be called", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");

      render(
        <Provider store={store}>
          <Modal />
        </Provider>
      );

      const modal = screen.getByTestId("modal");

      userEvent.click(modal);

      expect(mockAppDispatch).toHaveBeenCalled();
    });
  });
});
