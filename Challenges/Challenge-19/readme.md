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


#### Que hace  Date.now() + Math.random();

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