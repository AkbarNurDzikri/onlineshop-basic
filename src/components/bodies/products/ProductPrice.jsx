import Col from 'react-bootstrap/Col';

const ProductPrice = (props) => {
  const {price} = props;
  return (
    <Col md={6} className='product-price text-start'>
      <h6>{price}</h6>
    </Col>
  )
}

export default ProductPrice;