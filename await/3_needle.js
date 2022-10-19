const needle = require('needle')

const endpoint="https://anime-facts-rest-api.herokuapp.com/api/v1"

const f = async () =>{
    try {
        const response = await needle('get' , endpoint)
        exito(response.data)
    } catch (error) {
        fallo(error)
    }
}
//funcion callback: exito
const exito = (response) =>{
    const tipos =response
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