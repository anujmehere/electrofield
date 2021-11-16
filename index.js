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

function myFunction() {
  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  if (isMobileDevice) {
    document.getElementById("dtype").value="Mobile";
  } 
  else {
    document.getElementById("dtype").value="Desktop";
    }
    
  }

  //Bluetooth
  const button = document.getElementById("getDetails");
const details = document.getElementById("details");

button.addEventListener("click", async () => {
  try {
    // Request the Bluetooth device through browser
    const device = await navigator.bluetooth.requestDevice({
      optionalServices: ["battery_service", "device_information"],
      acceptAllDevices: true,
    });

    // Connect to the GATT server
    // We also get the name of the Bluetooth device here
    let deviceName = device.gatt.device.name;
    const server = await device.gatt.connect();

    // Getting the services we mentioned before through GATT server
    const batteryService = await server.getPrimaryService("battery_service");
    const infoService = await server.getPrimaryService("device_information");

    // Getting the current battery level
    const batteryLevelCharacteristic = await batteryService.getCharacteristic(
      "battery_level"
    );
    // Convert recieved buffer to number
    const batteryLevel = await batteryLevelCharacteristic.readValue();
    const batteryPercent = await batteryLevel.getUint8(0);

    // Getting device information
    // We will get all characteristics from device_information
    const infoCharacteristics = await infoService.getCharacteristics();

    console.log(infoCharacteristics);

    let infoValues = [];

    const promise = new Promise((resolve, reject) => {
      infoCharacteristics.forEach(async (characteristic, index, array) => {
        // Returns a buffer
        const value = await characteristic.readValue();
        console.log(new TextDecoder().decode(value));
        // Convert the buffer to string
        infoValues.push(new TextDecoder().decode(value));
        if (index === array.length - 1) resolve();
      });
    });

    promise.then(() => {
      console.log(infoValues);
      // Display all the information on the screen
      // use innerHTML
      details.innerHTML = `
      Device Name - ${deviceName}<br />
      Battery Level - ${batteryPercent}%<br />
      Device Information:
      <ul>
        ${infoValues.map((value) => `<li>${value}</li>`).join("")}
      </ul> 
    `;
    });
  } catch (err) {
    console.log(err);
    alert("An error occured while fetching device details");
  }
});

 
  