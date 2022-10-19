const axios = require('axios')

const endpoint = "https://rickandmortyapi.com/api/episode"

let config = {
    metod: 'get',
    url: endpoint
}

axios(config)
        .then((response)=>{
            return response.data.results
        })
        .then((results)=>{
            results.forEach(element => {
                console.log(element.created)
                console.log('****************')
            });

        })
        .catch((error)=>{
            console.log(Error(`error: ${error}`))
        })