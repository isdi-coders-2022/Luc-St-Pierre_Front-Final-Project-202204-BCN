import Categories from "../Categories/Categories";
import Navigation from "../Navigation/Navigation";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Navigation />
      <Categories />
      <div className=" px-4 sm:px-6 md:px-10 xl:px-20">{children}</div>
    </>
  );
};

export default Layout;
