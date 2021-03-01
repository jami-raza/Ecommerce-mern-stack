import React from "react";
import Home from '../Components/Home'
const Homescreen = () => {

  return (
    <>
      {/*<h1>Latest Products</h1>
      {loading ? (
        <h2><Loader/></h2>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
         
        </Row>
          )}*/}
          <Home/>
 
    </>
  );
};

export default Homescreen;
