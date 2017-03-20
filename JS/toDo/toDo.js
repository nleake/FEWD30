var todos = [];

var input = prompt("What would you like to do?");



while (input !== "quit"){

  if(input === "list") {
   listToDos();
  } else if (input === "new") {
    addToDo();
  } else if (input === "delete") {
    deleteToDo();
  }

  input = prompt("What would you like to do?");

}
console.log("You quit the app");


function listToDos(){
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  })
  console.log("**********");
}

function addToDo(){
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //push newTodo to todos array
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteToDo(){
    //as for index of todo to be dleeted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    todos.splice(index, 1);
    console.log("Deleted todo")
}