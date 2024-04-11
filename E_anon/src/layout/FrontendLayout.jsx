import { Outlet } from 'react-router-dom';
import { Navbar } from './header/Navbar';

export const FrontendLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <div>footer</div>
    </div>
  );
};
