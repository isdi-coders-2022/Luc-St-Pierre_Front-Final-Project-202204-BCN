import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";
// import Categories from "../Categories/Categories";
import Navigation from "../Navigation/Navigation";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
  const { userData } = useAppSelector((state) => state.user);
  const location = useLocation();

  return (
    <>
      <Navigation userData={userData} />
      {/* {location.pathname === "/hosts/home" ? <Categories /> : ""} */}
      <div
        className={
          location.pathname === "/hosts/home"
            ? "px-4 sm:px-6 md:px-10 xl:px-20"
            : "px-4 sm:px-6 md:px-10 xl:mx-[12.5rem]"
        }
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
