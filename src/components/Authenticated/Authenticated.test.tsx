import { render, screen } from "@testing-library/react";
import Authenticated from "./Authenticated";

const mockUseNavigate = jest.fn();
const mockUseLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
  useLocation: () => mockUseLocation,
}));

let mockAuthenticated = false;

jest.mock("../../redux/store/hooks", () => ({
  useAppSelector: () => ({ authenticated: mockAuthenticated }),
}));

describe("Given a Authenticated wrapper component", () => {
  describe("When it's invoked", () => {
    test("Then it should call the navigate to login page when user is not authenticated", () => {
      render(
        <Authenticated>
          <h1>Airbnb</h1>
        </Authenticated>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/user/login");
    });

    test("Then it should render it's children when the user is authenticated", () => {
      render(
        <Authenticated>
          <h1>Airbnb</h1>
        </Authenticated>
      );

      const expectedHeader = screen.getByRole("heading", { name: "Airbnb" });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
