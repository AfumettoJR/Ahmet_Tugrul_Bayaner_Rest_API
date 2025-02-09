// PAGE LOAD (ANKARA)--------------------------------------------------------------------------------------------------------
async function getData() {

    try{

        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=9d5a94423b324bc0b2c60841250102&q=Ankara&days=8&aqi=no&alerts=no');
        const data = await response.json();

        console.log(data);
        console.log(data.location.name);

        // CURRENT SECTION-----------------------------------------------------------------------------------------------------------------
        // location country
        const country = document.getElementById("country");
        country.innerHTML = data.location.country;

        // location city
        const location = document.getElementById("locationName");
        location.innerHTML = data.location.name;

        // temperature
        const temp = document.getElementById("temperature");
        temp.innerHTML = `${data.current.temp_f}°F`;

        // weather description
        const desc = document.getElementById("description");
        desc.innerHTML = data.current.condition.text;

        // weather icon
        const icon = document.getElementById("icon");
        icon.innerHTML = `<img src= "${data.current.condition.icon}" alt="${data.current.condition.text}" />`;

        // current day
        const day = document.getElementById("day");
        const localTime = new Date(data.location.localtime);
        const dayName = localTime.toLocaleDateString('en-US', { weekday: 'long' });
        const date = document.getElementById("date");
        const formattedDate = localTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        day.innerHTML = `${formattedDate}, ${dayName}`;

        // current time
        const time = document.getElementById("time");
        const formattedTime = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        time.innerHTML = formattedTime;

        // TODAY'S FORECAST SECTION----------------------------------------------------------------------------------------------------------
        // 6AM 
        const icon6 = document.getElementById("icon6");
        icon6.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[6].condition.icon}" alt="${data.forecast.forecastday[0].hour[6].condition.text}" />`;

        const temp6 = document.getElementById("temperature6");
        temp6.innerHTML = `${data.forecast.forecastday[0].hour[6].temp_f}°F`;

        // 9AM 
        const icon9 = document.getElementById("icon9");
        icon9.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[9].condition.icon}" alt="${data.forecast.forecastday[0].hour[9].condition.text}" />`;

        const temp9 = document.getElementById("temperature9");
        temp9.innerHTML = `${data.forecast.forecastday[0].hour[9].temp_f}°F`;

        // 12PM 
        const icon12 = document.getElementById("icon12");
        icon12.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[12].condition.icon}" alt="${data.forecast.forecastday[0].hour[12].condition.text}" />`;

        const temp12 = document.getElementById("temperature12");
        temp12.innerHTML = `${data.forecast.forecastday[0].hour[12].temp_f}°F`;

        // 3PM 
        const icon15 = document.getElementById("icon15");
        icon15.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[15].condition.icon}" alt="${data.forecast.forecastday[0].hour[15].condition.text}" />`;

        const temp15 = document.getElementById("temperature15");
        temp15.innerHTML = `${data.forecast.forecastday[0].hour[15].temp_f}°F`;

        // 6PM
        const icon18 = document.getElementById("icon18");
        icon18.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[18].condition.icon}" alt="${data.forecast.forecastday[0].hour[18].condition.text}" />`;

        const temp18 = document.getElementById("temperature18");
        temp18.innerHTML = `${data.forecast.forecastday[0].hour[18].temp_f}°F`;

        // 9PM
        const icon21 = document.getElementById("icon21");
        icon21.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[21].condition.icon}" alt="${data.forecast.forecastday[0].hour[21].condition.text}" />`;

        const temp21 = document.getElementById("temperature21");
        temp21.innerHTML = `${data.forecast.forecastday[0].hour[21].temp_f}°F`;

        // AIR CONDITIONS --------------------------------------------------------------------------------------------------------------------------------
        // real feel
        const realFeel = document.getElementById("RF");
        realFeel.innerHTML = `${data.current.feelslike_f}°`; 

        // wind
        const wind = document.getElementById("windSpeed");
        wind.innerHTML = `${data.current.wind_kph} km/h`;

        // chance of rain
        const rain = document.getElementById("CoR");
        rain.innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;

        // uv
        const uvIndex = document.getElementById("uvIndex");
        uvIndex.innerHTML = `${data.current.uv}`;

        // 7DAY FORECAST --------------------------------------------------------------------------------------------------------------------------------
        // day1
        const day1icon = document.getElementById("forecastIcon1");
        day1icon.innerHTML = `<img src= "${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[0].day.condition.text}" />`;

        const day1desc = document.getElementById("forecastDesc1");
        day1desc.innerHTML = data.forecast.forecastday[0].day.condition.text;

        const day1TempD = document.getElementById("forecastTempD1");
        day1TempD.innerHTML = `${data.forecast.forecastday[0].day.maxtemp_f}`;

        const day1TempN = document.getElementById("forecastTempN1");
        day1TempN.innerHTML = `/${data.forecast.forecastday[0].day.mintemp_f}`;

        // day2
        const day2Name = document.getElementById("forecastDay2");
        const forecastTime2 = new Date(data.forecast.forecastday[1].date);
        const forecastDayName2 = forecastTime2.toLocaleDateString('en-US', { weekday: 'short' });
        day2Name.innerHTML = forecastDayName2;

        const day2icon = document.getElementById("forecastIcon2");
        day2icon.innerHTML = `<img src= "${data.forecast.forecastday[1].day.condition.icon}" alt="${data.forecast.forecastday[1].day.condition.text}" />`;

        const day2desc = document.getElementById("forecastDesc2");
        day2desc.innerHTML = data.forecast.forecastday[1].day.condition.text;

        const day2TempD = document.getElementById("forecastTempD2");
        day2TempD.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_f}`;

        const day2TempN = document.getElementById("forecastTempN2");
        day2TempN.innerHTML = `/${data.forecast.forecastday[1].day.mintemp_f}`;    
        
        // day3
        const day3Name = document.getElementById("forecastDay3");
        const forecastTime3 = new Date(data.forecast.forecastday[2].date);
        const forecastDayName3 = forecastTime3.toLocaleDateString('en-US', { weekday: 'short' });
        day3Name.innerHTML = forecastDayName3;

        const day3icon = document.getElementById("forecastIcon3");
        day3icon.innerHTML = `<img src= "${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}" />`;

        const day3desc = document.getElementById("forecastDesc3");
        day3desc.innerHTML = data.forecast.forecastday[2].day.condition.text;

        const day3TempD = document.getElementById("forecastTempD3");
        day3TempD.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_f}`;

        const day3TempN = document.getElementById("forecastTempN3");
        day3TempN.innerHTML = `/${data.forecast.forecastday[2].day.mintemp_f}`;

        // day4
        const day4Name = document.getElementById("forecastDay4");
        const forecastTime4 = new Date(data.forecast.forecastday[3].date);
        const forecastDayName4 = forecastTime4.toLocaleDateString('en-US', { weekday: 'short' });
        day4Name.innerHTML = forecastDayName4;

        const day4icon = document.getElementById("forecastIcon4");
        day4icon.innerHTML = `<img src= "${data.forecast.forecastday[3].day.condition.icon}" alt="${data.forecast.forecastday[3].day.condition.text}" />`;

        const day4desc = document.getElementById("forecastDesc4");
        day4desc.innerHTML = data.forecast.forecastday[3].day.condition.text;

        const day4TempD = document.getElementById("forecastTempD4");
        day4TempD.innerHTML = `${data.forecast.forecastday[3].day.maxtemp_f}`;

        const day4TempN = document.getElementById("forecastTempN4");
        day4TempN.innerHTML = `/${data.forecast.forecastday[3].day.mintemp_f}`;

        // day5
        const day5Name = document.getElementById("forecastDay5");
        const forecastTime5 = new Date(data.forecast.forecastday[4].date);
        const forecastDayName5 = forecastTime5.toLocaleDateString('en-US', { weekday: 'short' });
        day5Name.innerHTML = forecastDayName5;

        const day5icon = document.getElementById("forecastIcon5");
        day5icon.innerHTML = `<img src= "${data.forecast.forecastday[4].day.condition.icon}" alt="${data.forecast.forecastday[4].day.condition.text}" />`;

        const day5desc = document.getElementById("forecastDesc5");
        day5desc.innerHTML = data.forecast.forecastday[4].day.condition.text;

        const day5TempD = document.getElementById("forecastTempD5");
        day5TempD.innerHTML = `${data.forecast.forecastday[4].day.maxtemp_f}`;

        const day5TempN = document.getElementById("forecastTempN5");
        day5TempN.innerHTML = `/${data.forecast.forecastday[4].day.mintemp_f}`;

        // day6
        const day6Name = document.getElementById("forecastDay6");
        const forecastTime6 = new Date(data.forecast.forecastday[5].date);
        const forecastDayName6 = forecastTime6.toLocaleDateString('en-US', { weekday: 'short' });
        day6Name.innerHTML = forecastDayName6;

        const day6icon = document.getElementById("forecastIcon6");
        day6icon.innerHTML = `<img src= "${data.forecast.forecastday[5].day.condition.icon}" alt="${data.forecast.forecastday[5].day.condition.text}" />`;

        const day6desc = document.getElementById("forecastDesc6");
        day6desc.innerHTML = data.forecast.forecastday[5].day.condition.text;

        const day6TempD = document.getElementById("forecastTempD6");
        day6TempD.innerHTML = `${data.forecast.forecastday[5].day.maxtemp_f}`;

        const day6TempN = document.getElementById("forecastTempN6");
        day6TempN.innerHTML = `/${data.forecast.forecastday[5].day.mintemp_f}`;

        // day7
        const day7Name = document.getElementById("forecastDay7");
        const forecastTime7 = new Date(data.forecast.forecastday[6].date);
        const forecastDayName7 = forecastTime7.toLocaleDateString('en-US', { weekday: 'short' });
        day7Name.innerHTML = forecastDayName7;

        const day7icon = document.getElementById("forecastIcon7");
        day7icon.innerHTML = `<img src= "${data.forecast.forecastday[6].day.condition.icon}" alt="${data.forecast.forecastday[6].day.condition.text}" />`;

        const day7desc = document.getElementById("forecastDesc7");
        day7desc.innerHTML = data.forecast.forecastday[6].day.condition.text;

        const day7TempD = document.getElementById("forecastTempD7");
        day7TempD.innerHTML = `${data.forecast.forecastday[6].day.maxtemp_f}`;

        const day7TempN = document.getElementById("forecastTempN7");
        day7TempN.innerHTML = `/${data.forecast.forecastday[6].day.mintemp_f}`;

    } catch(error){

        console.log("Error:", error);

    }
    
}
getData();

