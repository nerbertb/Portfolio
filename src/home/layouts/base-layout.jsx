import NavBar from '../../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function BaseLayout() {
  return (
    <div className="">
      <NavBar />
      <main className="">
        
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
