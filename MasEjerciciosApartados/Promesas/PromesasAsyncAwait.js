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

async function  ejecutarPromesas() {
    let respuestaPromesa1 = await promesa1
    console.log(respuestaPromesa1);
    let respuestaPromesa2 = await promesa2
    console.log(respuestaPromesa2);
    let respuestaPromesa3 = await promesa3
    console.log(respuestaPromesa3);   
}

ejecutarPromesas();