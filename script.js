class Persona {
    static contador = 0; // Atributo estático
    email = "mi correo"; // Atributo no estático

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Getters y Setters
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }

    // Método estático
    static saludar(persona) {
        // Un método estático se puede llamar sin crear una instancia de la clase
        console.log("Saludos desde static: " + persona.nombre);
    }
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); // Llama al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    nombreCargo() {
        // super llama al método de la clase padre
        return super.nombreCompleto() + ", " + this._departamento;
    }
}

// Crear instancias
let persona1 = new Persona("Luis", "Suárez");
console.log(persona1);

let empleado1 = new Empleado("César", "Romero", "Contabilidad");
console.log(empleado1);

// Acceder al nombre del empleado usando getter
console.log(empleado1.nombre);

console.log(persona1.nombreCompleto());
console.log(empleado1.nombreCargo());

Persona.saludar(persona1);
Persona.saludar(empleado1);

console.log(Persona.contador); // Acceder al atributo estático
console.log(persona1.email);   // Acceder al atributo no estático