// TORONTO ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const buttonT = document.getElementById("buttonToronto");

buttonT.addEventListener("click", async function(){

    async function getDataToronto() {

        try{
    
            const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=9d5a94423b324bc0b2c60841250102&q=Toronto&days=8&aqi=no&alerts=no');
            const data = await response.json();
    
            console.log(data);
            console.log(data.location.name);
    
            // CURRENT SECTION-----------------------------------------------------------------------------------------------------------------
            // location country
            const country = document.getElementById("country");
            country.innerHTML = data.location.country;
    
            // location city
            const location = document.getElementById("locationName");
            location.innerHTML = data.location.name;
    
            // temperature
            const temp = document.getElementById("temperature");
            temp.innerHTML = `${data.current.temp_f}°F`;
    
            // weather description
            const desc = document.getElementById("description");
            desc.innerHTML = data.current.condition.text;
    
            // weather icon
            const icon = document.getElementById("icon");
            icon.innerHTML = `<img src= "${data.current.condition.icon}" alt="${data.current.condition.text}" />`;
    
            // current day
            const day = document.getElementById("day");
            const localTime = new Date(data.location.localtime);
            const dayName = localTime.toLocaleDateString('en-US', { weekday: 'long' });
            const date = document.getElementById("date");
            const formattedDate = localTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
            day.innerHTML = `${formattedDate}, ${dayName}`;
    
            // current time
            const time = document.getElementById("time");
            const formattedTime = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
            time.innerHTML = formattedTime;
    
            // TODAY'S FORECAST SECTION----------------------------------------------------------------------------------------------------------
            // 6AM 
            const icon6 = document.getElementById("icon6");
            icon6.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[6].condition.icon}" alt="${data.forecast.forecastday[0].hour[6].condition.text}" />`;
    
            const temp6 = document.getElementById("temperature6");
            temp6.innerHTML = `${data.forecast.forecastday[0].hour[6].temp_f}°F`;
    
            // 9AM 
            const icon9 = document.getElementById("icon9");
            icon9.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[9].condition.icon}" alt="${data.forecast.forecastday[0].hour[9].condition.text}" />`;
    
            const temp9 = document.getElementById("temperature9");
            temp9.innerHTML = `${data.forecast.forecastday[0].hour[9].temp_f}°F`;

            // 12PM 
            const icon12 = document.getElementById("icon12");
            icon12.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[12].condition.icon}" alt="${data.forecast.forecastday[0].hour[12].condition.text}" />`;
    
            const temp12 = document.getElementById("temperature12");
            temp12.innerHTML = `${data.forecast.forecastday[0].hour[12].temp_f}°F`;
    
            // 3PM 
            const icon15 = document.getElementById("icon15");
            icon15.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[15].condition.icon}" alt="${data.forecast.forecastday[0].hour[15].condition.text}" />`;
    
            const temp15 = document.getElementById("temperature15");
            temp15.innerHTML = `${data.forecast.forecastday[0].hour[15].temp_f}°F`;
    
            // 6PM
            const icon18 = document.getElementById("icon18");
            icon18.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[18].condition.icon}" alt="${data.forecast.forecastday[0].hour[18].condition.text}" />`;
    
            const temp18 = document.getElementById("temperature18");
            temp18.innerHTML = `${data.forecast.forecastday[0].hour[18].temp_f}°F`;
    
            // 9PM
            const icon21 = document.getElementById("icon21");
            icon21.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[21].condition.icon}" alt="${data.forecast.forecastday[0].hour[21].condition.text}" />`;
    
            const temp21 = document.getElementById("temperature21");
            temp21.innerHTML = `${data.forecast.forecastday[0].hour[21].temp_f}°F`;
    
            // AIR CONDITIONS --------------------------------------------------------------------------------------------------------------------------------
            // real feel
            const realFeel = document.getElementById("RF");
            realFeel.innerHTML = `${data.current.feelslike_f}°`; 
    
            // wind
            const wind = document.getElementById("windSpeed");
            wind.innerHTML = `${data.current.wind_kph} km/h`;
    
            // chance of rain
            const rain = document.getElementById("CoR");
            rain.innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    
            // uv
            const uvIndex = document.getElementById("uvIndex");
            uvIndex.innerHTML = `${data.current.uv}`;
    
            // 7DAY FORECAST --------------------------------------------------------------------------------------------------------------------------------
            // day1
            const day1icon = document.getElementById("forecastIcon1");
            day1icon.innerHTML = `<img src= "${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[0].day.condition.text}" />`;
    
            const day1desc = document.getElementById("forecastDesc1");
            day1desc.innerHTML = data.forecast.forecastday[0].day.condition.text;
    
            const day1TempD = document.getElementById("forecastTempD1");
            day1TempD.innerHTML = `${data.forecast.forecastday[0].day.maxtemp_f}`;
    
            const day1TempN = document.getElementById("forecastTempN1");
            day1TempN.innerHTML = `/${data.forecast.forecastday[0].day.mintemp_f}`;
    
            // day2
            const day2Name = document.getElementById("forecastDay2");
            const forecastTime2 = new Date(data.forecast.forecastday[1].date);
            const forecastDayName2 = forecastTime2.toLocaleDateString('en-US', { weekday: 'short' });
            day2Name.innerHTML = forecastDayName2;
    
            const day2icon = document.getElementById("forecastIcon2");
            day2icon.innerHTML = `<img src= "${data.forecast.forecastday[1].day.condition.icon}" alt="${data.forecast.forecastday[1].day.condition.text}" />`;
    
            const day2desc = document.getElementById("forecastDesc2");
            day2desc.innerHTML = data.forecast.forecastday[1].day.condition.text;
    
            const day2TempD = document.getElementById("forecastTempD2");
            day2TempD.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_f}`;
    
            const day2TempN = document.getElementById("forecastTempN2");
            day2TempN.innerHTML = `/${data.forecast.forecastday[1].day.mintemp_f}`;    
            
            // day3
            const day3Name = document.getElementById("forecastDay3");
            const forecastTime3 = new Date(data.forecast.forecastday[2].date);
            const forecastDayName3 = forecastTime3.toLocaleDateString('en-US', { weekday: 'short' });
            day3Name.innerHTML = forecastDayName3;
    
            const day3icon = document.getElementById("forecastIcon3");
            day3icon.innerHTML = `<img src= "${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}" />`;
    
            const day3desc = document.getElementById("forecastDesc3");
            day3desc.innerHTML = data.forecast.forecastday[2].day.condition.text;
    
            const day3TempD = document.getElementById("forecastTempD3");
            day3TempD.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_f}`;
    
            const day3TempN = document.getElementById("forecastTempN3");
            day3TempN.innerHTML = `/${data.forecast.forecastday[2].day.mintemp_f}`;
    
            // day4
            const day4Name = document.getElementById("forecastDay4");
            const forecastTime4 = new Date(data.forecast.forecastday[3].date);
            const forecastDayName4 = forecastTime4.toLocaleDateString('en-US', { weekday: 'short' });
            day4Name.innerHTML = forecastDayName4;
    
            const day4icon = document.getElementById("forecastIcon4");
            day4icon.innerHTML = `<img src= "${data.forecast.forecastday[3].day.condition.icon}" alt="${data.forecast.forecastday[3].day.condition.text}" />`;
    
            const day4desc = document.getElementById("forecastDesc4");
            day4desc.innerHTML = data.forecast.forecastday[3].day.condition.text;
    
            const day4TempD = document.getElementById("forecastTempD4");
            day4TempD.innerHTML = `${data.forecast.forecastday[3].day.maxtemp_f}`;
    
            const day4TempN = document.getElementById("forecastTempN4");
            day4TempN.innerHTML = `/${data.forecast.forecastday[3].day.mintemp_f}`;
    
            // day5
            const day5Name = document.getElementById("forecastDay5");
            const forecastTime5 = new Date(data.forecast.forecastday[4].date);
            const forecastDayName5 = forecastTime5.toLocaleDateString('en-US', { weekday: 'short' });
            day5Name.innerHTML = forecastDayName5;
    
            const day5icon = document.getElementById("forecastIcon5");
            day5icon.innerHTML = `<img src= "${data.forecast.forecastday[4].day.condition.icon}" alt="${data.forecast.forecastday[4].day.condition.text}" />`;
    
            const day5desc = document.getElementById("forecastDesc5");
            day5desc.innerHTML = data.forecast.forecastday[4].day.condition.text;
    
            const day5TempD = document.getElementById("forecastTempD5");
            day5TempD.innerHTML = `${data.forecast.forecastday[4].day.maxtemp_f}`;
    
            const day5TempN = document.getElementById("forecastTempN5");
            day5TempN.innerHTML = `/${data.forecast.forecastday[4].day.mintemp_f}`;
    
            // day6
            const day6Name = document.getElementById("forecastDay6");
            const forecastTime6 = new Date(data.forecast.forecastday[5].date);
            const forecastDayName6 = forecastTime6.toLocaleDateString('en-US', { weekday: 'short' });
            day6Name.innerHTML = forecastDayName6;
    
            const day6icon = document.getElementById("forecastIcon6");
            day6icon.innerHTML = `<img src= "${data.forecast.forecastday[5].day.condition.icon}" alt="${data.forecast.forecastday[5].day.condition.text}" />`;
    
            const day6desc = document.getElementById("forecastDesc6");
            day6desc.innerHTML = data.forecast.forecastday[5].day.condition.text;
    
            const day6TempD = document.getElementById("forecastTempD6");
            day6TempD.innerHTML = `${data.forecast.forecastday[5].day.maxtemp_f}`;
    
            const day6TempN = document.getElementById("forecastTempN6");
            day6TempN.innerHTML = `/${data.forecast.forecastday[5].day.mintemp_f}`;
    
            // day7
            const day7Name = document.getElementById("forecastDay7");
            const forecastTime7 = new Date(data.forecast.forecastday[6].date);
            const forecastDayName7 = forecastTime7.toLocaleDateString('en-US', { weekday: 'short' });
            day7Name.innerHTML = forecastDayName7;
    
            const day7icon = document.getElementById("forecastIcon7");
            day7icon.innerHTML = `<img src= "${data.forecast.forecastday[6].day.condition.icon}" alt="${data.forecast.forecastday[6].day.condition.text}" />`;
    
            const day7desc = document.getElementById("forecastDesc7");
            day7desc.innerHTML = data.forecast.forecastday[6].day.condition.text;
    
            const day7TempD = document.getElementById("forecastTempD7");
            day7TempD.innerHTML = `${data.forecast.forecastday[6].day.maxtemp_f}`;
    
            const day7TempN = document.getElementById("forecastTempN7");
            day7TempN.innerHTML = `/${data.forecast.forecastday[6].day.mintemp_f}`;
    
        } catch(error){
    
            console.log("Error:", error);
    
        }
        
    }
    getDataToronto();

})

