import React, { useState } from 'react';
import Symbol from "../../assets/image/Symbol.png";
import './SideNavBar.css';
import dashboard from "../../assets/image/dashboard.png"
import invoice from "../../assets/image/invoice.png"
import payment from "../../assets/image/payment.png"
import customer from "../../assets/image/customer.png"
import profile from "../../assets/image/profile.png"

const Dashboard = () => {
  const [show, setShow] = useState(false);

  return (
	
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
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
              <a href='#' className='nav-item2 active2'>
			  <img className="logo4 ms-5 ps-2 me-2" src={dashboard} alt="Logo" />
                <span className='nav-item2-name'>Dashboard</span>
              </a>
              <a href='#' className='nav-item2'>
			  <img className="logo4 ms-5 ps-2 me-2" src={invoice} alt="Logo" />
                <span className='nav-item2-name'>Invoices</span>
              </a>
              <a href='#' className='nav-item2'>
			  <img className="logo4 ms-5 ps-2 me-2" src={payment} alt="Logo" />
                <span className='nav-item2-name'>Payments</span>
              </a>
              <a href='#' className='nav-item2'>
			  <img className="logo4 ms-5 ps-2 me-2" src={customer} alt="Logo" />
                <span className='nav-item2-name'>Customer</span>
              </a>
			  <a href='#' className='nav-item2'>
			  <img className="logo4 ms-5 ps-2 me-2" src={profile} alt="Logo" />
                <span className='nav-item2-name'>Profile</span>
              </a>
            </div>
          </div>

          <a href='#' className='nav-item2'>
            <span className='nav-item2-name'>Logout</span>
          </a>
        </nav>
      </aside>

      <h1>Content</h1>
    </main>
  );
};

export default Dashboard;