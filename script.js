const input = document.getElementById('cityname');
const tempvalue = document.querySelector('.weather-box .temparature');
const Hymidutyvalue = document.querySelector(' .weather-details .info-hymydity span ');
const windvalue = document.querySelector(' .weather-details .info-wind span ');
const weatherdescriptionValue = document.querySelector(' .weather-box .description');
const tempBtn = document.querySelector('button');
const imageweathervalue = document.querySelector('.weather-box .weather img ');
const error404 = document.querySelector('.not-founds ');
const container = document.querySelector(' .container ');
const weatherbox = document.querySelector('.weather-box ');
const weatherdetails = document.querySelector('.weather-details');


tempBtn.addEventListener('click',async function (){
    try{ 
        if(input.value ==''){
            return
        }
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=`);
        if(!response.ok){
       throw new Error('could not fetch resource')
        }
    const data = await response.json();

    const temparature = data.main.temp;
    const hymydity = data.main.humidity;
    const wind = data.wind.speed;
    const weatherdesc = data.weather[0].description;
    const imageweather = data.weather[0].main;


if (imageweather=='clear') {
    imageweathervalue.src ='images/clear.png';
}
else if (imageweather=='Rain') {
    imageweathervalue.src='images/rain.png';
}
else if (imageweather=='snow') {
    imageweathervalue.src='images/snow.png';
}
else if (imageweather=='Clouds') {
    imageweathervalue.src='images/cloud.png';
}

else if (imageweather=='Mist') {
    imageweathervalue.src='images/mist.png';
}
    let celciusCalc =Math.round( +temparature-273.15) ;
    console.log(data)

    weatherdescriptionValue.innerHTML = weatherdesc;
    Hymidutyvalue.innerHTML=`${hymydity}%`;
    windvalue.innerHTML = `${wind}Km/h`
    tempvalue.innerHTML=`${celciusCalc}<span>°C</span>`;
    
    weatherbox.style.visibility='visible';
    weatherdetails.style.visibility='visible';
    error404.style.visibility ='hidden';
    container.style.height = '555px';
   
    }
     catch(err){
    console.log('Error :' + err);
    error404.style.visibility ='visible';
    weatherbox.style.visibility='hidden';
    weatherdetails.style.visibility='hidden';
    container.style.height = '400px'
     }  
       
        
        
        })

 
       
