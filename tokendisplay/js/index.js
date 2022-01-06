// function movetoken()
// {
//   document.getElementById("tkn1").value=document.getElementById("tkn2").value;
//   document.getElementById("tkn2").value=document.getElementById("tkn3").value;
//   document.getElementById("tkn3").value=document.getElementById("tkn4").value;
//   document.getElementById("tkn4").value=document.getElementById("tkn5").value;
//   document.getElementById("tkn5").value=document.getElementById("tkn6").value;
//   document.getElementById("tkn6").value=document.getElementById("tkn7").value;
//   document.getElementById("tkn7").value=document.getElementById("tkn8").value;
  
//   document.getElementById("tkn8").value=document.getElementById("newtkn").value;
  
// }

function clearalltoken() {
    document.getElementById("tkn1").value=0;
    document.getElementById("tkn2").value=0;
    document.getElementById("tkn3").value=0;
    document.getElementById("tkn4").value=0;

    document.getElementById("tkn5").value=0;
    document.getElementById("tkn6").value=0;
    document.getElementById("tkn7").value=0;
    document.getElementById("tkn8").value=0;
}

window.addEventListener("load", ()=>{

const loader = document.querySelector(".loader")
  loader.classList.add("hidden")


  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => console.log("yoo, Service worker registered"))
      .catch((error) => console.log("Service worker not registered", error));


  }
  
})

function myFunction() {
  
    
  }

  //Bluetooth
  
 
  