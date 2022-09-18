// Setting of Count Down Time 
var countDownDate = new Date("Sept18, 2022 00:00:25").getTime();
// The Function is called every second
var x = setInterval(function() {
  // Setting the Present Time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Finding of difference in days,hour,minutes,seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Sending them to the HTML elements
  if(distance>0){
  document.getElementById("demo").innerHTML =  hours 
  document.getElementById("demo1").innerHTML =  minutes
  document.getElementById("demo2").innerHTML =  seconds
  }
  // if distance is crossed then expired
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo3").innerHTML = "EXPIRED";
  }
}, 1000);