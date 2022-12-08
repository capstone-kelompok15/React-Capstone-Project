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
import searchLogo from "../../assets/svg/searchLogo.svg";
import {TiDelete} from 'react-icons/ti';
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/reducers/invoicesSlice";
import { useState } from "react";


const Dashboard = () => {
  const [ searchvalue, setSearchValue ] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const onChange = (e) => {
    setSearchValue(e.target.value);
    dispatch(setSearch(e.target.value));
  }

  const xIconOnClick = () => {
    setSearchValue('');
    dispatch(setSearch(''));
  }

  return (
    <main className="main">
      <header className='header'>
        <div className='headerWrapper'>
          <div className='headerLeft'>
            {location.pathname === '/home/invoices' ? 
              <div className="search-container">
                <div className="d-flex flex-row justify-content-between align-items-center w-100">
                  <div className="d-flex flex-row justify-content-start align-items-center gap-2">
                    <img src={searchLogo} alt='Not found'/>
                    <input className="header-search-input" type={'text'} placeholder='Search Invoices' onChange={onChange} value={searchvalue} />
                  </div>
                  <TiDelete style={{cursor: 'pointer'}} size={25} color={'#D62D33'} onClick={xIconOnClick} />
                </div>
              </div>
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