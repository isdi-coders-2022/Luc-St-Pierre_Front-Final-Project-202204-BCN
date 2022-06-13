import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { localStorageMock } from "../../mocks/localStorageMock";
import { mockUserAuthenticated } from "../../mocks/mockUser";
import HomePage from "../../pages/HomePage";
import { store } from "../../redux/store/store";
import Layout from "../Layout/Layout";
import Navigation from "./Navigation";

const getLocalStorage = localStorageMock;

const saveStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

const removeStorage = (key: string) => {
  window.localStorage.removeItem("token");
};

Object.defineProperty(window, "localStorage", {
  value: getLocalStorage,
});

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a Navigation component", () => {
  const userData = mockUserAuthenticated;

  describe("When it's rendered", () => {
    test("Then it should display 1 link 'Become a Host'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Layout>
              <HomePage />
            </Layout>
          </Provider>
        </BrowserRouter>
      );

      const expectedLinks = screen.queryAllByRole("link");

      expect(expectedLinks[0]).toBeInTheDocument();
    });
  });

  test("Then it should display the menu items button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navigation userData={userData} />
        </Provider>
      </BrowserRouter>
    );

    const logoutButton = screen.getByRole("button", {
      name: "Open user menu",
    });
    userEvent.click(logoutButton);

    expect(logoutButton).toBeInTheDocument();
  });

  describe("When it's invoked and user click no the logout button", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      const logoutButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(logoutButton);

      const logout = screen.getByRole("menuitem", {
        name: "Log out",
      });

      fireEvent.click(logout);

      removeStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked and user click on the link 'Notifications'", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      saveStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      const openMenuButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(openMenuButton);

      const notificationLink = screen.getByText("Notifications");

      userEvent.click(notificationLink);

      expect(global.window.location.href).toContain(
        "http://localhost/hosts/home"
      );
    });
  });

  describe("When it's invoked and user click on the link 'Wishlists'", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      saveStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      const openMenuButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(openMenuButton);

      const Wishlists = screen.getByText("Wishlists");

      userEvent.click(Wishlists);

      expect(global.window.location.href).toContain(
        "http://localhost/hosts/home"
      );
    });
  });

  describe("When it's invoked and user click on the link 'Host your home'", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      saveStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      const openMenuButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(openMenuButton);

      const hostHomeText = screen.getByText("Manage listings");

      userEvent.click(hostHomeText);

      expect(global.window.location.href).toContain(
        "http://localhost/hosts/home"
      );
    });
  });

  describe("When it's invoked and user click on the link 'Account'", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      saveStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      const openMenuButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(openMenuButton);

      const AccountText = screen.getByText("Account");

      userEvent.click(AccountText);

      expect(global.window.location.href).toContain(
        "http://localhost/hosts/home"
      );
    });
  });

  describe("When it's invoked and user click on the link 'Log out'", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      saveStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      const openMenuButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(openMenuButton);

      const LogOutText = screen.getByText("Log out");

      userEvent.click(LogOutText);

      expect(global.window.location.href).toContain(
        "http://localhost/hosts/home"
      );
    });
  });

  describe("When it's invoked and user click on the link 'Log in'", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      removeStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      const openMenuButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(openMenuButton);

      const logInText = screen.getByRole("menuitem", {
        name: "Log in",
      });

      userEvent.click(logInText);

      expect(global.window.location.href).toContain(
        "http://localhost/hosts/home"
      );
    });
  });

  describe("When it's invoked and user click on the link 'Sign up'", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      removeStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      const openMenuButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(openMenuButton);

      const signUpText = screen.getByRole("menuitem", {
        name: "Sign up",
      });

      userEvent.click(signUpText);

      expect(global.window.location.href).toContain(
        "http://localhost/hosts/home"
      );
    });
  });

  describe("When it's invoked and user click on the link 'host your home'", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      removeStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      const openMenuButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(openMenuButton);

      const homeYourHomeText = screen.getByRole("menuitem", {
        name: "Host your home",
      });

      userEvent.click(homeYourHomeText);

      expect(global.window.location.href).toContain(
        "http://localhost/hosts/home"
      );
    });
  });

  describe("When it's invoked and user click on the link 'log out'", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      removeStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation userData={userData} />
          </Provider>
        </BrowserRouter>
      );

      const openMenuButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      fireEvent.click(openMenuButton);

      const logoutText = screen.getByRole("menuitem", {
        name: "Log out",
      });

      userEvent.click(logoutText);

      expect(global.window.location.href).toContain(
        "http://localhost/hosts/home"
      );
    });
  });
});
