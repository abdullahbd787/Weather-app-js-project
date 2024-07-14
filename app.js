

   // Get the submit button element and add an event listener for the 'click' event.  When the button is clicked, it retrieves user input from the input field and fetches weather data from OpenWeatherMap API.
const submitBtn = document.getElementById('submit-btn');

   // Event listener for the submit button. When clicked, it retrieves user input from the input field and fetches weather data from OpenWeatherMap API.
submitBtn.addEventListener('click', function (e) { 

   // Get user input from the input field.
   const inputbox = document.getElementById('input-box').value;
   console.log(inputbox);

   // Using fetch API to get weather data from OpenWeatherMap API. Replace 'af4804234f722564fe33816b0bdc9496' with your own API key.
   fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputbox + '&appid=af4804234f722564fe33816b0bdc9496')
      .then(response => response.json())
      .then(data => {
         console.log(data);
         const cityName = data.name;
         const country = data.sys.country;
         const tem = data.main.temp;
         const temp = tem - 273.15;
         const descrip = data.weather[0].description;
         const humidity = data.main.humidity; 
         const wind = data.wind.speed;
         const feels = data.main.feels_like;
         const feel = feels - 273.15;
         const temp_mins = data.main.temp_min;
         const temp_min = temp_mins - 277.82;

         const temp_maxs = data.main.temp_max;
         const temp_max = temp_maxs - 270.56;

         document.getElementById('city').innerText = cityName;
         document.getElementById('citys').innerText = cityName;
         document.getElementById('country').innerText = country;
         document.getElementById('temp').innerText = temp.toFixed(2) + ' °C';
         document.getElementById('desc').innerText = descrip
         document.getElementById('humidity').innerText = humidity + '%';   
         document.getElementById('wind').innerText = wind + ' km/h';
         document.getElementById('feellike').innerText = feel.toFixed(2) + ' °C';
         document.getElementById('min').innerText = temp_min.toFixed(2) + ' °C';
         document.getElementById('max').innerText = temp_max.toFixed(2) + ' °C';
         
      })
      .catch(res => alert("Please  type right city name"));
});