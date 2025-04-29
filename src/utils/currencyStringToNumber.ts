export function currencyStringToNumber(value: string | number) {
  if (typeof value === "number") {
    return value;
  }

  const sanitizedString = value.replace(/\./g, "").replace(",", ".").split(" ");
  const finalValue =
    sanitizedString.length > 1 ? sanitizedString[1] : sanitizedString[0];

  return Number(finalValue);
}