// LONDON ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const buttonL = document.getElementById("buttonLondon");

buttonL.addEventListener("click", async function(){

    async function getDataLondon() {

        try{
    
            const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=9d5a94423b324bc0b2c60841250102&q=London&days=8&aqi=no&alerts=no');
            const data = await response.json();
    
            console.log(data);
            console.log(data.location.name);
    
            // CURRENT SECTION-----------------------------------------------------------------------------------------------------------------
            // location country
            const country = document.getElementById("country");
            country.innerHTML = data.location.country;
    
            // location city
            const location = document.getElementById("locationName");
            location.innerHTML = data.location.name;
    
            // temperature
            const temp = document.getElementById("temperature");
            temp.innerHTML = `${data.current.temp_f}°F`;
    
            // weather description
            const desc = document.getElementById("description");
            desc.innerHTML = data.current.condition.text;
    
            // weather icon
            const icon = document.getElementById("icon");
            icon.innerHTML = `<img src= "${data.current.condition.icon}" alt="${data.current.condition.text}" />`;
    
            // current day
            const day = document.getElementById("day");
            const localTime = new Date(data.location.localtime);
            const dayName = localTime.toLocaleDateString('en-US', { weekday: 'long' });
            const date = document.getElementById("date");
            const formattedDate = localTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
            day.innerHTML = `${formattedDate}, ${dayName}`;
    
            // current time
            const time = document.getElementById("time");
            const formattedTime = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
            time.innerHTML = formattedTime;
    
            // TODAY'S FORECAST SECTION----------------------------------------------------------------------------------------------------------
            // 6AM 
            const icon6 = document.getElementById("icon6");
            icon6.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[6].condition.icon}" alt="${data.forecast.forecastday[0].hour[6].condition.text}" />`;
    
            const temp6 = document.getElementById("temperature6");
            temp6.innerHTML = `${data.forecast.forecastday[0].hour[6].temp_f}°F`;
    
            // 9AM 
            const icon9 = document.getElementById("icon9");
            icon9.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[9].condition.icon}" alt="${data.forecast.forecastday[0].hour[9].condition.text}" />`;
    
            const temp9 = document.getElementById("temperature9");
            temp9.innerHTML = `${data.forecast.forecastday[0].hour[9].temp_f}°F`;

            // 12PM 
            const icon12 = document.getElementById("icon12");
            icon12.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[12].condition.icon}" alt="${data.forecast.forecastday[0].hour[12].condition.text}" />`;
    
            const temp12 = document.getElementById("temperature12");
            temp12.innerHTML = `${data.forecast.forecastday[0].hour[12].temp_f}°F`;
    
            // 3PM 
            const icon15 = document.getElementById("icon15");
            icon15.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[15].condition.icon}" alt="${data.forecast.forecastday[0].hour[15].condition.text}" />`;
    
            const temp15 = document.getElementById("temperature15");
            temp15.innerHTML = `${data.forecast.forecastday[0].hour[15].temp_f}°F`;
    
            // 6PM
            const icon18 = document.getElementById("icon18");
            icon18.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[18].condition.icon}" alt="${data.forecast.forecastday[0].hour[18].condition.text}" />`;
    
            const temp18 = document.getElementById("temperature18");
            temp18.innerHTML = `${data.forecast.forecastday[0].hour[18].temp_f}°F`;
    
            // 9PM
            const icon21 = document.getElementById("icon21");
            icon21.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[21].condition.icon}" alt="${data.forecast.forecastday[0].hour[21].condition.text}" />`;
    
            const temp21 = document.getElementById("temperature21");
            temp21.innerHTML = `${data.forecast.forecastday[0].hour[21].temp_f}°F`;
    
            // AIR CONDITIONS --------------------------------------------------------------------------------------------------------------------------------
            // real feel
            const realFeel = document.getElementById("RF");
            realFeel.innerHTML = `${data.current.feelslike_f}°`; 
    
            // wind
            const wind = document.getElementById("windSpeed");
            wind.innerHTML = `${data.current.wind_kph} km/h`;
    
            // chance of rain
            const rain = document.getElementById("CoR");
            rain.innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    
            // uv
            const uvIndex = document.getElementById("uvIndex");
            uvIndex.innerHTML = `${data.current.uv}`;
    
            // 7DAY FORECAST --------------------------------------------------------------------------------------------------------------------------------
            // day1
            const day1icon = document.getElementById("forecastIcon1");
            day1icon.innerHTML = `<img src= "${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[0].day.condition.text}" />`;
    
            const day1desc = document.getElementById("forecastDesc1");
            day1desc.innerHTML = data.forecast.forecastday[0].day.condition.text;
    
            const day1TempD = document.getElementById("forecastTempD1");
            day1TempD.innerHTML = `${data.forecast.forecastday[0].day.maxtemp_f}`;
    
            const day1TempN = document.getElementById("forecastTempN1");
            day1TempN.innerHTML = `/${data.forecast.forecastday[0].day.mintemp_f}`;
    
            // day2
            const day2Name = document.getElementById("forecastDay2");
            const forecastTime2 = new Date(data.forecast.forecastday[1].date);
            const forecastDayName2 = forecastTime2.toLocaleDateString('en-US', { weekday: 'short' });
            day2Name.innerHTML = forecastDayName2;
    
            const day2icon = document.getElementById("forecastIcon2");
            day2icon.innerHTML = `<img src= "${data.forecast.forecastday[1].day.condition.icon}" alt="${data.forecast.forecastday[1].day.condition.text}" />`;
    
            const day2desc = document.getElementById("forecastDesc2");
            day2desc.innerHTML = data.forecast.forecastday[1].day.condition.text;
    
            const day2TempD = document.getElementById("forecastTempD2");
            day2TempD.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_f}`;
    
            const day2TempN = document.getElementById("forecastTempN2");
            day2TempN.innerHTML = `/${data.forecast.forecastday[1].day.mintemp_f}`;    
            
            // day3
            const day3Name = document.getElementById("forecastDay3");
            const forecastTime3 = new Date(data.forecast.forecastday[2].date);
            const forecastDayName3 = forecastTime3.toLocaleDateString('en-US', { weekday: 'short' });
            day3Name.innerHTML = forecastDayName3;
    
            const day3icon = document.getElementById("forecastIcon3");
            day3icon.innerHTML = `<img src= "${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}" />`;
    
            const day3desc = document.getElementById("forecastDesc3");
            day3desc.innerHTML = data.forecast.forecastday[2].day.condition.text;
    
            const day3TempD = document.getElementById("forecastTempD3");
            day3TempD.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_f}`;
    
            const day3TempN = document.getElementById("forecastTempN3");
            day3TempN.innerHTML = `/${data.forecast.forecastday[2].day.mintemp_f}`;
    
            // day4
            const day4Name = document.getElementById("forecastDay4");
            const forecastTime4 = new Date(data.forecast.forecastday[3].date);
            const forecastDayName4 = forecastTime4.toLocaleDateString('en-US', { weekday: 'short' });
            day4Name.innerHTML = forecastDayName4;
    
            const day4icon = document.getElementById("forecastIcon4");
            day4icon.innerHTML = `<img src= "${data.forecast.forecastday[3].day.condition.icon}" alt="${data.forecast.forecastday[3].day.condition.text}" />`;
    
            const day4desc = document.getElementById("forecastDesc4");
            day4desc.innerHTML = data.forecast.forecastday[3].day.condition.text;
    
            const day4TempD = document.getElementById("forecastTempD4");
            day4TempD.innerHTML = `${data.forecast.forecastday[3].day.maxtemp_f}`;
    
            const day4TempN = document.getElementById("forecastTempN4");
            day4TempN.innerHTML = `/${data.forecast.forecastday[3].day.mintemp_f}`;
    
            // day5
            const day5Name = document.getElementById("forecastDay5");
            const forecastTime5 = new Date(data.forecast.forecastday[4].date);
            const forecastDayName5 = forecastTime5.toLocaleDateString('en-US', { weekday: 'short' });
            day5Name.innerHTML = forecastDayName5;
    
            const day5icon = document.getElementById("forecastIcon5");
            day5icon.innerHTML = `<img src= "${data.forecast.forecastday[4].day.condition.icon}" alt="${data.forecast.forecastday[4].day.condition.text}" />`;
    
            const day5desc = document.getElementById("forecastDesc5");
            day5desc.innerHTML = data.forecast.forecastday[4].day.condition.text;
    
            const day5TempD = document.getElementById("forecastTempD5");
            day5TempD.innerHTML = `${data.forecast.forecastday[4].day.maxtemp_f}`;
    
            const day5TempN = document.getElementById("forecastTempN5");
            day5TempN.innerHTML = `/${data.forecast.forecastday[4].day.mintemp_f}`;
    
            // day6
            const day6Name = document.getElementById("forecastDay6");
            const forecastTime6 = new Date(data.forecast.forecastday[5].date);
            const forecastDayName6 = forecastTime6.toLocaleDateString('en-US', { weekday: 'short' });
            day6Name.innerHTML = forecastDayName6;
    
            const day6icon = document.getElementById("forecastIcon6");
            day6icon.innerHTML = `<img src= "${data.forecast.forecastday[5].day.condition.icon}" alt="${data.forecast.forecastday[5].day.condition.text}" />`;
    
            const day6desc = document.getElementById("forecastDesc6");
            day6desc.innerHTML = data.forecast.forecastday[5].day.condition.text;
    
            const day6TempD = document.getElementById("forecastTempD6");
            day6TempD.innerHTML = `${data.forecast.forecastday[5].day.maxtemp_f}`;
    
            const day6TempN = document.getElementById("forecastTempN6");
            day6TempN.innerHTML = `/${data.forecast.forecastday[5].day.mintemp_f}`;
    
            // day7
            const day7Name = document.getElementById("forecastDay7");
            const forecastTime7 = new Date(data.forecast.forecastday[6].date);
            const forecastDayName7 = forecastTime7.toLocaleDateString('en-US', { weekday: 'short' });
            day7Name.innerHTML = forecastDayName7;
    
            const day7icon = document.getElementById("forecastIcon7");
            day7icon.innerHTML = `<img src= "${data.forecast.forecastday[6].day.condition.icon}" alt="${data.forecast.forecastday[6].day.condition.text}" />`;
    
            const day7desc = document.getElementById("forecastDesc7");
            day7desc.innerHTML = data.forecast.forecastday[6].day.condition.text;
    
            const day7TempD = document.getElementById("forecastTempD7");
            day7TempD.innerHTML = `${data.forecast.forecastday[6].day.maxtemp_f}`;
    
            const day7TempN = document.getElementById("forecastTempN7");
            day7TempN.innerHTML = `/${data.forecast.forecastday[6].day.mintemp_f}`;
    
        } catch(error){
    
            console.log("Error:", error);
    
        }
        
    }
    getDataLondon();

})

