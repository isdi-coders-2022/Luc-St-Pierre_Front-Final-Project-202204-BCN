import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import { useAppSelector } from "../redux/store/hooks";

const LoginPage = () => {
  const navigate = useNavigate();
  const { id } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (id && id !== "") {
      navigate("/home");
    }
  }, [id, navigate]);

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
