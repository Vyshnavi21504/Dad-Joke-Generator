
const butel = document.getElementById("btn");
const jokeel = document.getElementById("joke");
const apikey = "eVNjCkxalyReThFSXrdcIw==a7sBQu5GB01s8RCg"
const option = {
  method :"GET",
  headers: {"X-Api-Key": apikey},
};
const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function  getjoke(){
    try {
        jokeel.innerText = "Updating...";
        butel.disabled =true;
        butel.innerText = "Loading..";
        const response =await fetch(apiURL,option);
        const data = await response.json();

        butel.disabled =false;
        butel.innerText = "tell me a joke";

        jokeel.innerText=data[0].joke; 

    } catch (error) {
        jokeel.innerText = "an error has happened..try again later";
        butel.disabled =false;
        butel.innerText = "tell me a joke";

        console.log("error");


    }
}
butel.addEventListener("click",getjoke);