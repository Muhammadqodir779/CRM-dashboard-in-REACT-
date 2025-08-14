import React from 'react'
import "./Account.css"
import AccountPages from "../../components/accountPages/AccountPages"

const Account = () => {
  return (
    <div>

      <div className='account'>

        <h2 className='font-bold text-[34px]'>Account</h2>

      </div>

      {/* account items */}

      <div className="account_items">

        <AccountPages />

      </div>

    </div>
  )
}

export default Account
