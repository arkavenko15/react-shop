import React from 'react'
import PropTypes from 'prop-types'
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
        description ="No description...",
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

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
}
ProductListItem.defaultProps =
{
    description: "No description..."
}
export default ProductListItem
