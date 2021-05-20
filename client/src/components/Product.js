import React from 'react';
import Cart from './Cart';
import {Card,Button} from 'react-bootstrap';
import Iphone from '../images/iphone-12-pro.png';
import { connect } from 'react-redux';
import { addToCart,removeToCart} from '../actions/action';

const Product = props => {
  console.log('Product :', props);
  return (
    <div className="container">

      <Cart numberOfItems={props.data.length}/>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={Iphone} width="200"/>
      <Card.Body>
      <Card.Title>I PHONE -11 </Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      </Card.Text>
      <Card.Text>
       <b>Rating</b>: 4.5 
      </Card.Text>
      <Card.Text>
       <b>Price</b> : $ 1000 
      </Card.Text>
      <Button variant="primary" style={{marginRight:"3px"}} onClick={() => props.addToCartHandler({ price: 1000, name: 'I-Phone' })} block>Add to Cart</Button>

      <Button variant="primary"  onClick={() => props.removeToCartHandler({})} block>Remove to Cart</Button>
      </Card.Body>
      </Card>
     
    </div>
  );
};
const mapStateToProps = state => ({
  data:state.cartItems
});

const mapDispatchToProps = dispatch => ({
  addToCartHandler:data => dispatch(addToCart(data)),
  removeToCartHandler:data => dispatch(removeToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
