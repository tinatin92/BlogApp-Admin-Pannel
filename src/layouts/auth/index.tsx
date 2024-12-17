import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full">
        <main className=" py-8 flex-grow">
            <h1>AuthLayout layout</h1>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
