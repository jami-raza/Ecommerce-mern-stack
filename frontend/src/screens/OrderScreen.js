import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { getOrderDetails } from "../actions/orderAction";

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;
  
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  
 
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
      if(!order || order._id !== orderId){
        dispatch(getOrderDetails(orderId));
      }
  }, [dispatch, order, orderId ]);

  console.log(order)

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Order Details</h1>
      <Row>
        <Col md={8}>
          <ListGroup>
            <ListGroup.Item>
              <h2>Shipping</h2>

              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{" "}
                <a style={{color:'inherit'}} href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              
              <p>
                <strong>Phone:</strong>
                {order.shippingAddress.postalCode}
              </p>
              <p>
                <strong>Address :</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                
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
                          className="bottle-image"
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link style={{color:'black'}} to={`/product/${item.product}`}>
                            <p>{item.name}</p>
                          </Link>
                        </Col>
                        <Col md={4}>
                          <p>{item.qty} x {item.price} = Rs {item.qty * item.price}</p>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summery</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col><p>Items</p></Col>
                  <Col><p>Rs{order.itemsPrice}</p></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col><p>Shipping</p></Col>
                  <Col><p>Rs{order.shippingPrice}</p></Col>
                </Row>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Row>
                  <Col><p>Total Price</p></Col>
                  <Col><p>Rs{order.itemsTotalPrice}</p></Col>
                </Row>
              </ListGroup.Item>
              
                
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
