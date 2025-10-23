
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