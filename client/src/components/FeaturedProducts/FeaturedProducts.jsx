import React from 'react'
import  Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img:"https://customxpress.co.ke/wp-content/uploads/2019/08/Men-Long-Sleeve.jpg",
      title:"Long Sleeve T-shirt",
      isNew:true,
      oldPrice: 24,
      price: 18,
    },
    {
      id: 2,
      img:"https://workweargurus.com/cdn/shop/collections/helly_waterproof_832cc464-d7d6-479b-b2dc-9a4b2c26f710.png?v=1703162559&width=2400",
      title:"Rain Coats and Jackets",
      oldPrice: 24,
      price: 18,
    },
    {
      id: 3,
      img:"https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/how-to-style-a-tennis-skirt-coco-bassey.jpg?fit=680%2C852",
      title:"Tennis Skirt",
      isNew:true,
      oldPrice: 24,
      price: 18,
    },
    {
      id: 4,
      img:"https://galxboy.co.za/cdn/shop/collections/HATS.png?v=1686219185&width=1600",
      title:"Hats",
      oldPrice: 24,
      price: 18,
    },
  ]
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ducimus atque aliquid, voluptatem facilis error aperiam dolorum molestiae commodi 
                doloribus impedit?
            </p>

        </div>
        
        <div className="bottom">
          {data.map(item=> (
            <Card item={item} key={item.id} />
          ))}
      </div>
     </div>
  )
}

export default FeaturedProducts