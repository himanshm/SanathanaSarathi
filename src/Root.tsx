import { Suspense, lazy } from 'react';
import { Route, Outlet } from 'react-router-dom';

import SpinnerFullPage from './components/UI/Spinners/SpinnerFullPage.tsx';
import AppLayout from './pages/AppLayout.tsx';

const HomePage = lazy(() => import('./pages/Home.tsx'));
const AboutPage = lazy(() => import('./pages/About.tsx'));

// You could also create a layout route that wraps a React.Suspense around an Outlet component.

const SuspenseLayout = () => (
  <Suspense fallback={<SpinnerFullPage />}>
    <Outlet />
  </Suspense>
);

const Root = (
  <Route element={<SuspenseLayout />}>
    <Route element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
    </Route>
  </Route>
);

export default Root;
