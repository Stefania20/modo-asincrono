const needle = require('needle')

const endpoint = "https://restcountries.com/v3.1/all"

needle('get' , endpoint)
    .then((response)=>{
        return response.body.results
    })
    .then((tipos_pokemon)=>{
        tipos_pokemon.forEach(element => {
            console.log(element.name)
            console.log('****************')
        });
    })
    .catch((error)=>{
        console.error(error)
    })