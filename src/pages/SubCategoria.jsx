import { useParams } from "react-router-dom";
import { ListPost } from "../components";

export const SubCategoria = () => {
  const { subcategoria } = useParams();
  return (
    <>
      <ListPost url={`posts?subcategoria=${subcategoria}`} />
    </>
  );
};
