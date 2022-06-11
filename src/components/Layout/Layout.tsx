import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";
import Categories from "../Categories/Categories";
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
      {location.pathname === "/home" ? <Categories /> : ""}

      <div className="px-4 sm:px-6 md:px-10 xl:px-20 xl:mx-[150px]">
        {children}
      </div>
    </>
  );
};

export default Layout;
