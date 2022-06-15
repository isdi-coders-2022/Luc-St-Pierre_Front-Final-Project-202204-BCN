import MobileNav from "../components/common/form/autocomplete/MobileNav";
import RegisterForm from "../components/RegisterForm/RegisterForm";

function RegisterPage() {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <RegisterForm />
      </div>
      <div className="fixed bottom-0 w-full border-t bg-white border-gray-200 py-2.5 md:hidden">
        <MobileNav />
      </div>
    </>
  );
}

export default RegisterPage;
