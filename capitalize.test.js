import { capitalize } from "./capitalize";

test("returns string", () => {
  const word = "hi";
  expect(typeof capitalize(word)).toBe("string");
  expect(capitalize(word)).toBe("Hi");
});

test("not empty", () => {
  const empty = "";
  expect(() => capitalize(empty)).toThrow("String cannot be empty.");
});

test("first letter capitalized", () => {
  const word = "mOnGoosSeee";
  expect(capitalize(word)).toBe("MOnGoosSeee");
});

test("empty front spaces", () => {
  const word = "    wow!";
  expect(capitalize(word)).toBe("    Wow!");
});

test("empty spaces all around", () => {
  const word = "    amazing!   ";
  expect(capitalize(word)).toBe("    Amazing!   ");
});
