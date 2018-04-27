$(document).ready(function () {

  //Set global variables

  var pomodoro = 25, currentTime = Date.parse(new Date()), deadline, timeInterval, breakTime = 5, i, j=0;

  //Display the clock

  var clock = document.getElementById("clock-timer");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");
  var audio = document.getElementById("notification");
  $(".pomodoro-minutes-count").html(pomodoro);
  $(".break-minutes-count").html(breakTime);
  minutesSpan.innerHTML = ("0" + pomodoro).slice(-2);
  secondsSpan.innerHTML = "00";
  
  //Calculate the time remaining
    
  function getTimeLeft (end) {
    var total = Date.parse(end) - Date.parse(new Date());
    var seconds = Math.floor((total/1000) % 60);
    var minutes = Math.floor((total/1000/60) % 60);

    return {
      "total": total,
      "minutes": minutes,
      "seconds": seconds
    };
  }

  //Initialize the timer

  function startClock () {
    timeInterval = setInterval(function () {
      var t = getTimeLeft(deadline);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
      $("title").html(("0" + t.minutes).slice(-2) + ":" + ("0" + t.seconds).slice(-2));

      if (t.total <= 0) { //If timer reaches zero, stop the timer and reset the clock
        audio.play();
        clearInterval(timeInterval);
        if(j <= 8)
          {
            if (i === 0) {
          startBreak();
        }

        else if (i === 1) {
          startPomodoro();
        }
       }
        else{
          clearInterval(timeInterval)
        }
      }
    }, 1000);
  }

  
  
  function setPomodoroTime(){
    if(j < 5){
        console.log(j)
        pomodoro = 25;
      console.log(pomodoro);
    }
    else{
      pomodoro = 15;
    } 
  }
  //Functions for pomodoro, break and reset

  function startPomodoro () {
     j+=1;
    setPomodoroTime();
    console.log(pomodoro);
    minutesSpan.innerHTML = ("0" + pomodoro).slice(-2);
    secondsSpan.innerHTML = "00";
    $(".start-pomodoro, .break, .session-length").addClass('hidden');
    $(".reset").removeClass('hidden');
    $(".btn-count").prop("disabled", true);
    $("body").css('background-color', '#2ECC71');
    deadline = new Date(Date.parse(new Date()) + (pomodoro * 60 * 1000));
    console.log(deadline)
    console.log("j "+j);
    startClock();
    i = 0;
  }

  function startBreak () {
    setBreakTime();
    minutesSpan.innerHTML = ("0" + breakTime).slice(-2);
    secondsSpan.innerHTML = "00";
    $(".start-pomodoro, .break, .session-length").addClass('hidden');
    $(".reset").removeClass('hidden');
    $("body").css('background-color', '#3498DB');
    $(".btn-count").prop("disabled", true);
    deadline = new Date(Date.parse(new Date()) + (breakTime * 60 * 1000)); //Set deadline
    startClock();
    i = 1;
  }

  function resetClock () {
    j = 0;
    $(".btn-count").prop("disabled", false);
    $("body").css('background-color', '#F1C40F');
    $(".start-pomodoro, .break, .session-length").removeClass('hidden');
    $(".reset").addClass('hidden');
    $(".minutes-count").html(pomodoro);
    $("title").html("Pomodoro")
    clearInterval(timeInterval);
    minutesSpan.innerHTML = ("0" + pomodoro).slice(-2);
    secondsSpan.innerHTML = "00";
    
  }
  
  function setBreakTime(){
    if(j <= 2){
      breakTime = 3;
    }
    else if(j == 3){
      breakTime = 4;
    }
    else if(j == 4){
      breakTime = 5;
    }
    else if(j == 5){
        breakTime = 15;
    }
    else if(j == 6){
        breakTime = 20;
    }
    else if(j == 7){
        breakTime = 25;
    }
    else if(j >= 8){
        breakTime = 30;
    } 
  }
  //Start Pomodoro

  $(".start-pomodoro").click(function() {
    startPomodoro();
  });

  //Take a break 

  $(".break").click(function () {
    startBreak();
  });

  //Reset the clock

  $(".reset").click(function () {
    resetClock();
  });
    
});