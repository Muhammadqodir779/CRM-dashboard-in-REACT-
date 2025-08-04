import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaChartPie, FaUser, FaBoxOpen, FaShoppingCart, FaFileInvoice,
  FaTruck, FaGraduationCap, FaBook, FaSuitcase, FaShareAlt, FaBlog,
  FaFolderOpen, FaProjectDiagram, FaEnvelope, FaComments,
} from 'react-icons/fa';
import './Sidebar.css';
import logo from "../../assets/auth_logo.png";
import header from "../../assets/header_juftlik.png"
import search_btn from "../../assets/search_btn.png"



const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => setOpen(!open);

  return (
    <div className="analytics">
      <div className={`sidebar ${open ? 'open' : 'closed'}`}>
        <div className="sidebar-header" onClick={toggleSidebar}>
          <img src={logo} alt="Logo" />
          {open && <span className="sidebar-title">Devias</span>}
        </div>

        <div className="sidebar-scroll">
          <nav className="sidebar-menu">
            {/* <Link to="/overview" className="sidebar-link"><FaHome /> {open && <span>Overview</span>}</Link> */}
            <Link to="/analytics" className="sidebar-link"><FaChartPie /> {open && <span>Analytics</span>}</Link>
            <Link to="/ecommerce" className="sidebar-link"><FaShoppingCart /> {open && <span>E-Commerce</span>}</Link>
            <Link to="/crypto" className="sidebar-link"><FaChartPie /> {open && <span>Crypto</span>}</Link>
            <Link to="/account" className="sidebar-link"><FaUser /> {open && <span>Account</span>}</Link>

            <div className="sidebar-section-title">{open && "CONCEPTS"}</div>
            <Link to="/customers" className="sidebar-link"><FaUser /> {open && <span>Customers</span>}</Link>
            <Link to="/products" className="sidebar-link"><FaBoxOpen /> {open && <span>Products</span>}</Link>
            <Link to="/orders" className="sidebar-link"><FaShoppingCart /> {open && <span>Orders</span>}</Link>
            <Link to="/invoices" className="sidebar-link"><FaFileInvoice /> {open && <span>Invoices</span>}</Link>
            <Link to="/logistics" className="sidebar-link"><FaTruck /> {open && <span>Logistics</span>}</Link>

            <Link to="/academy" className="sidebar-link"><FaGraduationCap /> {open && <span>Academy</span>}</Link>
            <Link to="/jobListing" className="sidebar-link"><FaSuitcase /> {open && <span>Job Listings</span>}</Link>
            <Link to="/socialMedia" className="sidebar-link"><FaShareAlt /> {open && <span>Social Media</span>}</Link>
            <Link to="/blog" className="sidebar-link"><FaBlog /> {open && <span>Blog</span>}</Link>
            <Link to="/fileManager" className="sidebar-link"><FaFolderOpen /> {open && <span>File Manager</span>}</Link>
            <Link to="/kanban" className="sidebar-link"><FaProjectDiagram /> {open && <span>Kanban</span>}</Link>
            <Link to="/main" className="sidebar-link"><FaEnvelope /> {open && <span>Mail</span>}</Link>
            <Link to="/chat" className="sidebar-link"><FaComments /> {open && <span>Chat</span>}</Link>
          </nav>
        </div>
      </div>

      <div className="analytics_main">

        <div className="sidebar_header">

          <img src={search_btn} alt="" className='sidebar_header_image1' />

          <img src={header} alt="" className='sidebar_header_image2' />

        </div>

        {children}

      </div>

    </div>
  );
};

export default Sidebar;
