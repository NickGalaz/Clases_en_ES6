class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    calcularImpuesto(montoBrutoAnual, deducciones) {
        let total = (montoBrutoAnual - deducciones) * (21 / 100);
        return total;
    }
}

export { Cliente };