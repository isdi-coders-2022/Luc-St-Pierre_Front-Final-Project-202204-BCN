import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";

interface Props {
  children: JSX.Element;
}

const AuthenticationCheck = ({ children }: Props) => {
  const { name } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) navigate("/login");
  }, [name, navigate]);

  if (name) {
    return children;
  }

  return null;
};

export default AuthenticationCheck;
