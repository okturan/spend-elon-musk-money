import PropTypes from "prop-types";

function ReceiptItem({ item }) {
  return (
    <li className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b pb-2">
      <div className="text-left">{item.name}</div>
      <div className="text-center">x {item.quantity}</div>
      <div className="text-right">${(item.price * item.quantity).toLocaleString()}</div>
    </li>
  );
}

ReceiptItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReceiptItem;
