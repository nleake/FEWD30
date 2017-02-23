// add an event handler to the light_switch button

// add a function to add and remove the class for turning off the lights

// track if the lights are on or off

var lights = "on";

$('#light_switch').click(lightSwitch)

function lightSwitch() {
  if (lights === "on") {
    $('body').addClass('dark');
    lights = "off";
  } else {
    $('body').removeClass('dark');
    lights = "on";
  }
}