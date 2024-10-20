import PropTypes from "prop-types";
import ReceiptItem from "./ReceiptItem";

function Receipt({ cart, totalSpent }) {
  const purchasedItems = Object.values(cart).filter((item) => item.quantity > 0);

  return (
    <footer className="max-w-2xl mx-auto my-10 p-4 bg-gray-100 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Receipt:</h3>

      <div className="hidden md:grid grid-cols-3 gap-4 font-bold border-b pb-2">
        <div className="text-left">Product</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Total</div>
      </div>

      <ul className="mt-2 space-y-2">
        {purchasedItems.map((item) => (
          <ReceiptItem key={item.name} item={item} />
        ))}
      </ul>

      <div className="mt-4">
        <div className="flex justify-between font-semibold">
          <span className="whitespace-nowrap mr-2">Total: </span>
          <span className="text-right">${totalSpent.toLocaleString()}</span>
        </div>
      </div>
    </footer>
  );
}

Receipt.propTypes = {
  cart: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  totalSpent: PropTypes.number.isRequired,
};

export default Receipt;
