import { Opaque } from "./Opaque";

export type Kilometer = Opaque<"Kilometer", number>;
export const numberToKilometer = (n: number): Kilometer => n as Kilometer;
