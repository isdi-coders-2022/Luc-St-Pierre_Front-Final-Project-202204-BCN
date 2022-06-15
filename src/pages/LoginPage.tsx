import MobileNav from "../components/common/form/autocomplete/MobileNav";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
      <div className="fixed bottom-0 w-full border-t border-gray-200 py-2.5 md:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default LoginPage;
