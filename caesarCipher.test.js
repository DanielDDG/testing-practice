import { caesarCipher } from "./caesarCipher";

test("returns string", () => {
  const word = "wowza";
  expect(typeof caesarCipher(word)).toBe("string");
});

test("shift a single lowercase character", () => {
  const word = "a";
  const key = 1;
  expect(caesarCipher(word, key)).toBe("b");
});

test("shift more than one character once", () => {
  const word = "zvwsdfede";
  const key = 1;
  expect(caesarCipher(word, key)).toBe("awxtegfef");
});

test("shift more than one character several times", () => {
  const word = "uhbdsahzasbd";
  const key = 6;
  expect(caesarCipher(word, key)).toBe("anhjygnfgyhj");
});

test("shift uppercase characters several times", () => {
  const word = "aSBCZwadnzqQADNds";
  const key = 14;
  expect(caesarCipher(word, key)).toBe("oGPQNkorbneEORBrg");
});

test("make sure special characters are not shifted", () => {
  const word = "a@SBCZw!adn!zq,QA!DN}ds!";
  const key = 23;
  expect(caesarCipher(word, key)).toBe("x@PYZWt!xak!wn,NX!AK}ap!");
});

test("testing odin's case", () => {
  const word = "Hello, World!";
  const key = 3;
  expect(caesarCipher(word, key)).toBe("Khoor, Zruog!");
});
