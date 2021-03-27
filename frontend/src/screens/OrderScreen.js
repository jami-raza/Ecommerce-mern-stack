import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { getOrderDetails, deliverOrder } from "../actions/orderAction";
import {ORDER_DELIVER_RESET} from '../constants/orderConstants';

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;
  
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading:loadingDeliver, success:successDeliver } = orderDeliver;
 
  // Calculate prices

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
    

    order.itemsTotalPrice = (
      Number(order.itemsPrice) +
      Number(order.shippingPrice) 
      
    ).toFixed(2);
  }

  useEffect(() => {
      if(!order || order._id !== orderId || successDeliver){
        dispatch({ type: ORDER_DELIVER_RESET });
        dispatch(getOrderDetails(orderId));
        
      }
  }, [dispatch, order, orderId, successDeliver ]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  console.log(order)

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      
      <Row>
        <Col md={8} className="mt-5">
        <h1 >Order <strong>id</strong>:{order._id}</h1>
          <ListGroup>
            <ListGroup.Item>
              <h2>Shipping</h2>

              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{" "}
                <a href={`mailto:${order.user.email}`} style={{color:"black"}}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                
                
              </p>
              <p>
                <strong>Phone: </strong>
                
                
                {order.shippingAddress.postalCode}
              </p>
              <p>
                <strong>Message: </strong>
                
                
                {order.shippingAddress.country}
              </p>
              
              {order.isDelivered ? (
                <Message variant="success">Delivered on {order.deliveredAt}</Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>

              <p>
                {" "}
                <strong>Method: </strong>
                Cash on delivery
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>

              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                        
                          <Link to={`/product/${item.product}`} style={{color:'black'}}>
                            {item.name}
                            
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x {item.price} = Rs{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4} className="mt-5">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summery</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Item Price</Col>
                  <Col>Rs{order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Delivery Charges</Col>
                  <Col>Rs{order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Row>
                  <Col>Total Price</Col>
                  <Col>Rs{order.itemsTotalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {loadingDeliver && <Loader />}
              {userInfo.isAdmin && !order.isDelivered && (
                <ListGroup.Item>
                  <Button
                  type='button'
                  className='btn btn-block'
                  onClick={deliverHandler}
                  >
                    Mark as Delivered
                  </Button>
                </ListGroup.Item>
              )}
                
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
