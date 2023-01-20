/* Global Variables */

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
// Personal API Key for OpenWeatherMap API
const urlKey = ",&appid=3c2fb2477a8d9143760343df9acd42c7&units=metric";

// Create a new date instance dynamically with JS
const d = new Date();
const  fullDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const zZip = document.getElementById("zip");
const fFeelings = document.getElementById("feelings");
const generateBtn = document.getElementById("generate");


// Event listener to add function to existing HTML DOM element
generateBtn.addEventListener("click", function(){
  const url = `${baseUrl}${zZip.value}${urlKey}`;
  withTemp(url)
  .then((data) => {
    byTemp({
      temp: data.main.temp,
      date: fullDate,
      feelings: fFeelings.value,
    });
  })
  .then((data) => {
    console.log(data);
    updateUI();
  });
});
/* Function to GET Project Data */
async function withTemp(url){
  const request = await fetch(url);
  try{
    const result = await request.json()
    return result;
  }catch(error){
    console.log(error);
  }
} 


/* Function to POST data */
async function byTemp(data){
  const request = await fetch("/add", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  try {
    const result = await request.json(data)
    return result;
  }catch(err){
    console.log(err)
  }
}

/* Function to GET Web API Data*/
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const result = await request.json();
    console.log(result)
    document.getElementById("date").innerHTML = `dated in ${result.date}`
    document.getElementById("temp").innerHTML = `temrature is ${result.temp} + celesius`;
    document.getElementById("content").innerHTML = `I feel now ${result.feelings}`;
  } catch (error) {
    console.log("error", error);
  }
};



