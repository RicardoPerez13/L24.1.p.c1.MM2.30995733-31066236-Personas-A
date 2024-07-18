/*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más
mujeres o ambos por igual.
Se tienen las siguientes personas: 
Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
Porcentaje de mujeres procesadas: 58.33%
Hay más mujeres*/



import Cl_Grupo from "./Cl_Grupo.js";
import Cl_Persona from "./Cl_Persona.js";

let persona1=new Cl_Persona ("Luisa", "F");
let persona2=new Cl_Persona ("Ana", "F");
let persona3=new Cl_Persona ("José", "M");
let persona4=new Cl_Persona ("Carmen", "F");
let persona5=new Cl_Persona ("Rosa", "F");
let persona6=new Cl_Persona ("José", "M");
let persona7=new Cl_Persona ("María", "F");
let persona8=new Cl_Persona ("Luz", "F");
let persona9=new Cl_Persona ("Rafael", "M");
let persona10=new Cl_Persona ("Liz", "F");
let persona11=new Cl_Persona ("Marcos", "M");
let persona12=new Cl_Persona ("Leo", "M");

let grupo=new Cl_Grupo();

grupo.procesar(persona1);
grupo.procesar(persona2);
grupo.procesar(persona3);
grupo.procesar(persona4);
grupo.procesar(persona5);
grupo.procesar(persona6);
grupo.procesar(persona7);
grupo.procesar(persona8);
grupo.procesar(persona9);
grupo.procesar(persona10);
grupo.procesar(persona11);
grupo.procesar(persona12);

let salida=document.getElementById("salida");
salida.innerHTML="Resultados del Grupo";
salida.innerHTML+="<br> El porcentaje de Mujeres es de: "+grupo.porcMujeres().toFixed(2)+"%";
salida.innerHTML+="<br> En el grupo hay: "+grupo.cantidad();