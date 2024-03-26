import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'



const Products = () => {

  const catId= parseInt(useParams().id);
  const [maxPrice, setMaxPrice]= useState(1000);
  const [sort, setSort] = useState(null);
   
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type='checkbox' id="1" value={1}/>
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id="2" value={3}/>
            <label htmlFor='1'>Skirts</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id="3" value={3}/>
            <label htmlFor='1'>Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by Price:</h2>
          <div className="inputItem">
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type='radio' id='asc' value="asc" name='price' onChange={(e)=> setSort("asc")}/>
            <label htmlFor='asc'>Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type='radio' id='desc' value="desc" name='price'onChange={(e)=> setSort("desc")}/>
            <label htmlFor='desc'>Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src='https://img.freepik.com/free-photo/beautiful-african-american-woman-natural-makeup-wear-fashion-clothes-casual-black-white-dress-code-office-style-total-blouse-pants-suit-hat_627829-1552.jpg' alt='catImg' className='catImg'/>
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products