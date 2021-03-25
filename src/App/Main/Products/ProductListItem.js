import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import ProductList from './ProductList'
import './ProductListItem.css'



class ProductListItem extends Component
{    

    state = {
        productCount : 1,
    }
    onIncrementClick() 
    {
        this.setState((prevState)=>({
            productCount:prevState.productCount + 1
        }))
    }
    onDecrementClick()
    {
        this.setState((prevState)=>(
            {
                productCount:prevState.productCount -1
            }
        ))
    }

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
                <img src={image} alt=""/>
            </div>    
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">{type}</div>
            <div className="product-features">Capacity: {capacity}</div>
            <div className="product-price">$ {price}</div>
            <div className="product-quantity">
                <button onClick = {() => this.onDecrementClick()}>-</button>
                <input type="text" value={this.state.productCount} readOnly></input>
                <button onClick = {() => this.onIncrementClick()}>+</button>
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
