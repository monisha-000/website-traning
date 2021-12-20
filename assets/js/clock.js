function displayTime(){

	var date = new Date();
	// get hour
	var hours = date.getHours();
	// get minutes
	var minutes = date.getMinutes();
	// get seconds
	var seconds = date.getSeconds();

	var session = "AM";

	// display indian time
	if(hours == 0){
		hours = 12;
	}
   if(hours > 12){
   	hours = hours -12;
   	session = "PM"; 
   }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("showTime").innerText = time;
    document.getElementById("showTime").textContent = time;
    
    setTimeout(displayTime, 1000);
    



}
displayTime();