import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from '@mantine/core';
import { privateRoutes, publicRoutes } from '@routes/routes';

import { ProfileContext } from '../../../context';

const AppRouter = () => {
  const profileAuth = useContext(ProfileContext);

  if (profileAuth?.isLoading) {
    return <Loader size={50} />;
  }

  return (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      {privateRoutes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={profileAuth?.user ? <Component /> : <Navigate to="/login" />}
        />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
