### Estructura general de la aplicación

La app se compone de dos páginas principales:

 index.html → Página principal

 Sección Login (visible al inicio)

 Sección Registro Usuario (oculta)

 Sección Ingreso Producto (oculta)

 Sección Ingreso Categoría (oculta)

admin.html → Panel administrativo (acceso restringido)

 CRUD completo de Usuarios

 CRUD completo de Productos

 CRUD completo de Categorías


### Lógica del sistema

1. Clase Administrador

Tiene usuario y contraseña definidos de forma privada.

Se usa para el acceso al panel de administración.

Por qué no uso try...catch:

  - La validación es simple (comparación de strings).
  - No hay operaciones que puedan fallar.
  - Más directo.

Cuándo usar try...catch:

 - Operaciones con LocalStorage.
 - Llamadas a APIs.
 - Cualquier código que pueda lanzar errores inesperados.



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

"Cuando el usuario crea una categoría, la función agregarCategorias la guarda en almacen y a continuación actualizamos el select del formulario de producto con cargarCategoriasEnSelect(). Esa función utiliza createElement para generar option y appendChild para insertarlos. En el alta de producto validamos que exista una categoría seleccionada (si no, mostramos alert), creamos la instancia Productos y la guardamos. De esta forma la relación producto→categoría se hace por categoriaId y el select siempre está sincronizado con las categorías guardadas."


### faltante 12/10/2025

Creado hasta el momento
Clases Admin,Gestion,Categoria,Productos y usuario
app.js tiene todo el funcionamiento de la pagina
Faltante en app.js cambiar entre formularios al hacer click y formulario de usuario.
Pensar como usar auth.js y storege.js. Por ultimo agregar verificaciones.

### Corregir ?

creo que deberia pasar el contenido de admin.js a auth.js
auth = autenticacion

que hice y que voy a hacer - cree index.html, que tiene echos los formularios, creamos sus clases y gestion.js que recopila los datos guerda y trae segun se necesite. En app.js creamos todos los eventos y enviamos los datos de los formularios. Ahora lo que vamos a hacer es que auth.js tenga solo la validacion de inicio de sesion de admin y cuando este sea correcto devolvera un true en el evento de app.js donde se cambiara al admin.html donde este tendra un script src de admin.js. Y este tendra los eventos para visualizar, editar y eliminar.

Me fije y la autenticacion es bastante facil,entoces voy a usar este metodo para que sea mas seguro

IIFE (Immediately Invoked Function Expression):

(() => { ... })()  // ← Se ejecuta inmediatamente

Lo que pasa:La función se ejecuta inmediatamente
Crea un scope privado donde viven usuarioCorrecto y contrasenaCorrecta
Solo retorna la función de verificación
Las variables originales quedan encerradas (closure) - no son accesibles desde fuera

// link.getAttribute('data-section') devuelve → "usuario"
const seccionId = "usuario";

// Busca el elemento con data-section="usuario"
const linkActivo = document.querySelector(`[data-section="${seccionId}"]`);
// Encuentra: <a class="nav-link" data-section="usuario">👤 Registrar Usuario</a>

ENTONCES ¿PARA QUÉ USAR CLOSURE O # PRIVADAS?
Razones válidas:
✅ Mejores prácticas - Código más limpio y mantenible

✅ Encapsulación - Evita modificación accidental

✅ Dificulta (no imposibilita) el acceso para usuarios no técnicos

✅ Prepara para cuando tengas backend

Razones NO válidas:
❌ Seguridad real - No existe en el frontend

❌ Ocultar credenciales - Imposible en JavaScript del cliente

Entiendo que no hay una forma segura de esconder las credenciales. Ya que necesitamos otras cosas para que no se muestren, ahora es facil entrar ya que abrimos el devTools y buscamos el archivo auth.js. En protectos reales iria en el backend y usan appis.


Usamos el metodo helper para volver mas rapido crear elementos en html
