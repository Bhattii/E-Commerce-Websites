import { FrontendLayout } from '../layout/FrontendLayout';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<FrontendLayout />}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  );
};
