function tempclicked(e)
{
    if(e>25)
    {
        !confirm('The temperature shud be in range 1-25.Are you sure you want to set this value?')
        
    }
    
}
function bandclicked(e)
{
    if(e>9)
    {
        !confirm('The band shud be in range 1-9.Are you sure you want to set this value?')
        
        
    }
    else{
        e=5
    }

}

function delayclicked(e)
{
    if(e>60)
    {
        !confirm('The delay shud be in range 1-60 seconds.Are you sure you want to set this value?')
        
    }
    
}

// function onclicked(e)
// {
//     console.log(e)
//     if(!confirm('Are you sure you want to set this value as ontime?')) 
// {
//     e.preventDefault();                          
// }
// }

// function offclicked(e)
// {
//     console.log(e)
//     if(!confirm('Are you sure you want to set this value as offtime?')) 
// {
//     e.preventDefault();                          
// }
// }

function sendstring()
{
  var t=document.getElementById("temp").value;
  var b=document.getElementById("band").value;
  var d=document.getElementById("delay").value;
  var c=document.getElementById("currentDateTime").value;
  var on=document.getElementById("ontime").value;
  var off=document.getElementById("offtime").value;
  var message= t+'-'+b+'-'+d+'-'+c+'-'+on+'-'+off;
  document.getElementById('sendstr').value=message;
  console.log(message);
  


}