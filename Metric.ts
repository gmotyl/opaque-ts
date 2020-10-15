// Hint : this type has been allready modified a bit but it's not opaque just yet - something is missing
export type Kilometer = {
  _: "Kilometer";
  value: number;
};

export const numberToKilometer = (n: number): Kilometer => {
  if (n < 0) {
    throw new Error("negative number is not allowed!");
  }

  return {
    _: "Kilometer",
    value: n,
  };
};
