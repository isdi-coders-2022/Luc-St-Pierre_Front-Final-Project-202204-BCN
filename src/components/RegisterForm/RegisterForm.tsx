import { ChangeEvent, FormEvent, useState } from "react";

interface IRegisterForm {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
}

function RegisterForm(): JSX.Element {
  const initialForm: IRegisterForm = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<IRegisterForm>(initialForm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormData(formData);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[568px]">
      <div className="bg-white pb-8 shadow-3xl border border-[#e8ebed] sm:rounded-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-[568px]">
          <div className="flex items-center justify-between px-4 sm:px-6 border-b-2 border-[#EBEBEB]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <p className="py-5 text-center mr-48 text-base font-extrabold text-[#222222]">
              Log in or sign up
            </p>
          </div>

          <h2 className="my-5 px-4 sm:px-6 text-[22px] font-medium text-gray-900">
            Welcome to Airbnb
          </h2>
        </div>

        <div className="px-4 sm:px-6">
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <div className="mt-1">
                <input
                  data-testid="inputName"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  className="appearance-none block w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                  placeholder="Name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <div className="mt-1">
                <input
                  data-testid="inputUsername"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  type="text"
                  autoComplete="off"
                  className="appearance-none block w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                  placeholder="Username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="mt-1">
                <input
                  data-testid="inputEmail"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  autoComplete="off"
                  className="appearance-none block w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="mt-1">
                <input
                  data-testid="inputPassword"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  autoComplete="off"
                  className="appearance-none block w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#DE3151] hover:bg-[#f43054] focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-2">
            <div className="flex justify-center items-center text-sm">
              <span className="px-2 bg-white text-black font-medium">
                Already have an account?
              </span>

              <a
                href="/login"
                type="submit"
                className="py-3 pr-4 text-sm hover:text-[#DE3151] cursor-pointer"
              >
                {" "}
                Sign In
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="/facebook"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="/twitter"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="/github"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
