QUnit.test( "Set the time to Session 1 session", function( assert ) {
  assert.ok(setPomodoroTime(2) == "25", "Passed!" );
});

QUnit.test( "Set the time to Session End of first session", function( assert ) {
  assert.ok(setPomodoroTime(4)  == "25", "Passed!" );
});

QUnit.test( "Set the time to a Session of second session", function( assert ) {
  assert.ok(setPomodoroTime(5)== "15", "Passed!" );
});

QUnit.test( "Set the time to a Session of second session", function( assert ) {
  assert.ok(setPomodoroTime(10)== "15", "Passed!" );
});

QUnit.test( "Set the break time to a Session when j is negative", function( assert ) {
  assert.ok(setBreakTime(-1)== "3", "Passed!" );
});

QUnit.test( "Set the break time to a Session when in first session", function( assert ) {
  assert.ok(setBreakTime(1)== "3", "Passed!" );
});

QUnit.test( "Set the break time to a Session when in first last phase", function( assert ) {
  assert.ok(setBreakTime(4)== "5", "Passed!" );
});

QUnit.test( "Set the break time to a Session when in second half initial", function( assert ) {
  assert.ok(setBreakTime(5)== "15", "Passed!" );
});

QUnit.test( "Set the break time to a Session when in second half mid", function( assert ) {
  assert.ok(setBreakTime(6)== "20", "Passed!" );
});

QUnit.test( "Set the break time to a Session when in second half last", function( assert ) {
  assert.ok(setBreakTime(7)== "25", "Passed!" );
});

function setBreakTime(j){
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
    else if(j == 8){
        breakTime = 30;
    } 

    return breakTime;
  }


  function setPomodoroTime(j){
    if(j < 5){
        pomodoro = 25;
    }
    else{
      pomodoro = 15;;
    } 
    return pomodoro;
  }

