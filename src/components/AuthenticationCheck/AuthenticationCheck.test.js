import { render } from "@testing-library/react";
import AuthenticationCheck from "./AuthenticationCheck";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockName = "";

jest.mock("../../redux/store/hooks", () => ({
  ...jest.requireActual("../../redux/store/hooks"),
  useAppSelector: () => ({ name: mockName }),
}));

describe("Given a AuthenticationCheck wrapper component", () => {
  describe("When it's invoked with no user authentication", () => {
    test("Then it should call the navigate to home page", () => {
      render(
        <AuthenticationCheck>
          <h1>Airbnb</h1>
        </AuthenticationCheck>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/home");
    });
  });
});
