import { render } from "@testing-library/react";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNaigate: () => mockUseNavigate,
}));

let mockName = "";

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppSelector: () => ({ name: mockName }),
}));

describe("Given a AuthenticationCheck wrapper component", () => {
  describe("When it's invoked with no user authentication", () => {
    test("Then it should call the navigate to login page", () => {});
  });
});
