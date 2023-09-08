import { Route, Routes } from "react-router-dom";
import { Home, Page404, Sobre } from "../pages";
import { HeaderComponent } from "../components/HeaderComponent";

export const AppRouter = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
