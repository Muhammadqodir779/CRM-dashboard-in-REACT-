import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaChartPie, FaUser, FaBoxOpen, FaShoppingCart, FaFileInvoice,
  FaTruck, FaGraduationCap, FaBook, FaSuitcase, FaShareAlt, FaBlog,
  FaFolderOpen, FaProjectDiagram, FaEnvelope, FaComments, FaChevronDown, FaChevronRight,
} from 'react-icons/fa';
import './Sidebar.css';
import logo from "../../assets/auth_logo.png";
import header from "../../assets/header_juftlik.png"
import search_btn from "../../assets/search_btn.png"

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState(new Set());

  const toggleSidebar = () => setOpen(!open);

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  // Accordion bo'limlari
  const accordionSections = [
    {
      id: 'customers',
      title: 'Customers',
      icon: <FaUser />,
      subItems: [
        { title: 'List', link: '/customers_list' },
        { title: 'Details', link: '/customers_details' },
        { title: 'Edit', link: '/customers_edit' }
      ]
    },
    {
      id: 'products',
      title: 'Products',
      icon: <FaBoxOpen />,
      subItems: [
        { title: 'Product List', link: '/products/list' },
        { title: 'Add Product', link: '/products/add' },
        { title: 'Categories', link: '/products/categories' }
      ]
    },
    {
      id: 'orders',
      title: 'Orders',
      icon: <FaShoppingCart />,
      subItems: [
        { title: 'Order List', link: '/orders/list' },
        { title: 'Order Details', link: '/orders/details' },
        { title: 'Order Reports', link: '/orders/reports' }
      ]
    },
    {
      id: 'invoices',
      title: 'Invoices',
      icon: <FaFileInvoice />,
      subItems: [
        { title: 'Invoice List', link: '/invoices/list' },
        { title: 'Create Invoice', link: '/invoices/create' },
        { title: 'Invoice Settings', link: '/invoices/settings' }
      ]
    },
    {
      id: 'logistics',
      title: 'Logistics',
      icon: <FaTruck />,
      subItems: [
        { title: 'Shipping', link: '/logistics/shipping' },
        { title: 'Tracking', link: '/logistics/tracking' },
        { title: 'Warehouse', link: '/logistics/warehouse' }
      ]
    },
    {
      id: 'academy',
      title: 'Academy',
      icon: <FaGraduationCap />,
      subItems: [
        { title: 'Courses', link: '/academy/courses' },
        { title: 'Students', link: '/academy/students' },
        { title: 'Certificates', link: '/academy/certificates' }
      ]
    },
    {
      id: 'jobListing',
      title: 'Job Listings',
      icon: <FaSuitcase />,
      subItems: [
        { title: 'Job Posts', link: '/jobListing/posts' },
        { title: 'Applications', link: '/jobListing/applications' },
        { title: 'Candidates', link: '/jobListing/candidates' }
      ]
    },
    {
      id: 'socialMedia',
      title: 'Social Media',
      icon: <FaShareAlt />,
      subItems: [
        { title: 'Posts', link: '/socialMedia/posts' },
        { title: 'Analytics', link: '/socialMedia/analytics' },
        { title: 'Campaigns', link: '/socialMedia/campaigns' }
      ]
    },
    {
      id: 'blog',
      title: 'Blog',
      icon: <FaBlog />,
      subItems: [
        { title: 'All Posts', link: '/blog/posts' },
        { title: 'Create Post', link: '/blog/create' },
        { title: 'Categories', link: '/blog/categories' }
      ]
    },
    {
      id: 'fileManager',
      title: 'File Manager',
      icon: <FaFolderOpen />,
      subItems: [
        { title: 'All Files', link: '/fileManager/files' },
        { title: 'Upload', link: '/fileManager/upload' },
        { title: 'Storage', link: '/fileManager/storage' }
      ]
    },
    {
      id: 'kanban',
      title: 'Kanban',
      icon: <FaProjectDiagram />,
      subItems: [
        { title: 'Boards', link: '/kanban/boards' },
        { title: 'Tasks', link: '/kanban/tasks' },
        { title: 'Team', link: '/kanban/team' }
      ]
    },
    {
      id: 'mail',
      title: 'Mail',
      icon: <FaEnvelope />,
      subItems: [
        { title: 'Inbox', link: '/mail/inbox' },
        { title: 'Compose', link: '/mail/compose' },
        { title: 'Sent', link: '/mail/sent' }
      ]
    },
    {
      id: 'chat',
      title: 'Chat',
      icon: <FaComments />,
      subItems: [
        { title: 'Messages', link: '/chat/messages' },
        { title: 'Groups', link: '/chat/groups' },
        { title: 'Settings', link: '/chat/settings' }
      ]
    }
  ];

  return (
    <div className="analytics">
      <div className={`sidebar ${open ? 'open' : 'closed'}`}>
        <div className="sidebar-header" onClick={toggleSidebar}>
          <img src={logo} alt="Logo" loading='lazy' />
          {open && <span className="sidebar-title">Devias</span>}
        </div>

        <div className="sidebar-scroll">
          <nav className="sidebar-menu">
            {/* Asosiy bo'limlar (accordion emas) */}
            <Link to="/analytics" className="sidebar-link">
              <FaChartPie /> {open && <span>Analytics</span>}
            </Link>
            <Link to="/ecommerce" className="sidebar-link">
              <FaShoppingCart /> {open && <span>E-Commerce</span>}
            </Link>
            <Link to="/crypto" className="sidebar-link">
              <FaChartPie /> {open && <span>Crypto</span>}
            </Link>
            <Link to="/account" className="sidebar-link">
              <FaUser /> {open && <span>Account</span>}
            </Link>

            {/* CONCEPTS bo'limi */}
            <div className="sidebar-section-title">{open && "CONCEPTS"}</div>

            {/* Accordion bo'limlari */}
            {accordionSections.map((section) => {
              const isExpanded = expandedSections.has(section.id);

              return (
                <div key={section.id} className="accordion-section">
                  {/* Accordion header */}
                  <div
                    className="sidebar-link accordion-header"
                    onClick={() => open && toggleSection(section.id)}
                    style={{ cursor: open ? 'pointer' : 'default' }}
                  >
                    {section.icon}
                    {open && (
                      <>
                        <span>{section.title}</span>
                        <div className="accordion-arrow">
                          {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Accordion content */}
                  {open && (
                    <div className={`accordion-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                      {section.subItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className="sidebar-link indent"
                        >
                          <span>• {item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      <div className={`analytics_main ${open ? 'main-expanded' : 'main-collapsed'}`}>
        <div className="sidebar_header">
          <img src={search_btn} alt="img" className='sidebar_header_image1' />
          <img src={header} alt="img" className='sidebar_header_image2' />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;