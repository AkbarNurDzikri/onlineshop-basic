import { Image } from "react-bootstrap";

const ProductImage = (props) => {
  const {image} = props;
  return (
    <div className="product-image text-center">
      <a href="#">
        <Image src={image} alt="product" className="w-100" style={{height: '200px'}} thumbnail />
      </a>
    </div>
  )
}

export default ProductImage;