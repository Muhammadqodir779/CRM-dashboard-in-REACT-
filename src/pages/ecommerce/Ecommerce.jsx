import React from 'react'
import "./Ecommerce.css"
import Sidebar from '../sidebar/Sidebar'
import { IoMdRefresh } from "react-icons/io";
import ecommerce_image1 from "../../assets/ecommerce_image1.png"
import ecommerce_image2 from "../../assets/ecommerce_image2.png"
import ecommerce_image3 from "../../assets/ecommerce_image3.png"
import EcommerceSellingProduct from '../../components/ecommerceSellingProduct/EcommerceSellingProduct';
import EcommerceLinechart from '../../components/ecommerceLinechart/EcommerceLinechart';


const Ecommerce = () => {
  return (
    <div className='ecommerce'>

      <Sidebar>

        {/* ecommerce_header */}

        <div className="ecommerce_header">

          <h2 className='ecommerce_header_title'>
            E-Commerce
          </h2>
          <button className='ecommerce_header_btn'>
            <IoMdRefresh size={20} />
            Sync Data
          </button>
        </div>

        {/* ecommerce_stats */}

        <div className="ecommerce_stats">

          <h4 className='ecommerce_stats_h'>Today's Stats</h4>

          <div className="ecommerce_stats_cards">

            <div className="ecommerce_stats_cards_1">

              <img src={ecommerce_image1} alt="img" />

              <p className='ecommerce_stats_cards_1_paragraph'>Sales</p>

              <strong className='ecommerce_stats_cards_1_b'>$152k</strong>

            </div>

            <div className="ecommerce_stats_cards_2">

              <img src={ecommerce_image2} alt="img" />

              <p className='ecommerce_stats_cards_1_paragraph'>Cost</p>

              <strong className='ecommerce_stats_cards_1_b'>$99.7k</strong>

            </div>

            <div className="ecommerce_stats_cards_3">

              <img src={ecommerce_image3} alt="img" />

              <p className='ecommerce_stats_cards_1_paragraph'>Profit</p>

              <strong className='ecommerce_stats_cards_1_b'>$32.1k</strong>

            </div>

          </div>

        </div>

        {/* ecommerce selling product */}

        <EcommerceSellingProduct />

        {/* ecommerce line chart */}
        <div className="ecommerce_line">

          <h3 className='ecommerce_line_title'>Sales Revenue</h3>

          <EcommerceLinechart />

        </div>

      </Sidebar>

    </div>
  )
}

export default Ecommerce
