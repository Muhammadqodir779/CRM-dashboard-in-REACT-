import React from 'react'
import billingImage1 from "../../assets/billingImage1.png"
import billingImage2 from "../../assets/billingImage2.png"
import billingImage3 from "../../assets/billingImage3.png"


const BillingCards = () => {
  const billing_cards = [
    { img: billingImage1, price: "$0.00", span: "/mo", paragraph: "Startup" },
    { img: billingImage2, price: "$29.99", span: "/mo", paragraph: "Standard" },
    { img: billingImage3, price: "$0.00", span: "/mo", paragraph: "Business" },
  ]
  return (
    <div className='flex gap-6' style={{
      paddingTop: "20px"
    }}>
      {
        billing_cards.map((item, index) => (
          <div key={index}>

            <div className='shadow-lg w-[374px] h-[192px] rounded-2xl border-[#F2F4F7]'>

              <img src={item.img} alt="cards" style={{
                paddingTop: "33px",
                paddingLeft: "25px"
              }} />

              <strong className='text-[24px]' style={{
                paddingLeft: "25px",
              }}>{item.price}</strong>

              <span className='text-[#6C737F]'>{item.span}</span>

              <h3 className='text-[12px] text-[#111927] font-semibold' style={{
                paddingTop: "14px",
                paddingLeft: "25px"
              }}>{item.paragraph}</h3>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default BillingCards
