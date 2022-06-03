/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Navigation = (): JSX.Element => {
  return (
    <Disclosure as="nav" className="bg-white border-b-2 border-gray-100">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-4 sm:px-10 xl:px-20">
            <div className="flex justify-between h-20">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="lg:block h-8 w-auto"
                    src="../assets/airbnb-logo.png"
                    alt="airbnb-logo"
                  />
                </div>
              </div>

              <div className="sm:ml-6 sm:flex sm:items-center">
                <a
                  href="/user"
                  className="block px-4 py-2 text-sm text-[#333333] font-semibold"
                >
                  Become a Host
                </a>

                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
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
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-7 w-7 rounded-full"
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
                            className={classNames(
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
                            className={classNames(
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
                            className={classNames(
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
