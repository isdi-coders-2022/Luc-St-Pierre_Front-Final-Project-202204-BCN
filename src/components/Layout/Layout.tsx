import Navigation from "../Navigation/Navigation";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Navigation />
      <div className="container px-4 sm:px-10 xl:px-20">{children}</div>
    </>
  );
};

export default Layout;
