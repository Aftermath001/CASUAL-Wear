import React from 'react'
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const data =[
        {
            id: 1,
            img:"https://everpress.com/blog/wp-content/uploads/2019/09/Keith-Flint.jpg",
            img2:"https://icecreamcastles.com/cdn/shop/products/2030VPPE-WHT_8f3c4e1a-647b-4524-9adf-e701b921e741.jpg?v=1613219457",
            title:"Long Sleeve Graphic T-Shirt",
            desc:"Long Sleeve Graphic T-Shirt. Made in Japan",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id: 2,
            img:"https://assets.ajio.com/medias/sys_master/root/20230525/p9Gh/646f040842f9e729d7bff2fa/-473Wx593H-466191357-brown-MODEL.jpg",
            img2:"https://www.sneakerjeans.com/cdn/shop/products/brown-cargo-pant-mm5714-634827_1200x.jpg?v=1680677490",
            title:"Brown Cargo Pants",
            desc:"Brown Cargo Pants. Imported from Paris.",
            oldPrice:19,
            price:12,
        },
    ]
  return (
    <div className='cart'>
        <h1>Products in your Cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt=''/>
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">1 x ${item.price} </div>
            </div>
            <DeleteIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button> PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart