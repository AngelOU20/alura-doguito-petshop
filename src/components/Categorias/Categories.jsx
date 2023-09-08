import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Categories = ({ id, nombre }) => {
  return (
    <Link to={`/categoria/${id}`}>
      <li className={`category-list__category category-list__category--${id}`}>
        {nombre}
      </li>
    </Link>
  );
};

Categories.propTypes = {
  id: PropTypes.string,
  nombre: PropTypes.string,
};
