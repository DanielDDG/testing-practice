class Calculator {
  add(x, y) {
    if (typeof x != "number" || typeof y != "number") {
      throw new Error("Your parameters must be numbers.");
    }
    return x + y;
  }

  subtract(x, y) {
    if (typeof x != "number" || typeof y != "number") {
      throw new Error("Your parameters must be numbers.");
    }
    return x - y;
  }
}

export { Calculator };
