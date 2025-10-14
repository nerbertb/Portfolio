import React from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home';
import About from './home/About';

import BaseLayout from './home/layouts/base-layout';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <BaseLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'contact', element: <Contact /> },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    }
  );

  return (
    <div className="bg-[url(@/assets/layered-peaks-dark-blue.svg)] w-full min-h-dvh bg-cover bg-no-repeat bg-center overflow-x-hidden">
      <LoadingScreen />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
