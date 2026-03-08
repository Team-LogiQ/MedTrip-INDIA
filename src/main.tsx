
  import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { Auth0Provider } from "./app/auth/Auth0Provider.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider>
    <App />
  </Auth0Provider>
);
  