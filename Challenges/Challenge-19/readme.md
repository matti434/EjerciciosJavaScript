## Idea principal

hacer de index.html la pagina principal

Este contendra

1. Sección Login (inicialmente visible)
2. Sección Registro Usuario (oculta)
3. Sección Ingreso Producto (oculta)
4. Sección Ingreso Categoría (oculta)

y admin.html (panel administrativo-acceso restringido)

- Lista completa de usuarios (CRUD)
- Lista completa de productos (CRUD)
- Lista completa de categorías (CRUD)

1. primero empezamos por administracion
2. creamos la clase administrador con usuario y contraseña ya definidos y en privado.
3. Por que no uso Try Catch ?

- La validacion es simple ya que estoy compranado strings
- No hay operaciones que puedan fallar.
- mas directo.
  Cuando deberia usar Try Catch ?
- Operacion con LocalStorage
- Llamadas a APIs

Voy a crear la clase gestion para poder guardar los datos de manera segura

- aqui guardare todos los arrays de las distintas clases de manera privada.

#### Que hace Date.now() + Math.random();

Date.now() → Devuelve los milisegundos desde 1970

```
console.log(Date.now()); // Ej: 1700000000000
```

Math.random() → Número aleatorio entre 0 y 1

```
console.log(Math.random()); // Ej: 0.548715416
```

¿Por qué usarlos juntos?
Problema con solo Date.now():

```
// Si creas 2 objetos muy rápido, tendrán MISMO ID
const id1 = Date.now(); // 1700000000000
const id2 = Date.now(); // 1700000000000 ← ¡Mismo!
Solución con Date.now() + Math.random():
```

```
const id1 = Date.now() + Math.random(); // 1700000000000.5487
const id2 = Date.now() + Math.random(); // 1700000000000.8412 ← Diferentes!
```

import { Gestion } from "./clases/gestion.js"; esta mal
Deberia ser Gestion.js, pero cambie el nombre ante y por alguna razon el programa no toma el cambio aun, de otra manera tira error.

¿Por qué return [...this.#usuarios]?
El problema:

```
// Si devuelves el array directamente:
obtenerUsuarios() {
    return this.#usuarios; // ❌ PELIGROSO
}
```

// En app.js:
const usuarios = gestion.obtenerUsuarios();
usuarios.push("USUARIO PIRATA"); // Modifica el array original
La solución:

```
obtenerUsuarios() {
    return [...this.#usuarios]; // ✅ SEGURO
}

```

```
// [...this.#usuarios] crea una COPIA del array
// Los cambios en la copia NO afectan al original
```

### Explicando Gestion.js

```
#cargarDatos() {
    this.#usuarios = this.#cargarDesdeStorage('usuarios');
    this.#productos = this.#cargarDesdeStorage('productos');
    this.#categorias = this.#cargarDesdeStorage('categorias');
}
```

Cuando abro la tienda (página), voy al almacen (LocalStorage) y traigo:

- Todos los usuarios guardados
- Todos los productos guardados
- Todos los categoria guardados

y los pongo en mis mostradores (arrays #usuarios,#productos, #caregorias)

### #guardarUsuarios()

```
#guardarUsuarios() {
    this.#guardarEnStorage('usuarios', this.#usuarios);
}
```

Cuando agrego un nuevo usuario, tomo TODOS los usuarios que tengo
en mi mostrador (#usuarios) y los guardo en el almacén (LocalStorage)

#### cargarDesdeStorage('usuarios')

"Ve al almacén (LocalStorage) y:

- Busca la CAJA llamada 'usuarios' (clave)
- Trae lo que hay dentro (datos)
- Si la caja está vacía, trae una caja vacía ([])"

#### guardarEnStorage('usuarios', this.#usuarios)

"Toma todos los usuarios (this.#usuarios) y:

- Ve al almacén (LocalStorage)
- Ponlos en la CAJA llamada 'usuarios' (clave)"

Como funciona el flujo ?

```
// PASO 1: Al crear Gestión
const gestion = new Gestion();
// → Ejecuta constructor()
// → Ejecuta #cargarDatos()

// PASO 2: Dentro de #cargarDatos()
this.#usuarios = this.#cargarDesdeStorage('usuarios');
//                                ↑↑↑↑↑↑↑↑↑
// Este 'usuarios' viaja hasta:

// PASO 3: Dentro de #cargarDesdeStorage(clave)
#cargarDesdeStorage(clave) { // ← clave = 'usuarios'
    const datos = localStorage.getItem(clave); // ← clave = 'usuarios'
    // Busca en localStorage por la clave 'usuarios'
}
```

### Flujo categoria

1. Usuario escribe en formulario → "Tecnología", "Productos electrónicos"
2. JavaScript obtiene los VALORES → "Tecnología", "Productos electrónicos"
3. Crea nueva Categoria → new Categoria("Tecnología", "Productos electrónicos")
4. Agrega al almacén → almacen.agregarCategoria(categoriaCompleta)
5. Se guarda en LocalStorage automáticamente

Deberia crear en categoria una funcion donde voy a ver las opciones.
Si categoria esta vacia muestra un select con el mensaje
sino deberia traer lo que esta guardado en categoria con el metodo obtenerCategoria y crear nuevas opciones

el flujo que deberia seguir
1 pagina carga, cargarCategoriaEnSelect() , select muestra la pagina.
2 Usuario agrega categoría , cargarCategoriasEnSelect() , Select se actualiza
3 Usuario crea producto , Usa categoría seleccionada

```
// Cargar categorías cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    cargarCategoriasEnSelect();
});
```

"Cuando el usuario crea una categoría, la función agregarCategorias la guarda en almacen y a continuación actualizamos el <select> del formulario de producto con cargarCategoriasEnSelect(). Esa función utiliza createElement para generar <option> y appendChild para insertarlos. En el alta de producto validamos que exista una categoría seleccionada (si no, mostramos alert), creamos la instancia Productos y la guardamos. De esta forma la relación producto→categoría se hace por categoriaId y el select siempre está sincronizado con las categorías guardadas."


### faltante 12/10/2025

Creado hasta el momento
Clases Admin,Gestion,Categoria,Productos y usuario
app.js tiene todo el funcionamiento de la pagina
Faltante en app.js cambiar entre formularios al hacer click y formulario de usuario.
Pensar como usar auth.js y storege.js. Por ultimo agregar verificaciones.