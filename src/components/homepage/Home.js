import React, { useEffect, useState } from 'react';
import Symbol from "../../assets/image/Symbol.png";
import './SideNavBar.css';
import dashboard from "../../assets/image/dashboard.png"
import invoice from "../../assets/image/invoice.png"
import payment from "../../assets/image/payment.png"
import customer from "../../assets/image/customer.png"
import profile from "../../assets/image/profile.png"
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location]);

  return (
    <main className="main">
      <header className='header'>
      </header>

      <aside className="sidebar">
        <nav className='nav'>
          <div>
            <a href='/' className='navbar-brand2'>
			<img
            src={Symbol}
            alt="Logo"
            width="22"
            height="22"
            className="img-fluid me-2"
          />
          My<span className="span-invoice">INVOICE</span>
            </a>

            <div className='nav-list'>

              <NavLink to='/home/dashboard' className={`nav-item2 ${currentPath.includes('dashboard') ? 'active2' : ''}`}>
			          <img className="logo4 ms-3 ps-2 me-2" src={dashboard} alt="Logo" />
                Dashboard
              </NavLink>

              
              <NavLink to='/home/invoices' className={`nav-item2 ${currentPath.includes('invoices') ? 'active2' : ''}`}>
			          <img className="logo4 ms-3 ps-2 me-2" src={invoice} alt="Logo" />
                Invoices
              </NavLink>

              
              <NavLink to='/home/payments' className={`nav-item2 ${currentPath.includes('payments') ? 'active2' : ''}`}>
			          <img className="logo4 ms-3 ps-2 me-2" src={payment} alt="Logo" />
                Payments
              </NavLink>

              
              <NavLink to='/home/costumer' className={`nav-item2 ${currentPath.includes('costumer') ? 'active2' : ''}`}>
			          <img className="logo4 ms-3 ps-2 me-2" src={customer} alt="Logo" />
                Customer
              </NavLink>

              
			        <NavLink to='/home/profile' className={`nav-item2 ${currentPath.includes('profile') ? 'active2' : ''}`}>
			          <img className="logo4 ms-3 ps-2 me-2" src={profile} alt="Logo" />
                Profile
              </NavLink>
            </div>
          </div>

          <div className='nav-item3'>
          <a href='#' className='nav-item4'>
            <span className='nav-item3-name'>Logout</span>
          </a>
          </div>
        </nav>
      </aside>

      <Outlet/>
    </main>
  
  );
};

export default Dashboard;