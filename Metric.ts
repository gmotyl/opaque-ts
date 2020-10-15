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
