import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { loginThunk } from "../../redux/thunks/userThunks";
import { ILoginForm } from "../../types/user.types";

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialForm: ILoginForm = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<ILoginForm>(initialForm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const navigateToRegister = () => {
    navigate("/user/register");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(loginThunk(formData));
    setFormData(initialForm);
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-[568px]">
      <div className="bg-white pb-8 shadow-3xl border border-[#e8ebed] sm:rounded-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-[568px]">
          <div className="px-4 sm:px-6 border-b-2 border-[#EBEBEB]">
            <p className="py-5 text-center text-base font-extrabold text-[#222222]">
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
                Sign in
              </button>
            </div>
          </form>

          <div className="relative mt-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex justify-center items-center text-sm">
              <span className="px-2 bg-white text-black font-medium">
                Don't have an account?
              </span>

              <button
                onClick={navigateToRegister}
                className="py-3 pr-4 text-sm hover:text-[#DE3151] cursor-pointer"
              >
                {" "}
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
