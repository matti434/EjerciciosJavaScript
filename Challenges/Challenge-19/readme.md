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
