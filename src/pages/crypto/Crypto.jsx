import React from 'react'
import "./Crypto.css"
import CryptoBtc from '../../components/cryptoBtc/CryptoBtc'

const Crypto = () => {
  return (
    <div>

      {/* crypto header */}

      <div className="crypto_header">

        <h2 className='crypto_header_title'>Crypto</h2>

        <button className='crypto_header_btn'>➕ Add Wallet</button>

      </div>

      {/* crypto BTC */}

      <div className="crypto_btc">

        <CryptoBtc />

      </div>

    </div>
  )
}

export default Crypto
