const fetch  = require('node-fetch')


weather_odense = async function() {
    const url = "http://www.henrikdemant.com/weather/realtime.txt" 
    const response  = await fetch(url);
    const data      = await response.text();
    
    const temperaturArray  = data.split(/(\s+)/)
    const temperaturObject = {
            "weather" : {
            location     : 'Odense', 
            date    	 : temperaturArray[0],
            time     	 : temperaturArray[2],
            temp         : temperaturArray[4]
        }
    }
    return temperaturObject
}


weather = function(onSuccess){
    const URL    = 'http://www.henrikdemant.com/weather/realtime.txt'

    let response = fetch(URL)
    .then( res  => res.text())
    .then( data => {
        const temperaturArray  = data.split(/(\s+)/)
        const temperaturObject = {
             "weather" : {
                location     : 'Odense', 
                date    	 : temperaturArray[0],
                time     	 : temperaturArray[2],
                temp         : temperaturArray[4]
            }
        }
            onSuccess (temperaturObject)
        })
}


weather_by_city = async function(cityName,onSuccess) {

    const url = `https://vejr.eu/api.php?location=${cityName}&degree=C`

    let response = await fetch(url)
    let body = await response.json()
    
    onSuccess(body)
}


module.exports = {weather, weather_by_city, weather_odense}