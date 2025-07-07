import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TheBlog from "./Pages/TheBolg/TheBlog";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import Root from "./Components/Root"; 
import NewsLetter from "./Pages/NewsLetter/NewsLetter";
import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About";
import { Provider } from "react-redux";
import store from "./redux/store";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <TheBlog />,
      },
      {
        path: "blog-detail/:id",
        element: <BlogDetail />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
