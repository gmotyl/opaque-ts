export type Mile = Opaque<"Mile", number>;
export const numberToMile = (n: number): Mile => n as Mile;
