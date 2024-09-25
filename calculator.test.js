test("add returns integer", () => {
  const x = 2;
  const y = 6;
  const calcInstance = new Calculator();
  expect(typeof calcInstance.add(x, y)).toBe("number");
});

test("add returns addition of x and y", () => {
  const x = 2;
  const y = 6;
  const calcInstance = new Calculator();
  expect(calcInstance.add(x, y)).toBe(8);
});

test("add returns the correct error message", () => {
  const x = "wow";
  const y = 4;
  const calcInstance = new Calculator();
  expect(() => calcInstance.add(x, y)).toThrow(
    "Your parameters must be numbers."
  );
});

import { Calculator } from "./calculator";
