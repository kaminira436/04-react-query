import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "modern-normalize";

import App from "./components/App/App";

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <Toaster position="top-right" />
  </QueryClientProvider>
);