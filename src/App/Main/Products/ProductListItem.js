import React from 'react'
import ProductList from './ProductList'
import './ProductListItem.css'
const ProductListItem =(props)=>
{
    return(
        <div className="product-list-item">
            <div className="product-title">{props.name}</div>
            <div className="product-description">{props.description}</div>
            <div className="product-features">{props.type}</div>
            <div className="product-features">Capacity: {props.capacity}</div>
            <div className="product-price">$ {props.price}</div>
            <input type="button" className="btn-add-to-cart" value="ADD TO CART"/>
        </div>
    )
}
export default ProductListItem