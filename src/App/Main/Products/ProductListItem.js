import React from 'react'
import ProductList from './ProductList'
import './ProductListItem.css'

const user =
{
    name: "Ivan",
    age:20,
}
const{
    name,
    age
}=user;
console.log(name)
const ProductListItem =(
    {
        name,
        description,
        type,
        capacity,
        price
    }
)=>
{
    return(
        <div className="product-list-item">
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">{type}</div>
            <div className="product-features">Capacity: {capacity}</div>
            <div className="product-price">$ {price}</div>
            <input type="button" className="btn-add-to-cart" value="ADD TO CART"/>
        </div>
    )
}
export default ProductListItem