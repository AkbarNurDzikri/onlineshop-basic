const ProductDetails = (props) => {
  const {title, description} = props;
  return (
    <>
      <div className="product-details mt-2">
        <h5 className="product-details__title">{title.substring(0, 15)} ...</h5>
        <p className="product-details__description">{description.substring(0, 50)}...</p>
      </div>
    </>
  )
}

export default ProductDetails;