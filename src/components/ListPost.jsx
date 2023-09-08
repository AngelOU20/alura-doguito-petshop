import { useEffect, useState } from "react";
import { buscar } from "../api/api";
import "../assets/css/componentes/card.css";
import PropTypes from "prop-types";
import { PostCard } from "./";

export const ListPost = ({ url }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    buscar(url, setPosts);
  }, [url]);

  return (
    <section className="posts container">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </section>
  );
};

ListPost.propTypes = {
  url: PropTypes.string,
};
