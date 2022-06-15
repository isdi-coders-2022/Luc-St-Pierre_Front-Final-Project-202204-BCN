import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { registerThunk } from "../../redux/thunks/userThunks";
import { IRegisterForm } from "../../types/user.types";

const RegisterForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialForm: IRegisterForm = {
    name: "",
    username: "",
    email: "",
    password: "",
    image: "",
  };

  const [formData, setFormData] = useState<IRegisterForm>(initialForm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleImageInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      image: event.target.files?.[0] as File,
    });
  };

  const navigateToLogin = () => {
    navigate("/user/login");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const newFormData = new FormData();
    newFormData.append("name", formData.name);
    newFormData.append("username", formData.username);
    newFormData.append("email", formData.email);
    newFormData.append("password", formData.password);
    newFormData.append("image", formData.image);

    dispatch(registerThunk(newFormData, formData.password));

    setFormData(initialForm);
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-[568px]">
      <div className="bg-white pb-8 lg:shadow-3xl md:border md:border-[#999999] lg:border lg:border-[#e8ebed] sm:rounded-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-[568px]">
          <div className="px-4 sm:px-6 border-b-2 border-[#EBEBEB]">
            <p className="py-5 text-center text-base font-extrabold text-[#222222]">
              Log in or sign up
            </p>
          </div>

          <h2 className="my-5 px-8 lg:px-6 text-[22px] font-medium text-gray-900">
            Welcome to Airbnb
          </h2>
        </div>

        <div className="px-8 lg:px-6">
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
              <label htmlFor="image" className="sr-only">
                Avatar
              </label>
              <div className="mt-1">
                <input
                  id="image"
                  onChange={handleImageInputChange}
                  type="file"
                  accept="image/*"
                  className="appearance-none block w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#222222] focus:border-[#222222] font-light sm:text-base placeholder-[#333333]"
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
                Already have an account?
              </span>

              <button
                className="py-3 pr-4 text-sm hover:text-[#DE3151] cursor-pointer"
                onClick={navigateToLogin}
              >
                {" "}
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
