import {Col, Button} from 'react-bootstrap';

const ProductCartHandler = (props) => {
  const {id, setCart, cart} = props;

  const addToCartHandler = () => {
    if(cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
      )
    } else {
      setCart([...cart, {id, qty: 1}])
    }
  }

  return (
    <>
      <Col md={6} className='product-cart text-end'>
        <Button variant='primary' className='text-end btn-sm text-center' onClick={() => addToCartHandler()}>Add To Cart</Button>
      </Col>
    </>
  )
}

export default ProductCartHandler;