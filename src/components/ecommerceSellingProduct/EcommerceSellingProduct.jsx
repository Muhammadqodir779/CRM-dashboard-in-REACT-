import React from 'react'
import "./EcommerceSellingProduct.css"
import image1 from "../../assets/ecommerceSelling_image1.png"
import image2 from "../../assets/ecommerceSellingimage2.png"
import image3 from "../../assets/ecommerceSellingimage3.png"
import image4 from "../../assets/ecommerceSellingimage4.png"
import image5 from "../../assets/ecommerceSellingimage5.png"



const selling_products = [
  { img: image1, title: "Healthcare Erbology in Accessories", price: "13,153", paragraph: "in sales", id: "#1" },
  { img: image2, title: "Makeup Lancome Rouge in Accessories", price: "10,300", paragraph: "in sales", id: "#2" },
  { img: image3, title: "Lounge Puff Fabric Slipper in Accessories", price: "5,300", paragraph: "in sales", id: "#3" },
  { img: image4, title: "Skincare Necessaire in Accessories", price: "1,203", paragraph: "in sales", id: "#4" },
  { img: image5, title: "Skincare Soja CO in Accessories", price: "254", paragraph: "in sales", id: "#5" },
]

const EcommerceSellingProduct = () => {
  return (
    <div>
      <div className="selling_product">
        <h3 className='selling_title'>Top Selling Products</h3>
        {
          selling_products.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="img" />
              <h3 className='selling_heading'>{item.title}</h3>
              <strong className='selling_b'>{item.price}</strong>
              <p className='selling_p'>{item.paragraph}</p>
              <strong className='selling_id'>{item.id}</strong>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EcommerceSellingProduct
