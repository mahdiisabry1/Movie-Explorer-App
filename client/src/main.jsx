import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./routes/HomePage.jsx";
import SignInPage from "./routes/SignInPage.jsx";
import SignupPage from "./routes/SignupPage.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";
import FavouritesPage from "./routes/FavouritesPage.jsx";
import MoviesPage from "./routes/MoviesPage.jsx";
import { FavouritesProvider } from "./context/FavouritesContext.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignupPage />,
      },
      {
        path: "/favourites",
        element: <FavouritesPage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
      <FavouritesProvider>
        <RouterProvider router={router} />
      </FavouritesProvider>
    </MovieProvider>
  </StrictMode>
);
