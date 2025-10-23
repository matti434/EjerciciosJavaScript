
```js
promesa1.then((res) => {
    console.log(res.descripcion);
    promesa2.then((res) => {
        console.log(res.descripcion)
        promesa3.then((res) => {
            console.log(res.descripcion);
        }).catch((error) =>{
          console.log(error);
        })
    }).catch((error) => {
        console.error(error);
    })
    //.catch , manejo de errores
  })
  .catch((error) => {
    console.error(error);
  });
  ```
  aqui usamos promesas pero sigue siendo de manera sincrona por lo que se ejecuta secuencialmente
  primero va la Promesa 1 que dura : 3 segundos
  segundo va la Promesa 2 que dura : 5 segundos
  tercero va la Promesa 3 que dura : 2500
  **Recordemos que este tipo estructua esta mal, llamada piramide de la muerte**



```js
  let promesa1 = new Promise((response) => {
  setTimeout(() => {
    let resp = {
      response: 200,
      descripcion: "Esta info es importante",
    };
    response(resp);
  }, 3000);
});

let promesa2 = new Promise((response) => {
  setTimeout(() => {
    let resp = {
      response: 200,
      descripcion: "Esta info es importante pero demora mucho Promesa 2",
    };
    response(resp);
  }, 5000);
});

let promesa3 = new Promise((response) => {
  setTimeout(() => {
    let resp = {
      response: 200,
      descripcion: "Informacion rapida Promesa 3",
    };
    response(resp);
  }, 2500);
});
```

Como notamos no importa si la Promesa 3 es mas rapida, espera de manera secuencial a que las demas que estan primero terminen