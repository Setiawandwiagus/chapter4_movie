import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MoviesPage } from "./pages/MoviesPage";
import { HalamanUtama } from "./pages/HalamanUtama";

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      <React.StrictMode>
        <HalamanUtama />
      </React.StrictMode>
    </QueryClientProvider>
  </React.StrictMode>
);
