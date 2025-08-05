import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />

      <main className="flex-1 pt-[120px]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
