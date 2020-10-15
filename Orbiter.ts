import { Kilometer, numberToKilometer } from "./Metric";
import { numberToMile } from "./Imperial";
import { calculateOrbit } from "./Navigator";

let miles = numberToMile(1000);
let kilometers = numberToKilometer(1609.344); // 1000 miles =1609.344 kilometers

let iCanHackYou = -1000 as Kilometer; // error expected

calculateOrbit(kilometers); // OK
calculateOrbit(iCanHackYou); // iCanHackYou TS error in l.8 expected
calculateOrbit(miles); // error
