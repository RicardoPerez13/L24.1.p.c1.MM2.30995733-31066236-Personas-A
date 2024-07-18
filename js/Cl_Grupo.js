export default class Cl_Persona {
    constructor () {  
    this.cont_f= 0;
    this.cont_m= 0;
    this.cont_tot= 0;
    }
    procesar (persona) {
        this.cont_tot++;
        if (persona.sexo=="F") {
            this.cont_f++;
        }
        if (persona.sexo=="M") {
            this.cont_m++;
        }
    }
    devolverPersonas () {
        return this.cont_tot;
    }
    devolverHombres () {
        return this.cont_m;
    }
    porcMujeres () {
        return (this.cont_f*100)/this.cont_tot;
    }
    cantidad() {
        if (this.cont_F === this.cont_M) {
            return 'Igual cantidad de hombres y mujeres';
        }
        else if (this.cont_M > this.cont_F) {
            return 'Hay mas hombres';
        } 
        else if (this.cont_F > this.cont_M) {
            return 'Hay mas mujeres';
        } 
    }
}