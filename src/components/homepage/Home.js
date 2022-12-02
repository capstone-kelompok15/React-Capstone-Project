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

              <NavLink to='/home/dashboard' className={`${location.pathname.includes('dashboard') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={dashboard} alt="Logo" />
                Dashboard
              </NavLink>

              
              <NavLink to='/home/invoices' className={`${location.pathname.includes('invoices') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={invoice} alt="Logo" />
                Invoices
              </NavLink>

              
              <NavLink to='/home/payments' className={`${location.pathname.includes('payments') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={payment} alt="Logo" />
                Payments
              </NavLink>

              
              <NavLink to='/home/costumer' className={`${location.pathname.includes('costumer') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={customer} alt="Logo" />
                Customer
              </NavLink>

              
			        <NavLink to='/home/profile' className={`${location.pathname.includes('profile') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={profile} alt="Logo" />
                Profile
              </NavLink>
            </div>
          </div>

          <div className='nav-item3'>
          <NavLink to='/' className='nav-item4'>
            Logout
          </NavLink>
          </div>
        </nav>
      </aside>

      <Outlet/>
    </main>
  
  );
};

export default Dashboard;