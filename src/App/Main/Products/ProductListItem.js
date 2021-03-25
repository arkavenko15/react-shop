import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import ProductList from './ProductList'
import './ProductListItem.css'



class ProductListItem extends Component
{

    render()
    {
        const 
        {
            image,
            name,
            description ="No description...",
            type,
            capacity,
            price
        } =this.props;
        
    return(
        <div className="product-list-item">
            <div className="product-img">
                <img src={this.props.image} alt=""/>
            </div>    
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">{type}</div>
            <div className="product-features">Capacity: {capacity}</div>
            <div className="product-price">$ {price}</div>
            <div className="product-quantity">
                <button>-</button>
                <input type="text" value={1} readOnly></input>
                <button>+</button>
            </div>
            <input type="button" className="btn-add-to-cart" value="ADD TO CART"/>
        </div>
    )
    }
}


// const ProductListItem =(
//     {
//         image,
//         name,
//         description ="No description...",
//         type,
//         capacity,
//         price
//     }
// )=>
// {

// }

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
