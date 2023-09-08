import { ListCategories, ListPost } from "../components";

export const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />
      <ListPost url="/posts" />
    </main>
  );
};
