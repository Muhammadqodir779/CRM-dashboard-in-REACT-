import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth_Forgot_Password from './pages/auth_forgot_password/Auth_Forgot_Password'
import Auth_Register from './pages/auth_register/Auth_Register'
import Auth_Reset_Password from './pages/auth_reset_password/Auth_Reset_Password'
import Auth_Verify_Code from './pages/auth_verify_code/Auth_Verify_Code'
import Home from './pages/home/Home'
import Analytics from './pages/analytics/Analytics'
import Ecommerce from './pages/ecommerce/Ecommerce'
import Crypto from './pages/crypto/Crypto'
import Account from './pages/account/Account'
import Customers from './pages/customers/Customers'
import Products from './pages/products/Products'
import Orders from './pages/orders/Orders'
import Invoices from './pages/invoices/Invoices'
import Academy from './pages/academy/Academy'
import JobListing from './pages/jobListing/JobListing'
import SocialMedia from './pages/socialMedia/SocialMedia'
import Blog from './pages/blog/Blog'
import FileManager from './pages/fileManager/FileManager'
import Kanban from './pages/kanban/Kanban'
import Main from './pages/main/Main'
import Chat from './pages/chat/Chat'
import Sidebar from './pages/sidebar/Sidebar'
import Logistics from './pages/logistics/Logistics'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth_forgot_password' element={<Auth_Forgot_Password />} />
        <Route path='/auth_register' element={<Auth_Register />} />
        <Route path='/auth_reset_password' element={<Auth_Reset_Password />} />
        <Route path='/auth_verify_code' element={<Auth_Verify_Code />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/ecommerce' element={<Ecommerce />} />
        <Route path='/crypto' element={<Crypto />} />
        <Route path='/account' element={<Account />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/invoices' element={<Invoices />} />
        <Route path='/logistics' element={<Logistics />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/jobListing' element={<JobListing />} />
        <Route path='/socialMedia' element={<SocialMedia />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/fileManager' element={<FileManager />} />
        <Route path='/kanban' element={<Kanban />} />
        <Route path='/main' element={<Main />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
