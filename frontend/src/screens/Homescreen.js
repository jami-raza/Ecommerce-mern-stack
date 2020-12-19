import React,{useState, useEffect} from 'react';
import Product from '../Components/Product'
import {Row,Col} from 'react-bootstrap';
import axios from 'axios';


const Homescreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchproducts = async () => {
            const {data} = await axios.get('/api/products')
            setProducts(data)
        }
        fetchproducts()
    },[])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                        <Product product={product}/>
                    </Col>
                    
                ))}
            </Row>
        </>
    )
}

export default Homescreen
