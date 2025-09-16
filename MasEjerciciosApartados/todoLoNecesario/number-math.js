const persona = { nombre: "Ana", edad: 25 };

Object.keys(persona);        // ["nombre", "edad"]
Object.values(persona);      // ["Ana", 25]
Object.entries(persona);     // [["nombre","Ana"], ["edad",25]]
Object.assign({}, persona);  // Copia un objeto
Object.freeze(persona);      // Congela (no se puede modificar)
Object.seal(persona);        // Sella (no se puede agregar/eliminar propiedades)
Object.hasOwn(persona, "edad"); // Devuelve true si existe la propiedad
