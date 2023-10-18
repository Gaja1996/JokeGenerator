
const btn=document.getElementById("button");
const jokeb= document.getElementById("joke");

const apikey="BtcjSnTT1qtOTX0B5PWDSQ==WvXpalj22WHQg4YP";

const option={
    method:"GET",
    headers:{
    "X-Api-Key":apikey,
},
};

const apiUrl="https://api.api-ninjas.com/v1/jokes?limit=1";

 async function myFunction(){
    try {
     
    jokeb.innerHTML="Updating...";
    btn.innerText="Loading...";
    const response = await fetch(apiUrl,option);
    var data= await (response.json());
    jokeb.innerText=(data[0].joke);
    btn.innerText="Joke";   
    } catch (error) {
        btn.innerText="Joke";   
        jokeb.innerText="Error:Try again Later"; 
    }


}




btn.addEventListener("click", myFunction);