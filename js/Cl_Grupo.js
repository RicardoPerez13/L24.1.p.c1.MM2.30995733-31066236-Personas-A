export default class Cl_Persona {
    constructor () {  
    this.cont_F= 0;
    this.cont_M= 0;
    this.cont_tot= 0;
    }
    procesar (persona) {
        this.cont_tot++;
        if (persona.sexo=="F") {
            this.cont_F++;
        }
        if (persona.sexo=="M") {
            this.cont_M++;
        }
    }
    devolverPersonas () {
        return this.cont_tot;
    }
    devolverHombres () {
        return this.cont_M;
    }
    porcMujeres () {
        return (this.cont_F*100)/this.cont_tot;
    }
    cantidad() {
        if (this.cont_F === this.cont_M) {
            return 'Igual cantidad de Hombres y Mujeres';
        }
        else if (this.cont_M > this.cont_F) {
            return 'Hay mas Hombres que Mujeres';
        } 
        else if (this.cont_F > this.cont_M) {
            return 'Hay mas Mujeres que Hombres';
        } 
    }
}