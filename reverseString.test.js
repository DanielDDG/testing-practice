import { reverseString } from "./reverseString";

test("returns string", () => {
  const word = "Hello!";
  expect(typeof reverseString(word)).toBe("string");
});

test("returns empty string when input is empty", () => {
  const word = "";
  expect(reverseString(word)).toBe("");
});

test("returns same string when input is single char", () => {
  const word = "b";
  expect(reverseString(word)).toBe("b");
});

test("make sure special chars work", () => {
  const word = "HolY$%!sHiT!";
  expect(reverseString(word)).toBe("!TiHs!%$YloH");
});

test("returns reversed string", () => {
  const word = "Dayum!";
  expect(reverseString(word)).toBe("!muyaD");
});

test("works with whitespace", () => {
  const word = "    Luffy!";
  expect(reverseString(word)).toBe("!yffuL    ");
});
