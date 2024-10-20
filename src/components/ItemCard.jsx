import PropTypes from "prop-types";

function ItemCard({ id, item, budget, updateCart }) {
  return (
    <div className="border rounded-lg shadow flex flex-col items-center justify-between h-96">
      <img src={item.img} alt={item.name} className="mb-4 w-full h-48 object-cover rounded" />

      <h3 className="text-xl font-semibold mb-2 text-center">{item.name}</h3>

      <p className="text-gray-600 mb-4 text-center">Price: ${item.price.toLocaleString()}</p>

      <div className="flex px-4 pb-6 items-center w-full space-x-4">
        <button
          onClick={() => updateCart(id, "add")}
          disabled={budget < item.price}
          className="flex-1 px-4 py-2 bg-green-500 text-white rounded disabled:bg-green-300">
          Buy
        </button>

        <span className="text-xl font-semibold text-center">{item.quantity}</span>

        <button
          onClick={() => updateCart(id, "remove")}
          disabled={item.quantity === 0}
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded disabled:bg-red-300">
          Sell
        </button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    img: PropTypes.string,
  }).isRequired,
  budget: PropTypes.number.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default ItemCard;
