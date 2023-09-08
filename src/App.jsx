import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
