import React from 'react'
import CryptoPros from "../../assets/cryptoPro.png"

const CryptoPro = () => {
  return (
    <div className='flex flex-col w-[300px] h-[325px] shadow-md rounded-3xl' style={{
      marginLeft: "950px",
      marginTop: "32px"
    }}>
      <img src={CryptoPros} alt="img" className='w-[100px] h-[100px]' style={{
        marginTop: "24px",
        marginLeft: "100px"
      }} />
      <h2 className='font-bold text-[18px] primary-font-family' style={{
        marginLeft: "20px",
        marginTop: "22px"
      }}>Upgrade your account to PRO.</h2>

      <p className='font-normal secondary-font-family text-center' style={{
        marginTop: "18px"
      }}>Unlock exclusive features like Test Networks, Test
        Swaps, and more.</p>

      <button className='w-[80px] h-[40px] bg-[#6366F1] text-[#fff] rounded-xl hover:bg-sky-500 hover:scale-105 duration-[0.2s]' style={{
        marginTop: "20px",
        marginLeft: "110px"
      }}>Upgrade</button>

    </div>
  )
}

export default CryptoPro