// TOKYO ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const buttonTk = document.getElementById("buttonTokyo");

buttonTk.addEventListener("click", async function(){

    async function getDataTokyo() {

        try{
    
            const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=9d5a94423b324bc0b2c60841250102&q=Tokyo&days=8&aqi=no&alerts=no');
            const data = await response.json();
    
            console.log(data);
            console.log(data.location.name);
    
            // CURRENT SECTION-----------------------------------------------------------------------------------------------------------------
            // location country
            const country = document.getElementById("country");
            country.innerHTML = data.location.country;
    
            // location city
            const location = document.getElementById("locationName");
            location.innerHTML = data.location.name;
    
            // temperature
            const temp = document.getElementById("temperature");
            temp.innerHTML = `${data.current.temp_f}°F`;
    
            // weather description
            const desc = document.getElementById("description");
            desc.innerHTML = data.current.condition.text;
    
            // weather icon
            const icon = document.getElementById("icon");
            icon.innerHTML = `<img src= "${data.current.condition.icon}" alt="${data.current.condition.text}" />`;
    
            // current day
            const day = document.getElementById("day");
            const localTime = new Date(data.location.localtime);
            const dayName = localTime.toLocaleDateString('en-US', { weekday: 'long' });
            const date = document.getElementById("date");
            const formattedDate = localTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
            day.innerHTML = `${formattedDate}, ${dayName}`;
    
            // current time
            const time = document.getElementById("time");
            const formattedTime = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
            time.innerHTML = formattedTime;
    
            // TODAY'S FORECAST SECTION----------------------------------------------------------------------------------------------------------
            // 6AM 
            const icon6 = document.getElementById("icon6");
            icon6.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[6].condition.icon}" alt="${data.forecast.forecastday[0].hour[6].condition.text}" />`;
    
            const temp6 = document.getElementById("temperature6");
            temp6.innerHTML = `${data.forecast.forecastday[0].hour[6].temp_f}°F`;
    
            // 9AM 
            const icon9 = document.getElementById("icon9");
            icon9.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[9].condition.icon}" alt="${data.forecast.forecastday[0].hour[9].condition.text}" />`;
    
            const temp9 = document.getElementById("temperature9");
            temp9.innerHTML = `${data.forecast.forecastday[0].hour[9].temp_f}°F`;

            // 12PM 
            const icon12 = document.getElementById("icon12");
            icon12.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[12].condition.icon}" alt="${data.forecast.forecastday[0].hour[12].condition.text}" />`;
    
            const temp12 = document.getElementById("temperature12");
            temp12.innerHTML = `${data.forecast.forecastday[0].hour[12].temp_f}°F`;
    
            // 3PM 
            const icon15 = document.getElementById("icon15");
            icon15.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[15].condition.icon}" alt="${data.forecast.forecastday[0].hour[15].condition.text}" />`;
    
            const temp15 = document.getElementById("temperature15");
            temp15.innerHTML = `${data.forecast.forecastday[0].hour[15].temp_f}°F`;
    
            // 6PM
            const icon18 = document.getElementById("icon18");
            icon18.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[18].condition.icon}" alt="${data.forecast.forecastday[0].hour[18].condition.text}" />`;
    
            const temp18 = document.getElementById("temperature18");
            temp18.innerHTML = `${data.forecast.forecastday[0].hour[18].temp_f}°F`;
    
            // 9PM
            const icon21 = document.getElementById("icon21");
            icon21.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[21].condition.icon}" alt="${data.forecast.forecastday[0].hour[21].condition.text}" />`;
    
            const temp21 = document.getElementById("temperature21");
            temp21.innerHTML = `${data.forecast.forecastday[0].hour[21].temp_f}°F`;
    
            // AIR CONDITIONS --------------------------------------------------------------------------------------------------------------------------------
            // real feel
            const realFeel = document.getElementById("RF");
            realFeel.innerHTML = `${data.current.feelslike_f}°`; 
    
            // wind
            const wind = document.getElementById("windSpeed");
            wind.innerHTML = `${data.current.wind_kph} km/h`;
    
            // chance of rain
            const rain = document.getElementById("CoR");
            rain.innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    
            // uv
            const uvIndex = document.getElementById("uvIndex");
            uvIndex.innerHTML = `${data.current.uv}`;
    
            // 7DAY FORECAST --------------------------------------------------------------------------------------------------------------------------------
            // day1
            const day1icon = document.getElementById("forecastIcon1");
            day1icon.innerHTML = `<img src= "${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[0].day.condition.text}" />`;
    
            const day1desc = document.getElementById("forecastDesc1");
            day1desc.innerHTML = data.forecast.forecastday[0].day.condition.text;
    
            const day1TempD = document.getElementById("forecastTempD1");
            day1TempD.innerHTML = `${data.forecast.forecastday[0].day.maxtemp_f}`;
    
            const day1TempN = document.getElementById("forecastTempN1");
            day1TempN.innerHTML = `/${data.forecast.forecastday[0].day.mintemp_f}`;
    
            // day2
            const day2Name = document.getElementById("forecastDay2");
            const forecastTime2 = new Date(data.forecast.forecastday[1].date);
            const forecastDayName2 = forecastTime2.toLocaleDateString('en-US', { weekday: 'short' });
            day2Name.innerHTML = forecastDayName2;
    
            const day2icon = document.getElementById("forecastIcon2");
            day2icon.innerHTML = `<img src= "${data.forecast.forecastday[1].day.condition.icon}" alt="${data.forecast.forecastday[1].day.condition.text}" />`;
    
            const day2desc = document.getElementById("forecastDesc2");
            day2desc.innerHTML = data.forecast.forecastday[1].day.condition.text;
    
            const day2TempD = document.getElementById("forecastTempD2");
            day2TempD.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_f}`;
    
            const day2TempN = document.getElementById("forecastTempN2");
            day2TempN.innerHTML = `/${data.forecast.forecastday[1].day.mintemp_f}`;    
            
            // day3
            const day3Name = document.getElementById("forecastDay3");
            const forecastTime3 = new Date(data.forecast.forecastday[2].date);
            const forecastDayName3 = forecastTime3.toLocaleDateString('en-US', { weekday: 'short' });
            day3Name.innerHTML = forecastDayName3;
    
            const day3icon = document.getElementById("forecastIcon3");
            day3icon.innerHTML = `<img src= "${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}" />`;
    
            const day3desc = document.getElementById("forecastDesc3");
            day3desc.innerHTML = data.forecast.forecastday[2].day.condition.text;
    
            const day3TempD = document.getElementById("forecastTempD3");
            day3TempD.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_f}`;
    
            const day3TempN = document.getElementById("forecastTempN3");
            day3TempN.innerHTML = `/${data.forecast.forecastday[2].day.mintemp_f}`;
    
            // day4
            const day4Name = document.getElementById("forecastDay4");
            const forecastTime4 = new Date(data.forecast.forecastday[3].date);
            const forecastDayName4 = forecastTime4.toLocaleDateString('en-US', { weekday: 'short' });
            day4Name.innerHTML = forecastDayName4;
    
            const day4icon = document.getElementById("forecastIcon4");
            day4icon.innerHTML = `<img src= "${data.forecast.forecastday[3].day.condition.icon}" alt="${data.forecast.forecastday[3].day.condition.text}" />`;
    
            const day4desc = document.getElementById("forecastDesc4");
            day4desc.innerHTML = data.forecast.forecastday[3].day.condition.text;
    
            const day4TempD = document.getElementById("forecastTempD4");
            day4TempD.innerHTML = `${data.forecast.forecastday[3].day.maxtemp_f}`;
    
            const day4TempN = document.getElementById("forecastTempN4");
            day4TempN.innerHTML = `/${data.forecast.forecastday[3].day.mintemp_f}`;
    
            // day5
            const day5Name = document.getElementById("forecastDay5");
            const forecastTime5 = new Date(data.forecast.forecastday[4].date);
            const forecastDayName5 = forecastTime5.toLocaleDateString('en-US', { weekday: 'short' });
            day5Name.innerHTML = forecastDayName5;
    
            const day5icon = document.getElementById("forecastIcon5");
            day5icon.innerHTML = `<img src= "${data.forecast.forecastday[4].day.condition.icon}" alt="${data.forecast.forecastday[4].day.condition.text}" />`;
    
            const day5desc = document.getElementById("forecastDesc5");
            day5desc.innerHTML = data.forecast.forecastday[4].day.condition.text;
    
            const day5TempD = document.getElementById("forecastTempD5");
            day5TempD.innerHTML = `${data.forecast.forecastday[4].day.maxtemp_f}`;
    
            const day5TempN = document.getElementById("forecastTempN5");
            day5TempN.innerHTML = `/${data.forecast.forecastday[4].day.mintemp_f}`;
    
            // day6
            const day6Name = document.getElementById("forecastDay6");
            const forecastTime6 = new Date(data.forecast.forecastday[5].date);
            const forecastDayName6 = forecastTime6.toLocaleDateString('en-US', { weekday: 'short' });
            day6Name.innerHTML = forecastDayName6;
    
            const day6icon = document.getElementById("forecastIcon6");
            day6icon.innerHTML = `<img src= "${data.forecast.forecastday[5].day.condition.icon}" alt="${data.forecast.forecastday[5].day.condition.text}" />`;
    
            const day6desc = document.getElementById("forecastDesc6");
            day6desc.innerHTML = data.forecast.forecastday[5].day.condition.text;
    
            const day6TempD = document.getElementById("forecastTempD6");
            day6TempD.innerHTML = `${data.forecast.forecastday[5].day.maxtemp_f}`;
    
            const day6TempN = document.getElementById("forecastTempN6");
            day6TempN.innerHTML = `/${data.forecast.forecastday[5].day.mintemp_f}`;
    
            // day7
            const day7Name = document.getElementById("forecastDay7");
            const forecastTime7 = new Date(data.forecast.forecastday[6].date);
            const forecastDayName7 = forecastTime7.toLocaleDateString('en-US', { weekday: 'short' });
            day7Name.innerHTML = forecastDayName7;
    
            const day7icon = document.getElementById("forecastIcon7");
            day7icon.innerHTML = `<img src= "${data.forecast.forecastday[6].day.condition.icon}" alt="${data.forecast.forecastday[6].day.condition.text}" />`;
    
            const day7desc = document.getElementById("forecastDesc7");
            day7desc.innerHTML = data.forecast.forecastday[6].day.condition.text;
    
            const day7TempD = document.getElementById("forecastTempD7");
            day7TempD.innerHTML = `${data.forecast.forecastday[6].day.maxtemp_f}`;
    
            const day7TempN = document.getElementById("forecastTempN7");
            day7TempN.innerHTML = `/${data.forecast.forecastday[6].day.mintemp_f}`;
    
        } catch(error){
    
            console.log("Error:", error);
    
        }
        
    }
    getDataTokyo();

})

