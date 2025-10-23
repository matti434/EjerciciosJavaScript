 let promesa = new Promise ((response,reject) => {
    let resp = {
        response: 200,
        descripcion: 'Esta info es importante'
    }
    //response(resp)
    reject('Fallo')
 })

 promesa.then(res => {
    console.log(res);
 }).catch(error => {
    console.error(error);
 });