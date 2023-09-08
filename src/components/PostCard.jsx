import { Link } from "react-router-dom";
import "../assets/css/componentes/card.css";
import PropTypes from "prop-types";

export const PostCard = ({ id, title, metadescription, categoria }) => {
  return (
    <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`}>
      <article>
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__meta">{metadescription}</p>
      </article>
    </Link>
  );
};

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  metadescription: PropTypes.string,
  categoria: PropTypes.string,
};
