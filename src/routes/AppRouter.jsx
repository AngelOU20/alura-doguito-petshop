import { Route, Routes } from "react-router-dom";
import { Home, Page404, Sobre, Post, Categoria } from "../pages";
import { HeaderComponent } from "../components";

export const AppRouter = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="posts/:id" element={<Post />} />

        <Route path="categoria/:id/*" element={<Categoria />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
