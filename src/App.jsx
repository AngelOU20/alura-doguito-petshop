import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  const location = window.location;
  console.log(location);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
