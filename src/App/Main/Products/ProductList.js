import React from 'react'
import ProductListItem from './ProductListItem'
const ProductList = () =>
{
    return(
        <>
            <h1 className="page-title">Product List</h1>
            <div className="row">
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone 8"
                    description="This is IPhone 8"
                    type="phone"
                    capacity="256GB"
                    price="1200"/>
                </div>
                <div className="col-lg-6">
                <ProductListItem
                    name="iPhone 7"
                    description="This is IPhone 7"
                    type="phone"
                    capacity="128GB"
                    price="1000"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                <ProductListItem
                    name="iPhone X"
                    description="This is IPhone X"
                    type="phone"
                    capacity="256GB"
                    price="1250"/>
                </div>
                <div className="col-lg-6">
                <ProductListItem
                    name="iPhone XS"
                    description="This is IPhone XS"
                    type="phone"
                    capacity="128GB"
                    price="1230"/>
                </div>
            </div>
        </>
    )
}

export default ProductList