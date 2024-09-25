function reverseString(str) {
  const arr = Array.from(str);
  arr.reverse();
  const reversedString = arr.join("");

  return reversedString;
}

export { reverseString };
