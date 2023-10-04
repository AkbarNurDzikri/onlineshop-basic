import products from "../../../utils/data";

const ProductCartDisplay = (props) => {
  const {cart, totalAmount, displayTotalAmount} = props;
  let no = 1;
  
  return (
    <div className="table-responsive">
      <table className="table caption-top" border={1}>
        <caption><h4>Cart</h4></caption>
        <tbody>
          <tr>
            <th>No</th>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>
          {products.length > 0 &&
            cart.map((item) => {
              const product = products.find((product) => product.id === item.id);
              return (
                <tr key={product.id}>
                  <td>{no++}</td>
                  <td>{product.title}</td>
                  <td>{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                  <td>{item.qty}</td>
                  <td className="text-end">{(item.qty * product.price).toLocaleString('id-ID', {style: 'currency', currency: 'IDR', minimumFractionDigits: 0})}</td>
                </tr>
              )
            })}
        </tbody>
        <tfoot>
          <tr ref={displayTotalAmount}>
            <th>Total</th>
            <th colSpan={4} className="text-end">{totalAmount.toLocaleString('id-ID', {style: 'currency', currency: 'IDR', minimumFractionDigits: 0})}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default ProductCartDisplay;