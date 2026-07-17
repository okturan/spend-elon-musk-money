import assert from "node:assert/strict";
import test from "node:test";
import { calculateTotalSpent, createSpendingState, updateSpendingState } from "./spending.js";

const items = {
  water: { name: "Water", price: 2 },
  rocket: { name: "Rocket", price: 7 },
};

test("buy and sell keep budget, quantity, and receipt totals in sync", () => {
  let state = createSpendingState(items, 10);
  state = updateSpendingState(state, { type: "buy", id: "water" });
  state = updateSpendingState(state, { type: "buy", id: "rocket" });

  assert.equal(state.budget, 1);
  assert.equal(state.cart.water.quantity, 1);
  assert.equal(state.cart.rocket.quantity, 1);
  assert.equal(calculateTotalSpent(state.cart), 9);

  state = updateSpendingState(state, { type: "sell", id: "rocket" });
  assert.equal(state.budget, 8);
  assert.equal(state.cart.rocket.quantity, 0);
  assert.equal(calculateTotalSpent(state.cart), 2);
});

test("transactions cannot overspend or create negative quantities", () => {
  const initial = createSpendingState(items, 10);
  const afterRocket = updateSpendingState(initial, { type: "buy", id: "rocket" });
  const rejectedSecondRocket = updateSpendingState(afterRocket, { type: "buy", id: "rocket" });
  const rejectedEmptySale = updateSpendingState(initial, { type: "sell", id: "water" });

  assert.strictEqual(rejectedSecondRocket, afterRocket);
  assert.equal(rejectedSecondRocket.budget, 3);
  assert.equal(rejectedSecondRocket.cart.rocket.quantity, 1);
  assert.strictEqual(rejectedEmptySale, initial);
});

test("reset restores the original budget and clears every quantity", () => {
  const purchased = updateSpendingState(createSpendingState(items, 10), { type: "buy", id: "water" });
  const reset = updateSpendingState(purchased, { type: "reset" });

  assert.equal(reset.budget, 10);
  assert.equal(calculateTotalSpent(reset.cart), 0);
  assert.deepEqual(Object.values(reset.cart).map(({ quantity }) => quantity), [0, 0]);
});
