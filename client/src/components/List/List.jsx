import React from 'react'
import './List.scss'
import Card from '../Card/Card';
const List = () => {
    const data = [
        {
            id: 1,
            img:"https://everpress.com/blog/wp-content/uploads/2019/09/Keith-Flint.jpg",
            img2:"https://icecreamcastles.com/cdn/shop/products/2030VPPE-WHT_8f3c4e1a-647b-4524-9adf-e701b921e741.jpg?v=1613219457",
            title:"Long Sleeve Graphic T-Shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id: 2,
            img:"https://assets.ajio.com/medias/sys_master/root/20230525/p9Gh/646f040842f9e729d7bff2fa/-473Wx593H-466191357-brown-MODEL.jpg",
            img2:"https://www.sneakerjeans.com/cdn/shop/products/brown-cargo-pant-mm5714-634827_1200x.jpg?v=1680677490",
            title:"Brown Cargo Pants",
            oldPrice:19,
            price:12,
        },
        {
            id: 3,
            img:"https://i.pinimg.com/736x/56/bd/bb/56bdbb348c1f1ce22e3450a9802a3c82.jpg",
            img2:"https://www.lestyleparfait.co.ke/cdn/shop/files/patchwork-oversized-graffiti-hoodie-for-men-lestyleparfait-kenya-hoodie-4.jpg?v=1703681521&width=1445",
            title:" Black Grafitti Hoodie ",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id: 4,
            img:"https://imaginecare.co.ke/wp-content/uploads/2023/03/H6e625a5c77cc460a8e736ffdf78f2b1fU.jpg",
            img2:"https://wholesale.dynamicasia.com/v/vspfiles/photos/3082-2T.jpg",
            title:"Hat",
            oldPrice:19,
            price:12,
        },
    ];
  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List