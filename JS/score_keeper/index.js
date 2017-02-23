// Track the score of the program.
var score = 0;

// Make the score I'm tracking display on #result.

// Make each button add or subtract the relevant value from my score.

function zero() {
  score = 0;
  $('#result').html(score)
  console.log(score);
}

$('#zero').click(zero)

function add5() {
  score += 5;
  $('#result').html(score)
  console.log(score);
}

$('#add5').click(add5)



function add10() {
  score += 10;
  $('#result').html(score)
  console.log(score);
}

$('#add10').click(add10)


function sub1() {
  score -= 1;
  $('#result').html(score)
  console.log(score);
}

$('#sub1').click(sub1)