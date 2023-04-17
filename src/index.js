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
import ProIntro from './routes/projects/Index';
import DesIndex from './routes/designs/Index';
import ProcessIntro from './routes/process/Index';
import AboutIndex from './routes/about/Index';
import ContactIndex from './routes/contact/Index';
import ResumeIndex from './routes/resume/Index';
import Project from './routes/projects/Project';
import { GlobalStyle } from './styles/GlobalStyle';
import Resume from './routes/Resume';

const router = createBrowserRouter([
  {
    path: '/',
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
            path: 'projects',
            element: <Projects />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <ProIntro />,
              },
              {
                path: 'winhalf',
                element: <Project id="winhalf" />,
              },
              {
                path: 'ebth',
                element: <Project id="ebth" />,
              },
              {
                path: 'twilight-imperium-score-tracker',
                element: <Project id="ti4" />,
              },
              {
                path: 'mindfully-website',
                element: <Project id="mindfully-website" />,
              },
              {
                path: 'mindfully-app',
                element: <Project id="mindfully-app" />,
              },
            ],
          },
          {
            path: 'designs',
            element: <Designs />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <DesIndex />,
              },
            ],
          },
          {
            path: 'process',
            element: <Process />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <ProcessIntro />,
              },
            ],
          },
          {
            path: 'about',
            element: <About />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <AboutIndex />,
              },
            ],
          },
          {
            path: 'resume',
            element: <Resume />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <ResumeIndex />,
              },
            ],
          },
          {
            path: 'contact',
            element: <Contact />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <ContactIndex />,
              },
            ],
          },
        ],
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
