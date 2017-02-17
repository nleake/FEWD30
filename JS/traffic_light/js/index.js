//Implement the red light using jQuery. Don't forget to add the script tags.

function stop() {
    var stopLightColor = $('#stopLight').css("background-color")
    console.log(stopLightColor);
    if (stopLightColor == 'rgb(255, 0, 0)'){
        clearLights();
    } else {
        clearLights();
        $('#stopLight').css("background-color", "red")
    }
}

$('#stopButton').on('click', stop)


function slow() {
    clearLights();
    $('#slowLight').css("background-color", "yellow")
}

$('#slowButton').on('click', slow)


function go() {
    clearLights();
    $('#goLight').css("background-color", "green")
}

$('#goButton').on('click', go)

function clearLights(){
    $('.bulb').css("background-color", "#111")
}