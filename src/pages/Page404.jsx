import image from "../assets/image/doguito404.svg";
import "../assets/css/404.css";

export const Page404 = () => {
  return (
    <main className="container flex flex--center flex--column error-page">
      <h1 className="title">Error 404</h1>
      <img
        className="dog-image"
        src={image}
        style={{ width: "60%" }}
        alt="Doguito"
      />
      <p className="notfound-text">Esta página no existe</p>
    </main>
  );
};
