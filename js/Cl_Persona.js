export default class Cl_Persona {
    constructor (nombre, sexo) {
        this._nombre=nombre;
        this._sexo=sexo;
    }
    get nombre() {
        return this._nombre;
    }
    get sexo() {
        return this._sexo;
    }
}