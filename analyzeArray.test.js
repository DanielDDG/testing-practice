import { analyzeArray } from "./analyzeArray";

test("returns object", () => {
  const arr = [1, 6, 5, 2, 4];
  expect(typeof analyzeArray(arr)).toBe("object");
});

test("check if object has all required properties", () => {
  const arr = [1, 6, 5, 2, 4];
  expect(Object.hasOwn(analyzeArray(arr), "average")).toBe(true);
  expect(Object.hasOwn(analyzeArray(arr), "min")).toBe(true);
  expect(Object.hasOwn(analyzeArray(arr), "max")).toBe(true);
  expect(Object.hasOwn(analyzeArray(arr), "length")).toBe(true);
});

test("check that property values are integers", () => {
  const arr = [1, 6, 5, 2, 4];
  const result = analyzeArray(arr);

  expect(typeof result.average).toBe("number");
  expect(typeof result.min).toBe("number");
  expect(typeof result.max).toBe("number");
  expect(typeof result.length).toBe("number");
});

test("check that all results are correct", () => {
  const arr = [10, 6, 5, 2, 4];
  const result = analyzeArray(arr);

  expect(result.average).toBe(5.4);
  expect(result.min).toBe(2);
  expect(result.max).toBe(10);
  expect(result.length).toBe(5);
});
