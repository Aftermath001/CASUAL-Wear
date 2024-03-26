import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss'
// import Cart from '../Cart/Cart';



const Navbar = () => {
    const [open,setOpen] =useState(false)
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                {/* <div className="item">
                    <img src='/img/en.png' alt='EN.PNG'/>
                    <KeyboardArrowDownIcon/>
                </div> */}
                <div className="item">
                    <span>WELCOME</span>
                    {/* <KeyboardArrowDownIcon/> */}
                </div>
                <div className="item">
                    <Link className='links' to ="/products/1">Men</Link>
                </div>
                <div className="item">
                    <Link className='links' to ="/products/2">Women</Link>
                </div>
                <div className="item">
                    <Link className='links' to ="/products/3">Children</Link>
                </div>
                
            </div>
            <div className="center">
                <Link className='links' to="/">ADAMSTORE</Link>
            </div>
            <div className="right">
                <div className="">
                    <Link className='links' to="/">Homepage</Link>
                </div>
                <div className="">
                    <Link className='links' to="/">About</Link>
                </div>
                <div className="">
                    <Link className='links' to="/">Contact</Link>
                </div>
                <div className="">
                    <Link className='links' to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderIcon/>
                    <div className="cartIcon" onClick={()=>setOpen(!open)}>
                        <ShoppingCartIcon/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
        {/* {open && <Cart/>} */}
    </div>
  )
}

export default Navbar