// ANKARA ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const buttonA = document.getElementById("buttonAnkara");

buttonA.addEventListener("click", async function(){

    async function getDataAnkara() {

        try{
    
            const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=9d5a94423b324bc0b2c60841250102&q=Ankara&days=8&aqi=no&alerts=no');
            const data = await response.json();
    
            console.log(data);
            console.log(data.location.name);
    
            // CURRENT SECTION-----------------------------------------------------------------------------------------------------------------
            // location country
            const country = document.getElementById("country");
            country.innerHTML = data.location.country;
    
            // location city
            const location = document.getElementById("locationName");
            location.innerHTML = data.location.name;
    
            // temperature
            const temp = document.getElementById("temperature");
            temp.innerHTML = `${data.current.temp_f}°F`;
    
            // weather description
            const desc = document.getElementById("description");
            desc.innerHTML = data.current.condition.text;
    
            // weather icon
            const icon = document.getElementById("icon");
            icon.innerHTML = `<img src= "${data.current.condition.icon}" alt="${data.current.condition.text}" />`;
    
            // current day
            const day = document.getElementById("day");
            const localTime = new Date(data.location.localtime);
            const dayName = localTime.toLocaleDateString('en-US', { weekday: 'long' });
            const date = document.getElementById("date");
            const formattedDate = localTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
            day.innerHTML = `${formattedDate}, ${dayName}`;
    
            // current time
            const time = document.getElementById("time");
            const formattedTime = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
            time.innerHTML = formattedTime;
    
            // TODAY'S FORECAST SECTION----------------------------------------------------------------------------------------------------------
            // 6AM 
            const icon6 = document.getElementById("icon6");
            icon6.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[6].condition.icon}" alt="${data.forecast.forecastday[0].hour[6].condition.text}" />`;
    
            const temp6 = document.getElementById("temperature6");
            temp6.innerHTML = `${data.forecast.forecastday[0].hour[6].temp_f}°F`;
    
            // 9AM 
            const icon9 = document.getElementById("icon9");
            icon9.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[9].condition.icon}" alt="${data.forecast.forecastday[0].hour[9].condition.text}" />`;
    
            const temp9 = document.getElementById("temperature9");
            temp9.innerHTML = `${data.forecast.forecastday[0].hour[9].temp_f}°F`;
            
            // 12PM 
            const icon12 = document.getElementById("icon12");
            icon12.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[12].condition.icon}" alt="${data.forecast.forecastday[0].hour[12].condition.text}" />`;
    
            const temp12 = document.getElementById("temperature12");
            temp12.innerHTML = `${data.forecast.forecastday[0].hour[12].temp_f}°F`;
    
            // 3PM 
            const icon15 = document.getElementById("icon15");
            icon15.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[15].condition.icon}" alt="${data.forecast.forecastday[0].hour[15].condition.text}" />`;
    
            const temp15 = document.getElementById("temperature15");
            temp15.innerHTML = `${data.forecast.forecastday[0].hour[15].temp_f}°F`;
    
            // 6PM
            const icon18 = document.getElementById("icon18");
            icon18.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[18].condition.icon}" alt="${data.forecast.forecastday[0].hour[18].condition.text}" />`;
    
            const temp18 = document.getElementById("temperature18");
            temp18.innerHTML = `${data.forecast.forecastday[0].hour[18].temp_f}°F`;
    
            // 9PM
            const icon21 = document.getElementById("icon21");
            icon21.innerHTML = `<img src= "${data.forecast.forecastday[0].hour[21].condition.icon}" alt="${data.forecast.forecastday[0].hour[21].condition.text}" />`;
    
            const temp21 = document.getElementById("temperature21");
            temp21.innerHTML = `${data.forecast.forecastday[0].hour[21].temp_f}°F`;
    
            // AIR CONDITIONS --------------------------------------------------------------------------------------------------------------------------------
            // real feel
            const realFeel = document.getElementById("RF");
            realFeel.innerHTML = `${data.current.feelslike_f}°`; 
    
            // wind
            const wind = document.getElementById("windSpeed");
            wind.innerHTML = `${data.current.wind_kph} km/h`;
    
            // chance of rain
            const rain = document.getElementById("CoR");
            rain.innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    
            // uv
            const uvIndex = document.getElementById("uvIndex");
            uvIndex.innerHTML = `${data.current.uv}`;
    
            // 7DAY FORECAST --------------------------------------------------------------------------------------------------------------------------------
            // day1
            const day1icon = document.getElementById("forecastIcon1");
            day1icon.innerHTML = `<img src= "${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[0].day.condition.text}" />`;
    
            const day1desc = document.getElementById("forecastDesc1");
            day1desc.innerHTML = data.forecast.forecastday[0].day.condition.text;
    
            const day1TempD = document.getElementById("forecastTempD1");
            day1TempD.innerHTML = `${data.forecast.forecastday[0].day.maxtemp_f}`;
    
            const day1TempN = document.getElementById("forecastTempN1");
            day1TempN.innerHTML = `/${data.forecast.forecastday[0].day.mintemp_f}`;
    
            // day2
            const day2Name = document.getElementById("forecastDay2");
            const forecastTime2 = new Date(data.forecast.forecastday[1].date);
            const forecastDayName2 = forecastTime2.toLocaleDateString('en-US', { weekday: 'short' });
            day2Name.innerHTML = forecastDayName2;
    
            const day2icon = document.getElementById("forecastIcon2");
            day2icon.innerHTML = `<img src= "${data.forecast.forecastday[1].day.condition.icon}" alt="${data.forecast.forecastday[1].day.condition.text}" />`;
    
            const day2desc = document.getElementById("forecastDesc2");
            day2desc.innerHTML = data.forecast.forecastday[1].day.condition.text;
    
            const day2TempD = document.getElementById("forecastTempD2");
            day2TempD.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_f}`;
    
            const day2TempN = document.getElementById("forecastTempN2");
            day2TempN.innerHTML = `/${data.forecast.forecastday[1].day.mintemp_f}`;    
            
            // day3
            const day3Name = document.getElementById("forecastDay3");
            const forecastTime3 = new Date(data.forecast.forecastday[2].date);
            const forecastDayName3 = forecastTime3.toLocaleDateString('en-US', { weekday: 'short' });
            day3Name.innerHTML = forecastDayName3;
    
            const day3icon = document.getElementById("forecastIcon3");
            day3icon.innerHTML = `<img src= "${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}" />`;
    
            const day3desc = document.getElementById("forecastDesc3");
            day3desc.innerHTML = data.forecast.forecastday[2].day.condition.text;
    
            const day3TempD = document.getElementById("forecastTempD3");
            day3TempD.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_f}`;
    
            const day3TempN = document.getElementById("forecastTempN3");
            day3TempN.innerHTML = `/${data.forecast.forecastday[2].day.mintemp_f}`;
    
            // day4
            const day4Name = document.getElementById("forecastDay4");
            const forecastTime4 = new Date(data.forecast.forecastday[3].date);
            const forecastDayName4 = forecastTime4.toLocaleDateString('en-US', { weekday: 'short' });
            day4Name.innerHTML = forecastDayName4;
    
            const day4icon = document.getElementById("forecastIcon4");
            day4icon.innerHTML = `<img src= "${data.forecast.forecastday[3].day.condition.icon}" alt="${data.forecast.forecastday[3].day.condition.text}" />`;
    
            const day4desc = document.getElementById("forecastDesc4");
            day4desc.innerHTML = data.forecast.forecastday[3].day.condition.text;
    
            const day4TempD = document.getElementById("forecastTempD4");
            day4TempD.innerHTML = `${data.forecast.forecastday[3].day.maxtemp_f}`;
    
            const day4TempN = document.getElementById("forecastTempN4");
            day4TempN.innerHTML = `/${data.forecast.forecastday[3].day.mintemp_f}`;
    
            // day5
            const day5Name = document.getElementById("forecastDay5");
            const forecastTime5 = new Date(data.forecast.forecastday[4].date);
            const forecastDayName5 = forecastTime5.toLocaleDateString('en-US', { weekday: 'short' });
            day5Name.innerHTML = forecastDayName5;
    
            const day5icon = document.getElementById("forecastIcon5");
            day5icon.innerHTML = `<img src= "${data.forecast.forecastday[4].day.condition.icon}" alt="${data.forecast.forecastday[4].day.condition.text}" />`;
    
            const day5desc = document.getElementById("forecastDesc5");
            day5desc.innerHTML = data.forecast.forecastday[4].day.condition.text;
    
            const day5TempD = document.getElementById("forecastTempD5");
            day5TempD.innerHTML = `${data.forecast.forecastday[4].day.maxtemp_f}`;
    
            const day5TempN = document.getElementById("forecastTempN5");
            day5TempN.innerHTML = `/${data.forecast.forecastday[4].day.mintemp_f}`;
    
            // day6
            const day6Name = document.getElementById("forecastDay6");
            const forecastTime6 = new Date(data.forecast.forecastday[5].date);
            const forecastDayName6 = forecastTime6.toLocaleDateString('en-US', { weekday: 'short' });
            day6Name.innerHTML = forecastDayName6;
    
            const day6icon = document.getElementById("forecastIcon6");
            day6icon.innerHTML = `<img src= "${data.forecast.forecastday[5].day.condition.icon}" alt="${data.forecast.forecastday[5].day.condition.text}" />`;
    
            const day6desc = document.getElementById("forecastDesc6");
            day6desc.innerHTML = data.forecast.forecastday[5].day.condition.text;
    
            const day6TempD = document.getElementById("forecastTempD6");
            day6TempD.innerHTML = `${data.forecast.forecastday[5].day.maxtemp_f}`;
    
            const day6TempN = document.getElementById("forecastTempN6");
            day6TempN.innerHTML = `/${data.forecast.forecastday[5].day.mintemp_f}`;
    
            // day7
            const day7Name = document.getElementById("forecastDay7");
            const forecastTime7 = new Date(data.forecast.forecastday[6].date);
            const forecastDayName7 = forecastTime7.toLocaleDateString('en-US', { weekday: 'short' });
            day7Name.innerHTML = forecastDayName7;
    
            const day7icon = document.getElementById("forecastIcon7");
            day7icon.innerHTML = `<img src= "${data.forecast.forecastday[6].day.condition.icon}" alt="${data.forecast.forecastday[6].day.condition.text}" />`;
    
            const day7desc = document.getElementById("forecastDesc7");
            day7desc.innerHTML = data.forecast.forecastday[6].day.condition.text;
    
            const day7TempD = document.getElementById("forecastTempD7");
            day7TempD.innerHTML = `${data.forecast.forecastday[6].day.maxtemp_f}`;
    
            const day7TempN = document.getElementById("forecastTempN7");
            day7TempN.innerHTML = `/${data.forecast.forecastday[6].day.mintemp_f}`;
    
        } catch(error){
    
            console.log("Error:", error);
    
        }
        
    }
    getDataAnkara();

})