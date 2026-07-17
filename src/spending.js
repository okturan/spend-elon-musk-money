export function createSpendingState(items, initialBudget) {
  return {
    initialBudget,
    budget: initialBudget,
    cart: Object.fromEntries(
      Object.entries(items).map(([id, item]) => [id, { ...item, quantity: 0 }]),
    ),
  };
}

export function updateSpendingState(state, action) {
  if (action.type === "reset") {
    return createSpendingState(state.cart, state.initialBudget);
  }

  const item = state.cart[action.id];
  if (!item) return state;

  if (action.type === "buy") {
    if (item.price > state.budget) return state;
    return {
      ...state,
      budget: state.budget - item.price,
      cart: { ...state.cart, [action.id]: { ...item, quantity: item.quantity + 1 } },
    };
  }

  if (action.type === "sell") {
    if (item.quantity === 0) return state;
    return {
      ...state,
      budget: state.budget + item.price,
      cart: { ...state.cart, [action.id]: { ...item, quantity: item.quantity - 1 } },
    };
  }

  return state;
}

export function calculateTotalSpent(cart) {
  return Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);
}
