let promesa1 = new Promise((response) =>{

    setTimeout(() =>{
        let resp = {
            response : 200,
            descripcion: 'Esta info es importante'
        }
    }, 3000)

});

let promesa2 = new Promise((response) =>{

    setTimeout(() =>{
        let resp = {
            response : 200,
            descripcion: 'Esta info es importante pero demora mucho Promesa 2'
        }
    }, 5000)

});


let promesa3 = new Promise((response) =>{

    setTimeout(() =>{
        let resp = {
            response : 200,
            descripcion: 'Informacion rapida Promesa 3'
        }
    }, 2500)

});


 promesa1.then(res => {
    console.log(res.descripcion);
 }).catch(error => {
    console.error(error);
 });