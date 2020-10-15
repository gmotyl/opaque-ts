import { Kilometer, numberToKilometer } from "./Metric";
import { numberToMile } from "./Imperial";
import { calculateOrbit } from "./Navigator";

let miles = numberToMile(1000);
let kilometers = numberToKilometer(1609.344);

calculateOrbit(kilometers); // OK!
calculateOrbit(miles); // error :)
calculateOrbit(1000); //// error :)
