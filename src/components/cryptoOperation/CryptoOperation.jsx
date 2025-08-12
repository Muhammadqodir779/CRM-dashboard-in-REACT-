import React from 'react'
import image1 from "../../assets/cryptoOperationBitcoin.png"

const CryptoOperation = () => {
  return (
    <div className='w-[300px] h-[385px] bg-[#fff] rounded-[20px] shadow-md' style={{
      marginLeft: '950px',
      marginTop: "-670px",
      padding: "24px",
    }}>
      <div className="flex justify-between" style={{
        paddingTop: "42px"
      }}>

        <h2 className=''>Operation</h2>

        <p className=''>Buy</p>

      </div>

      <input type="number" placeholder='From' style={{
        width: "382px",
        height: "56px",
        // background: URL(image1)
      }} />
    </div>
  )
}

export default CryptoOperation
