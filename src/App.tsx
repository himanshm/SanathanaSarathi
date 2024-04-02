import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Root from './Root';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(Root));
  return <RouterProvider router={router} />;
}

export default App;
