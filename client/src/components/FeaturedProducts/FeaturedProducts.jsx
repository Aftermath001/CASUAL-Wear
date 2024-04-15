import React from 'react'
import  Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch'
const FeaturedProducts = ({ type }) => {
  
  const {data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
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
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
     </div>
  )
}

export default FeaturedProducts