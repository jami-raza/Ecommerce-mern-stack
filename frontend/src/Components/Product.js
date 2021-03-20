import React from 'react';
import {Link} from 'react-router-dom'
import '../Style/Product.css'
const Product = ({product}) => {
    
    
    return (
        <div className="product-card">
            <a href ={`/product/${product._id}`}>
                <div className="image-container">
                <img src={product.image}/>
                </div>
            </a>
            
            
            <div className="body">
            <span class="short-text">{product.brand}</span>
            <a href ={`/product/${product._id}`}>
                <h3>
                    {product.name}
                </h3>
                </a>
            
                <h4>
                Rs.799
                </h4>
            
                <h4>
                Rs.{product.price}
                </h4>
                
            </div>
            
            <div className="cart-preview">
                <div className="cart-btn">
                    <a href={`/product/${product._id}`}><button>Shop Now</button></a>
                </div>
            </div>
        </div>
    )
}

export default Product
