import React,{ useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Row, Button, Col, ListGroup, Image, Card } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../Components/Message'
import CheckoutSteps from '../Components/CheckoutSteps'
import {createOrder} from '../actions/orderAction'



const PlaceOrderScreen = ({history}) => {
    const cart = useSelector((state) =>  state.cart)

    const dispatch = useDispatch()

    // Calculate prices
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }
    cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty,0))

    cart.shippingPrice = addDecimals(cart.itemsprice > 100 ? 0 : 200)
    

     cart.itemsTotalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice)).toFixed(2)

     const orderCreate = useSelector(state => state.orderCreate)
     const {order, success, error} = orderCreate
    useEffect(() => {
        if(success){
            history.push(`/order/${order._id}`)
        }
        // eslint-disable-next-line 
    },[history, success])
    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.itemsTaxPrice,
            totalPrice: cart.itemsTotalPrice
        }))
    }

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row>
                <Col md={8} sm={12}>
                    <ListGroup>
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        <p>
                            <strong>Address</strong>
                            {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                            
                            
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Phone Number</h2>
                        
                            <strong>
                            {cart.shippingAddress.postalCode}
                            </strong>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        
                            {cart.cartItems.length === 0 ? <Message>Your cart is empty</Message> : (
                                <ListGroup variant="flush">
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>
                                                <Col>
                                                <Link style={{textDecoration:'none',color:'black'}} to={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x {item.price} = Rs. {item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        
                    </ListGroup.Item>
                    </ListGroup>
                    
                </Col>
                <Col md={4} sm={12}>
                  <Card>
                    <ListGroup variant="flush">
                         <ListGroup.Item>
                             <h2>Order Summery</h2>
                         </ListGroup.Item>  
                         <ListGroup.Item>
                             <Row>
                                 <Col>Items</Col>
                                 <Col>Rs. {cart.itemsPrice}</Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>Shipping</Col>
                                 <Col>Rs .{cart.shippingPrice}</Col>
                             </Row>
                         </ListGroup.Item>  
                           
                         <ListGroup.Item>
                             <Row>
                                 <Col>Total Price</Col>
                                 <Col>Rs .{cart.itemsTotalPrice}</Col>
                             </Row>
                         </ListGroup.Item> 
                         <ListGroup.Item>
                                {error && <Message variant="danger">{error}</Message>}
                         </ListGroup.Item> 
                         <ListGroup.Item>
                             <Button type="button" className="btn-block"
                             disabled={cart.cartItems === 0}
                             onClick={placeOrderHandler}
                             > Place Order </Button>
                         </ListGroup.Item>   
                                 
                    </ListGroup>
                  </Card>                          
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen
