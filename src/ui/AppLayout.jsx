import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="font-outfit">
      <Header />
      <div className="w-full h-[110px]"></div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
