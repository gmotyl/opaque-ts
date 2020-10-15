export type Mile = number & { _: "Mile" };
export const numberToMile = (n: number): Mile => n as Mile;
