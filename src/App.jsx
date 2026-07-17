import { useReducer } from "react";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Receipt from "./components/Receipt";
import { initialBudget, items } from "./catalog";
import { calculateTotalSpent, createSpendingState, updateSpendingState } from "./spending";

function App() {
  const [state, dispatch] = useReducer(
    updateSpendingState,
    null,
    () => createSpendingState(items, initialBudget),
  );
  const totalSpent = calculateTotalSpent(state.cart);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header budget={state.budget} />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(state.cart).map(([id, item]) => (
          <ItemCard key={id} id={id} item={item} budget={state.budget} dispatch={dispatch} />
        ))}
      </div>

      <Receipt cart={state.cart} totalSpent={totalSpent} onReset={() => dispatch({ type: "reset" })} />
    </div>
  );
}

export default App;
