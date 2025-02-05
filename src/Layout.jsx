import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-screen'>
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;