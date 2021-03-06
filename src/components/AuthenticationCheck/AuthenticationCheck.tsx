import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";

interface Props {
  children: JSX.Element;
}

const AuthenticationCheck = ({ children }: Props) => {
  const { authenticated } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate("/hosts/home");
  }, [authenticated, navigate]);

  if (!authenticated) {
    return children;
  } else {
    return null;
  }
};

export default AuthenticationCheck;
