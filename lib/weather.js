const fetch  = require('node-fetch')

weather = function(onSuccess){
    const URL    = 'http://www.henrikdemant.com/weather/realtime.txt'

    let response = fetch(URL)
    .then( res  => res.text())
    .then( data => {
        const temperaturArray  = data.split(/(\s+)/)
        const temperaturObject = {
             "weather" : {
                location     : 'DK', 
                date    	 : temperaturArray[0],
                time     	 : temperaturArray[2],
                temp         : temperaturArray[4]
            }
        }
            onSuccess (temperaturObject)
        })
}

module.exports = weather