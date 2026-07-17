import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { initialBudget, items } from "./catalog.js";

const publicDirectory = fileURLToPath(new URL("../public", import.meta.url));

test("catalog values and local image assets remain reproducible", () => {
  const entries = Object.entries(items);
  const names = entries.map(([, item]) => item.name);
  const prices = entries.map(([, item]) => item.price);

  assert.equal(entries.length, 66);
  assert.equal(new Set(names).size, names.length);
  assert.ok(Number.isSafeInteger(initialBudget) && initialBudget > 0);
  assert.deepEqual(prices, [...prices].sort((left, right) => left - right));

  for (const [id, item] of entries) {
    assert.ok(Number.isSafeInteger(item.price) && item.price > 0, `${item.name} has an invalid price`);
    assert.match(item.img, new RegExp(`^/images/${id}_.+\\.webp$`));
    assert.ok(existsSync(`${publicDirectory}${item.img}`), `${item.name} is missing ${item.img}`);
  }
});
