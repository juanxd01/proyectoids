class Persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    mostrar(){
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad}`)
    }

}

class Animal extends Persona{
    constructor(nombre, edad){
        super()
        this.nombre = nombre
        this.edad = edad
    }
}

const persona = new Persona('Juan', 19)
persona.mostrar()
const mascota = new Animal('rufus', 50)
mascota.mostrar()