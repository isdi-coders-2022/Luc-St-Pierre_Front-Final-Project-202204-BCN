import { render, screen } from "@testing-library/react";
import AuthenticationCheck from "./AuthenticationCheck";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockAuthenticated = true;

jest.mock("../../redux/store/hooks", () => ({
  useAppSelector: () => ({ authenticated: mockAuthenticated }),
}));

describe("Given a AuthenticationCheck wrapper component", () => {
  describe("When it's invoked with no user authentication", () => {
    test("Then it should call the navigate to home page", () => {
      render(
        <AuthenticationCheck>
          <h1>Airbnb</h1>
        </AuthenticationCheck>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/hosts/home");
    });

    test("Then it should render it's children when the use is authenticated", () => {
      mockAuthenticated = false;

      render(
        <AuthenticationCheck>
          <h1>Airbnb</h1>
        </AuthenticationCheck>
      );

      const expectedHeader = screen.getByRole("heading", { name: "Airbnb" });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
