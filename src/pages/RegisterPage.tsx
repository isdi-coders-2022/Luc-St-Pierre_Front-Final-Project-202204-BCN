import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { useAppSelector } from "../redux/store/hooks";

function RegisterPage() {
  const navigate = useNavigate();
  const { name } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (name) {
      navigate("/login");
    }
  }, [name, navigate]);

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
