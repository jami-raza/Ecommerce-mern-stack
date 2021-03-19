import React from 'react';
import {Link} from 'react-router-dom'
import '../Style/Product.css'
const Product = ({product}) => {
    
    
    return (
        <div className="product-card">
            <Link to ={`/product/${product._id}`}>
                <div className="image-container">
                <img src={product.image}/>
                </div>
            </Link>
            
            
            <div className="body">
            <span class="short-text">{product.brand}</span>
            <Link to ={`/product/${product._id}`}>
                <h3>
                    {product.name}
                </h3>
                </Link>
            
            
            
                <h4>
                Rs.{product.price}
                </h4>
                
            </div>
            
            <div className="cart-preview">
                <div className="cart-btn">
                    <Link to={`/product/${product._id}`}><button>Shop Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Product
