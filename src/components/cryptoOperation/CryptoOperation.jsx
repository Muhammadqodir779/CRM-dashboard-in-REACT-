import React from 'react'
import { LuArrowUpDown } from "react-icons/lu";


const CryptoOperation = () => {
  return (
    <div className='w-[300px] h-[385px] bg-[#fff] rounded-[20px] shadow-md' style={{
      marginLeft: '950px',
      marginTop: "-670px",
      padding: "24px",
    }}>
      <div className="flex justify-between">

        <h2 className='font-bold'>Operation</h2>

        <p className='text-[#6366F1]'>Buy</p>

      </div>

      <input type="number" placeholder='From' style={{
        width: "260px",
        height: "56px",
        marginTop: "26px",
        padding: "8px",
        border: "1px solid #E5E7EB",
        borderRadius: "8px"
      }} />

      <LuArrowUpDown style={{
        marginTop: "10px",
        marginLeft: "110px",
        marginTop: "26px",
        fontSize: "24px"
      }} />

      <input type="number" placeholder='To' style={{
        width: "260px",
        height: "56px",
        marginTop: "26px",
        padding: "8px",
        border: "1px solid #E5E7EB",
        borderRadius: "8px"
      }} />

      <p style={{
        paddingTop: "18px"
      }} className='text-[#6C737F]'>1 BTC = $20,024.90</p>

      <button className='w-[260px] h-[48px] bg-[#6366F1] rounded-2xl text-[#fff] hover:bg-sky-500 hover:scale-105 duration-[0.2s]' style={{
        marginTop: "16px"
      }}>Buy Ethereum</button>

    </div>
  )
}

export default CryptoOperation
