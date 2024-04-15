import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";


const Products = () => {

  const catId= parseInt(useParams().id);
  const [maxPrice, setMaxPrice]= useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  // console.log(data)
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
console.log(selectedSubCats)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
          
          
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
        <List catId={catId} maxPrice={maxPrice} sort={sort} SubCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products