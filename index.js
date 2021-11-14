// var tknen
// var tknn8
// var tknn7
// var tknn6
// var tknn5
// var tknn4
// var tknn3
// var tknn2
// var tknn1

// function movetoken() {
    
//     sendtoken = document.getElementById("sendtkn");
//     sendtoken.addEventListener("click", function() 
//     {
//     tknen = document.getElementById("newtkn");
//     tknn8 = document.getElementById("tkn8");
//     tknn7 = document.getElementById("tkn7");
//     tknn6 = document.getElementById("tkn6");
//     tknn5 = document.getElementById("tkn5");
//     tknn4 = document.getElementById("tkn4");
//     tknn3 = document.getElementById("tkn3");
//     tknn2 = document.getElementById("tkn2");
//     tknn1 = document.getElementById("tkn1");
//     tknn1.value = tknn2.value;
//     tknn2.value = tknn3.value;
//     tknn3.value = tknn4.value;
//     tknn4.value = tknn5.value;
//     tknn5.value = tknn6.value;
//     tknn6.value = tknn7.value;
//     tknn7.value = tknn8.value;
//     tknn8.value = tknen.value;
//     });
    
// }
function movetoken()
{
  document.getElementById("tkn1").value=document.getElementById("tkn2").value;
  document.getElementById("tkn2").value=document.getElementById("tkn3").value;
  document.getElementById("tkn3").value=document.getElementById("tkn4").value;
  document.getElementById("tkn4").value=document.getElementById("tkn5").value;
  document.getElementById("tkn5").value=document.getElementById("tkn6").value;
  document.getElementById("tkn6").value=document.getElementById("tkn7").value;
  document.getElementById("tkn7").value=document.getElementById("tkn8").value;
  
  document.getElementById("tkn8").value=document.getElementById("newtkn").value;
  
}

// function clearalltoken() {
//     clralltkn = document.getElementById("clralltkn");
//     clralltkn.addEventListener("click", function() {
//     tknn1.value = 0;
//     tknn2.value = 0;
//     tknn3.value = 0;
//     tknn4.value = 0;
//     tknn5.value = 0;
//     tknn6.value = 0;
//     tknn7.value = 0;
//     tknn8.value = 0;
//     tknen.value = 0;
//     });
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