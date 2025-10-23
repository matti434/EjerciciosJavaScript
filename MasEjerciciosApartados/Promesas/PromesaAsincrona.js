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

//.then cuando se resuelve correctamente
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
