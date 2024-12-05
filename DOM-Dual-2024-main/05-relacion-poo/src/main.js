// testing de los ejercicios POO
//--------------ejercicio 1 ---------------------------------
//--- funciones constructoras -------
import {Tarea, TareaClass} from "./helpers/Ejercicio1.js";
const tarea1 = new Tarea("Aprender JS");
const tarea2 = new Tarea("Aprender React");
tarea1.info();
tarea1.toggleCompletada();
tarea1.info();
tarea2.info();

// --- Clases ------
const tarea1Clases = new TareaClass("Aprender JS");
const tarea2Clases = new TareaClass("Aprender React");
tarea1.info();
tarea1.toggleCompletada();
tarea1.info();
tarea2.info();

