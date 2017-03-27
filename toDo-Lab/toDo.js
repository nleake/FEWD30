// TODO wrap everything in a doc ready function
var addBtn = document.querySelector("#addBtn");
var newText = document.querySelector("#newText");
var toDoList = document.getElementById("toDoList");
var toDo = newText.value;

// addBtn.addEventListener("click", function(){
//   alert("YOU CLICKED ADD!");
//   //addBtn.classList.add("selected");
//   console.log(newText.value);
// });

//enter text into newText field
//grab newText.value
//on click append new div  to parent toDoList div with newText.value


$("#addBtn").click(function() {
    console.log(toDo);
    if (toDo != " ") {
    $("#toDoList").append(toDo);
    }
$("toDoList").val();
});

