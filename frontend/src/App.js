import React from 'react';
import Header from './Components/Header';
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import About from './screens/AboutScreen'
import Contactus from './Components/Contactus'
import RefundPolicy from './Components/RefundPolicy'
import ReplacingPolicy from './Components/ReplacingPolicy'
import Ingredient from './screens/IngredientScreen'
import Shop from './screens/ShopScreen'
import FAQS from './screens/FaqsScreen'
import Footer from './Components/Footer'



const App = () => {
  return (
    <Router>
      
    <Header/>
    <main>
      
      
       <Container style={{marginTop:'-5px',marginBottom:'20px'}}>
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/order/:id' component={OrderScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />

      <Route path='/admin/userlist' component={UserListScreen} />
      <Route path='/admin/user/:id/edit' component={UserEditScreen} />
     

      <Route path='/admin/productlist' component={ProductListScreen} />
      <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
      <Route path='/admin/orderlist' component={OrderListScreen} />
      <Route path='/about-us' component={About} />
      <Route path='/contact-us' component={Contactus} />
      <Route path='/refund-policy' component={RefundPolicy} />
      <Route path='/replacing-policy' component={ReplacingPolicy} />
      <Route path='/ingredient' component={Ingredient} />
      <Route path='/shop' component={Shop} />
      <Route path='/faqs' component={FAQS} />

      </Container>
      <Container fluid style={{margin:'-20px 0 0 0',padding:0}}>
      <Route path='/' component={HomeScreen} exact />
      </Container>
      
      </main>
      <Footer/>
    
    </Router>
  );
}

export default App;
