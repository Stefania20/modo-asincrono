const axios = require('axios')

const endpoint="https://anime-facts-rest-api.herokuapp.com/api/v1"

let config = {
    url: endpoint,
    method: 'get'
    
}

const f = async ()=>{
    try{
        let response = await axios (config)
        exito(response.data)
    }catch(error){
        fallo(error)
    }
}

//funcion callback: exito
const exito = (response) =>{
    const tipos = response.results
    tipos.forEach(element => {
        console.log(`Tipo:${element.anime_name}`)
        console.log('---------------------')
    });
}

//funcion callback: fallo
const fallo = (status) =>{
    console.log(status)
}

f()
