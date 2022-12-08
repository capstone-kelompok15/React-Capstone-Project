import Symbol from "../../assets/image/Symbol.png";
import './SideNavBar.css';
import dashboard from "../../assets/image/dashboard.png"
import invoice from "../../assets/image/invoice.png"
import payment from "../../assets/image/payment.png"
import customer from "../../assets/image/customer.png"
import profile from "../../assets/image/profile.png"
import logout from "../../assets/image/logout.png"
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import avatar from "../../assets/image/jisoo.jpg"
import InvoicesSearchContainer from "./InvoicesSearchContainer";
import PaymentSearchContainer from "./PaymentsSearchContainer";


const Dashboard = () => {
  const location = useLocation();

  return (
    <main className="main">
      <header className='header'>
        <div className='headerWrapper'>
          <div className='headerLeft'>
            {location.pathname === '/home/invoices' ? 
              <InvoicesSearchContainer/>
            : location.pathname === '/home/payments' ? 
              <PaymentSearchContainer/>
            : <></>}
          </div>
          <div className='headerRight'>
            <div className='headerIcons'>
              <div className='notif'>
                <i className="bell fa fa-bell" aria-hidden="true"/>
              </div>
            </div>
            <div className='headerProfile'>
            <img src={avatar} alt='' className='headerAvatar'/>
            <div className='headerName'>
              <h1 className='username'>Kim Jisoo</h1>
              <p className='company'>Black Pink</p>
            </div>
            </div>
          </div>
        </div>
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

              <NavLink replace={true} to='/home/dashboard' className={`${location.pathname.includes('dashboard') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={dashboard} alt="Logo" />
                Dashboard
              </NavLink>

              
              <NavLink replace={true} to='/home/invoices' className={`${location.pathname.includes('invoices') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={invoice} alt="Logo" />
                Invoices
              </NavLink>

              
              <NavLink replace={true} to='/home/payments' className={`${location.pathname.includes('payments') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={payment} alt="Logo" />
                Payments
              </NavLink>

              
              <NavLink replace={true} to='/home/costumer' className={`${location.pathname.includes('costumer') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={customer} alt="Logo" />
                Customer
              </NavLink>

              
			        <NavLink replace={true} to='/home/profile' className={`${location.pathname.includes('profile') ? 'nav-item2-active' : 'nav-item2'}`}>
			          <img className="logo4 ms-3 ps-2 me-1" src={profile} alt="Logo" />
                Profile
              </NavLink>
            </div>
          </div>
          
        
          <NavLink to='/' className='nav-item3'>
            <img className="logo4 ms-1 ps-2 me-1" src={logout} alt="Logo" />
            Logout
          </NavLink>
      
        </nav>
      </aside>

      <Outlet/>
    </main>
  
  );
};

export default Dashboard;