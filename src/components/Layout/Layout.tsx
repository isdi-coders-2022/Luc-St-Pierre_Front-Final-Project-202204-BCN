import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";
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
      <div
        className={
          location.pathname === "/hosts/home"
            ? "px-6 sm:px-6 md:px-10 xl:px-20"
            : "px-6 sm:px-6 md:px-10 xl:mx-[7.5rem]"
        }
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
