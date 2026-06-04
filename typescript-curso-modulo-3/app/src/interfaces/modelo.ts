import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

//Interfaces permitem heranca multipla 
export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}