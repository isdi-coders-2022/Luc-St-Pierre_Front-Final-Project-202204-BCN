/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import getClassNames from "../../utils/getClassNames";

const Navigation = (): JSX.Element => {
  return (
    <Disclosure
      as="nav"
      className="bg-white border-0 md:border-b-2 md:border-gray-100"
    >
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
            <div className="flex justify-between h-20">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="../assets/airbnb-logo.png"
                    alt="airbnb-logo"
                  />
                  <img
                    className="hidden md:block lg:hidden h-8 w-auto"
                    src="../assets/logo-icon.png"
                    alt="airbnb-logo"
                  />
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
                  href="/user"
                  className="block px-4 py-2 text-sm text-[#333333] font-semibold"
                >
                  Become a Host
                </a>

                <button
                  type="button"
                  className="bg-white p-1.5 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">Language and region</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#333"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </button>

                <Menu as="div" className="ml-3 relative">
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
                        src="../assets/avatar.png"
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[240px] border border-gray-100 rounded-2xl shadow-4xl py-1 bg-white">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/register"
                            className={getClassNames(
                              active ? "bg-gray-50" : "",
                              "block px-4 py-3 text-sm text-[#222222]"
                            )}
                          >
                            Sign up
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            className={getClassNames(
                              active ? "bg-gray-50" : "",
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
                            href="/become"
                            className={getClassNames(
                              active ? "bg-gray-50" : "",
                              "block px-4 py-3 text-sm text-[#222222]"
                            )}
                          >
                            Host your home
                          </a>
                        )}
                      </Menu.Item>
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
