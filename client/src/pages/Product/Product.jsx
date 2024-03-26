import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selectedImg, setSelectedImg] =useState(0);
  const [quantity, setQuantity] =useState(1);


  const images =[
    "https://www.jdinstitute.edu.in/media/2021/07/Types-of-Fashion-Photography-Thumbnail.jpg",
    "https://burst.shopifycdn.com/photos/model-poses-in-red-pansuit.jpg?width=1000&format=pjpg&exif=0&iptc=0",
  ]
  return (
    <div className='product'>
      <div className="left">
       <div className="images">
        <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)}/>
        <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)}/>
       </div>
       <div className="mainImg">
        <img src={images[selectedImg]} alt=''/>
      </div>
      </div>
      
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Accusamus non minima molestias repellendus! Velit unde eius corporis, eligendi cumque itaque.
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) =>prev === 1 ? 1 : prev - 1 )}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) =>prev + 1)}>+</button>
        </div>
        <button className="add">
        <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/>ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span> Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span> Tag: R-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>Description</span>
          <hr />
          <span> ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>

    </div>
  )
}

export default Product