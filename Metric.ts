// hint: use shape: Opaque<'Kilometers', number>
export type Kilometer = number & { _: "Kilometer" };
export const numberToKilometer = (n: number): Kilometer => n as Kilometer;
