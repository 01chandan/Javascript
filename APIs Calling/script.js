// API Calling
const API_key = "6348e7651370319b6a8befbfc8d1b012";
async function showWheather(){

    try {
        let city = "London";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        const data = await response.json();
    
        console.log("Wheather is " , data);
    
        let newPara = document.createElement("p");
        newPara.textContent = `${data?.main?.temp.toFixed(2)} ℃`
    
        document.body.appendChild(newPara); 
    } catch (error) {
        console.log("Error");
    }

}

// Another API Call

async function customFunction(){
    let lati = 15.333;
    let long = 15.212;

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_key}`);
    let result = data.json();

    console.log("Weather is ", result);
}