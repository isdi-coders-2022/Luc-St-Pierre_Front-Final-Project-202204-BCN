import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const Authenticated = ({ children }: Props) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return children;
};

export default Authenticated;
