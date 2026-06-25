import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "modern-normalize";

import App from "./components/App/App";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <>
    <App />
    <Toaster position="top-right" />
  </>
);