import { Kilometer, numberToKilometer } from "./Metric";
import { numberToMile } from "./Imperial";
import { calculateOrbit } from "./Navigator";

let miles = numberToMile(800099223444881);
let kilometers = numberToKilometer(800099223444881);

calculateOrbit(kilometers); // OK!
calculateOrbit(miles); // error :)
calculateOrbit(800099223444881); //// error :)
