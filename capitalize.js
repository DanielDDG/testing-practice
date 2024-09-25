function capitalize(string) {
  if (string == "") {
    throw new Error("String cannot be empty.");
  }

  let capitalizedString = "";
  let firstLetter = true;

  for (const c of string) {
    if (c === " ") {
      capitalizedString += `${c}`;
      continue;
    }

    if (firstLetter === true) {
      capitalizedString += `${c.toUpperCase()}`;
      firstLetter = false;
    } else {
      capitalizedString += `${c}`;
    }
  }

  return capitalizedString;
}

export { capitalize };
