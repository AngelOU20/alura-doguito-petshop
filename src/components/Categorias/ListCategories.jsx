import { useState, useEffect } from "react";
import { buscar } from "../../api/api";
import "../../assets/css/blog.css";
import { Categories } from "./Categories";

export const ListCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    buscar(`/categorias`, setCategories);
  }, []);

  return (
    <ul className="category-list container flex">
      {categories.map((category) => (
        <Categories key={category.id} {...category} />
      ))}
    </ul>
  );
};
