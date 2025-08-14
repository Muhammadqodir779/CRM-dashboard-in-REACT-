import React from 'react'
import "./Crypto.css"
import CryptoBtc from '../../components/cryptoBtc/CryptoBtc'
import CryptoEth from '../../components/cryptoEth/CryptoEth';
import { FaPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import bitcoin from "../../assets/crypto-bitcoin.png"
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import crypto_eth from "../../assets/crypto-eth.png"
import crypto_card from "../../assets/crypto-card.png"
import CryptoCurrent from "../../components/cryptoCurrent/CryptoCurrent"
import { MdNorthEast } from "react-icons/md";
import { MdOutlineSouthEast } from "react-icons/md";
import CryptoTranszction from "../../components/cryptoTransaction/CryptoTransaction";
import CryptoOperation from "../../components/cryptoOperation/CryptoOperation"
import CryptoPro from "../../components/cryptoPro/CryptoPro"



const Crypto = () => {
  return (
    <div>

      {/* crypto header */}

      <div className="crypto_header">

        <h2 className='crypto_header_title'>Crypto</h2>

        <button className='crypto_header_btn'>
          <FaPlus />
          Add Wallet
        </button>

      </div>

      {/* crypto-cards */}

      <div className="crypto_cards">

        {/* crypto BTC */}

        <div className="crypto_btc">

          <h3 className='crypto_btc_title'>0.7568 <span className='crypto_btc_title_span'> BTC</span>
          </h3>

          <BsThreeDots style={{
            fontSize: "24px",
            marginTop: "-50px",
            marginLeft: "320px",
            cursor: "pointer"
          }} />

          <p className='crypto_btc_price'>$16,213.20</p>

          <CryptoBtc />

          <img src={bitcoin} alt="bitcoin" className='crypto_btc_image' />

          <p className='crypto_btc_paragraph1'>BTC/USD</p>

          <p className='crypto_btc_paragraph2'>
            <FaAngleUp />
            0.56%
          </p>

        </div>

        {/* crypto_eth */}

        <div className="crypto_eth">

          <h3 className='crypto_btc_title'>2.0435 <span className='crypto_btc_title_span'> ETH</span>
          </h3>

          <BsThreeDots style={{
            fontSize: "24px",
            marginTop: "-50px",
            marginLeft: "320px",
            cursor: "pointer"
          }} />

          <p className='crypto_btc_price'>$9,626.80</p>

          <CryptoEth />

          <img src={crypto_eth} alt="bitcoin" className='crypto_btc_image' />

          <p className='crypto_btc_paragraph1'>ETH/USD</p>

          <p className='crypto_eth_paragraph2'>
            <FaAngleDown />
            -0.32%
          </p>

        </div>

        {/* crypto-card */}

        <div className="crypto_card">

          <img src={crypto_card} alt="img" className='crypto_card_image' />

        </div>

      </div>

      {/* crypto-current */}

      <div className="crypto_current">

        <h2 className='crypto_current_title'>Current Balance</h2>

        <p className='crypto_current_paragraph'>Balance across all your accounts</p>

        <div className="crypto_current_chart">

          <CryptoCurrent />

        </div>

        <div className="crypto_current_title2">

          <p className='crypto_current_paragraph'>Total balance</p>

          <strong className='crypto_current_b'>$35,916.81</strong>

          <p className='crypto_current_paragraph'>Available currency</p>

        </div>

        <div className="crypto_current_prices">

          <strong>$16,213.20</strong>
          <strong>$9,626.80</strong>
          <strong>$10,076.81</strong>

        </div>

        <h2 className='crypto_current_east'>Add funds <MdNorthEast />
        </h2>

        <h2 className='crypto_current_north'>Transfer funds <MdOutlineSouthEast />
        </h2>

      </div>

      {/* crypto-Transactions */}

      <CryptoTranszction />

      {/* crypto-Operation */}

      <div className="crypto_operation">

        <CryptoOperation />

      </div>

      {/* crypto-Pro */}

      <div className="crypto_pro">

        <CryptoPro />

      </div>

    </div>
  )
}

export default Crypto
