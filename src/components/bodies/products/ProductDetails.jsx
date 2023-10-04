const ProductDetails = (props) => {
  const {title, description, category} = props;
  return (
    <div className="product-details mt-2">
      <a href="#" className='text-decoration-none text-reset'>
        <h5 className="product-details__title">{title.substring(0, 15)}...</h5>
      </a>
      <p className="product-details__description">{description.substring(0, 100)}...</p>
    </div>
  )
}

export default ProductDetails;