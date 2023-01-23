import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './routes/About';
import Contact from './routes/Contact';
import Designs from './routes/Designs';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import Process from './routes/Process';
import Projects from './routes/Projects';
import IndexProjects from './routes/projects/IndexProjects';
import Project from './routes/projects/Project';
import { GlobalStyle } from './styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "projects",
            element: <Projects />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <IndexProjects />,
              },
              {
                path: "winhalf",
                element: <Project id="winhalf" />,
              },
            ],
          },
          {
            path: "designs",
            element: <Designs />,
          },
          {
            path: "process",
            element: <Process />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ]
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
