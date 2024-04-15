import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src='https://i.pinimg.com/736x/4b/ea/c1/4beac1a2ceb6ff197cd14c57547d5356.jpg' alt='Sales'/>
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="row"> 
                <img src='https://www.next.co.uk/nxtcms/resource/blob/5920482/e62423d3a7b9e935b0c4e8ef799ae856/womens23-data.jpg' alt='women'/>
                <button>
                    <Link className='link' to='/products/1'>Women</Link>
                </button></div>
        </div>
        <div className="col">
             <div className="row">
                <img src='https://www.mrporter.com/variants/images/10375442618850077/in/w2000_q60.jpg' alt='new season'/>
                <button>
                    <Link className='link' to='/products/1'>New Season</Link>
                </button>
             </div>
        </div>
        <div className="col col-1">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src='https://hips.hearstapps.com/hmg-prod/images/index-online-65a1812dc7346.jpg?resize=2048:*' alt='mens'/>
                    <button>
                        <Link className='link' to='/products/1'>Men</Link>
                    </button>
                        </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src='https://i.pinimg.com/originals/4c/87/d9/4c87d9b7debe819371f17aecb1917024.jpg' alt='accessories'/>
                    <button>
                        <Link className='link' to='/products/1'>Accesories</Link>
                    </button>
                    </div>
                </div>
                

            </div>
            <div className="row">
            <div className="row">
                    <img src='https://media.karousell.com/media/photos/products/2019/08/31/us_105_nike_air_jordan_1_retro_high_og_1567261018_bfa87f29_progressive.jpg' alt='shoes'/>
                    <button>
                        <Link className='link' to='/products/1'>Shoes</Link>
                    </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Categories