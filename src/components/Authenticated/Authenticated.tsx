import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";

interface Props {
  children: JSX.Element;
}

const Authenticated = ({ children }: Props) => {
  const { userData } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.name) {
      navigate("/login");
    }
  }, [navigate, userData.name]);

  return children;
};

export default Authenticated;
