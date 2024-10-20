import PropTypes from "prop-types";

function Header({ budget }) {
  return (
    <header className="text-center my-8">
      <h1 className="text-4xl font-bold mb-4">Spend Elon Musk&apos;s Money!</h1>
      <h2 className="text-2xl text-green-600">Budget: ${budget.toLocaleString()}</h2>
    </header>
  );
}

Header.propTypes = {
  budget: PropTypes.number.isRequired,
};

export default Header;
