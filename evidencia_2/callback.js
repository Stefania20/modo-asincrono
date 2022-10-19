const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url="https://restcountries.com/v3.1/all"

//funcion para conectar a un api en modo asincrono
function get_data(endpoint , exito , fallo){
    //1. crear el objeto xmlhttp:
    const h = new xmlHttpRequest();
    //2. estableces una conexion a la API
    h.open('GET' , endpoint)
    //3. enviar la request serve(API)
    h.send()
    //4. tratar los datos de la response
    h.onload = function(){
        exito(h.responseText)
    }

}
//funcion callback: exito
function exito(response){
    const paises = JSON.parse(response)
    console.log(paises)
    paises.forEach(element => {
        console.log(`Capital:${element.capital}`)
        console.log(`population:${element.population}`)
        console.log('---------------------')
    });
}

//funcion callback: fallo
function fallo(status){
    console.log(status)
}

//invocar la funcion
get_data(url , exito , fallo)
