import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Components/Product";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productAction";
import Message from '../Components/Message';
import Loader from '../Components/Loader';

const Homescreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
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
      )}
    </>
  );
};

export default Homescreen;
