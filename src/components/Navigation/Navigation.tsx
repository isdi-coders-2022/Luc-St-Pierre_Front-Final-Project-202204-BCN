import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import getClassNames from "../../utils/getClassNames";
import { useAppDispatch } from "../../redux/store/hooks";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { IUser } from "../../types/user.types";
import { logOutActionCreator } from "../../redux/reducers/features/userSlice/userSlice";

const Navigation = ({
  userData: { image, imageBackup },
}: {
  userData: IUser;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { placeId } = useParams();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    dispatch(logOutActionCreator());
    localStorage.removeItem("token");
  };

  const classMargin =
    location.pathname === `/places/${placeId}` ? "xl:mx-[12.5rem]" : "xl:px-20";

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 bg-white border-0 md:border-b-2 md:border-gray-100 z-[100]"
    >
      {({ open }) => (
        <>
          <div
            className={`max-w-full mx-auto px-4 sm:px-6 md:px-10 ${classMargin}`}
          >
            <div className="flex justify-between h-20">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/hosts/home">
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="../assets/airbnb-logo.png"
                      alt="airbnb-logo"
                    />
                  </NavLink>

                  <NavLink to="/hosts/home">
                    <img
                      className="hidden md:block lg:hidden h-8 w-auto"
                      src="../assets/logo-icon.png"
                      alt="airbnb-logo"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="min-w-0 max-h-[56px] flex-1 md:px-6 lg:px-0 xl:col-span-6 md:hidden self-center border border-gray-200 shadow-4xl rounded-full">
                <div className="h-full flex items-center md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                  <div className="w-full h-full flex justify-between items-center">
                    <div>
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative pl-5">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                          <SearchIcon
                            className="h-5 w-5 text-[#222222]"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full bg-white py-2 pl-8 pr-3 font-semibold text-sm placeholder-[#222222] focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Where to?"
                          type="search"
                        />
                      </div>
                    </div>

                    <div className="h-[56px] flex items-center justify-center">
                      <button className="flex justify-center items-center h-[36px] w-[36px] mx-[10px] rounded-full border-2 border-gray-200">
                        <img src="/assets/show-filters.png" alt="filters" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex md:ml-6 md:items-center">
                <a
                  href="/host/become-a-host"
                  className="block px-4 py-2 text-sm text-[#333333] font-semibold"
                >
                  Become a Host
                </a>

                <Menu as="div" className="ml-3 relative z-50">
                  <div>
                    <Menu.Button className="bg-white w-[77px] h-[42px] inline-flex items-center rounded-full text-sm focus:outline-none border border-[#CCCCCC] pl-[12px] pr-[5px] py-[5px] hover:shadow-5xl transition-shadow ease-out delay-100 ">
                      <span className="sr-only">Open user menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[4] w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                      <img
                        className="h-[30px] w-[30px] rounded-full ml-3"
                        src={image ? imageBackup : "../assets/avatar.png"}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[240px] border border-gray-100 rounded-2xl shadow-4xl py-1 bg-white ">
                      {token ? (
                        <>
                          <div className="border-0 border-b-2 py-1 border-gray-100">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/wishlists"
                                  className={getClassNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-3 text-sm text-[#222222]"
                                  )}
                                >
                                  Wishlists
                                </a>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="border-0 border-b-2 py-1 border-gray-100">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/host/become-a-host"
                                  className={getClassNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-3 text-sm text-[#222222]"
                                  )}
                                >
                                  Manage listings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/account"
                                  className={getClassNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-3 text-sm text-[#222222]"
                                  )}
                                >
                                  Account
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={getClassNames(
                                    active ? "bg-gray-100 w-full" : "",
                                    "w-full flex  px-4 py-3 text-sm text-[#222222]"
                                  )}
                                  onClick={handleLogout}
                                >
                                  Log out
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="border-0 border-b-2 py-1 border-gray-100">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/user/login"
                                  className={getClassNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-3 text-sm text-[#222222]"
                                  )}
                                >
                                  Log in
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/user/register"
                                  className={getClassNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-3 text-sm text-[#222222]"
                                  )}
                                >
                                  Sign up
                                </a>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="py-1 border-gray-100">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/become"
                                  className={getClassNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-3 text-sm text-[#222222]"
                                  )}
                                >
                                  Host your home
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={getClassNames(
                                    active ? "bg-gray-50 w-full" : "",
                                    "w-full flex  px-4 py-3 text-sm text-[#222222]"
                                  )}
                                  onClick={handleLogout}
                                >
                                  Log out
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
