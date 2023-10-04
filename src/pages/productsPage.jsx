import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import ProductImage from '../components/bodies/products/ProductImage';
import ProductDetails from '../components/bodies/products/ProductDetails';
import ProductPrice from '../components/bodies/products/ProductPrice';
import ProductCartHandler from '../components/bodies/products/ProductCartHandler';
import products from '../utils/data';
import LogOutHandler from '../components/bodies/auth/LogoutHandler';
import {Link} from 'react-router-dom';
import ProductCartDisplay from '../components/bodies/products/ProductCartDisplay';
import React, { useEffect, useState, useRef } from 'react'
import { getAllProducts } from '../services/products.service';

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [getProductsAPI, setProductsAPI] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    setCart(storedCart || []);
  }, [])

  useEffect(() => {
    if(cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find(product => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
  
      setTotalAmount(sum);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart])

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getAllProducts();
      setProductsAPI(productsData);
    }

    fetchData();
  }, [])

  const displayTotalAmount = useRef(null);
  useEffect(() => {
    if(cart.length > 0) {
      displayTotalAmount.current.style.display = 'table-row';
    } else {
      displayTotalAmount.current.style.display = 'none';
    }
  }, [cart])

  return (
    <>
      <Container fluid>
        <Row className='bg-primary'>
          <Col>
            <div className="text-end my-2 me-5">
              <b className='text-white me-3'>{localStorage.getItem('email')}</b>
              <Button type='button' variant='dark' className='btn-sm' onClick={LogOutHandler}><Link to='/login' className='text-decoration-none text-white'>Logout</Link></Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className='mt-5'>
        <Row>
          <Col md={8}>
            <Row>
              {getProductsAPI.map((product) => (
                <Col md={4} className='my-1' key={product.id}>
                  <Card>
                    <Card.Body>
                      <ProductImage image={product.image} />
                      <ProductDetails category={product.category} title={product.title} description={product.description} />
                      <Row>
                        <ProductPrice price={product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR', minimumFractionDigits: 0})} />
                        <ProductCartHandler id={product.id} setCart={setCart} cart={cart} setTotalAmount={setTotalAmount} totalAmount={totalAmount}/>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4} className='my-1'>
            <Card>
              <Card.Body className='text-center'>
                <ProductCartDisplay displayTotalAmount={displayTotalAmount} cart={cart} totalAmount={totalAmount} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductPage;