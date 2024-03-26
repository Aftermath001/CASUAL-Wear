import React from 'react'
import  Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img:"https://customxpress.co.ke/wp-content/uploads/2019/08/Men-Long-Sleeve.jpg",
      img2:"https://m.media-amazon.com/images/I/71XqGPjs8oL._AC_UY1000_.jpg",
      title:"Long Sleeve T-shirt",
      isNew:true,
      oldPrice: 24,
      price: 18,
    },
    {
      id: 2,
      img:"https://workweargurus.com/cdn/shop/collections/helly_waterproof_832cc464-d7d6-479b-b2dc-9a4b2c26f710.png?v=1703162559&width=2400",
      img2:"https://www.noisymay.com/dw/image/v2/BDTC_PRD/on/demandware.static/-/Sites-pim-catalog/default/dwfe42feae/pim-static/NM/27026882/27026882_KombuGreen_007.jpg?sw=900&sh=1200",
      title:"Rain Coats and Jackets",
      oldPrice: 24,
      price: 18,
    },
    {
      id: 3,
      img:"https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/how-to-style-a-tennis-skirt-coco-bassey.jpg?fit=680%2C852",
      img2:"https://www.ardene.com/dw/image/v2/BBVB_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe836061e/images/large/2A-AP32222-02-2d3f31d8-3e93-449d-9850-e70b927e6c04.jpg?sw=600&sh=900&sm=fit",
      title:"Tennis Skirt",
      isNew:true,
      oldPrice: 24,
      price: 18,
    },
    {
      id: 4,
      img:"https://galxboy.co.za/cdn/shop/collections/HATS.png?v=1686219185&width=1600",
      img2:"https://hips.hearstapps.com/hmg-prod/images/fall-hat-trends-for-women-2023-64cac7982cf24.png?crop=0.501xw:1.00xh;0.405xw,0&resize=640:*",
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
        
        <div className="bottom-products">
          {data.map(item=> (
            <Card item={item} key={item.id} />
          ))}
      </div>
     </div>
  )
}

export default FeaturedProducts