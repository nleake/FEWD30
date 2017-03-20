function printReverse(array) {
  for (var i = array. - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

//*** isUniform() ****
function isUniform(array) {
  var firstInt = array[0];
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== first){
      return false
    }
  }
  return true;
}

//*** sumArray() ***

function sumArray(array) {
  var total = 0;
  array.forEach(function(element){
    total += element;
  });
  return total;
}

//*** max() ***

function max(array){
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}

//*** myForEach() **

function myForEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

Array.prototype.myForEach = function(func){
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}

//messing around with objects

var posts [
  {
    title: "Cats are mediocre",
    author: "Colt",
    comments: ["awesome post", "terrible post"]
  }
  {
    title: "Cats are actually awesome",
    author: "Cat Luvr",
    comments: ["<3", "Go to hell I hate you"]
  }
]

posts[0].title
posts[1].comments[1]


//DOM Manipulation

//Changing the h1 to pink
var h1 = document.querySelector("h1");
//select and then manipulate
h1.style.color="pink";

document.links //shows all links
document.body //shows the whole body
document.head //shows the head
document.URL //shows URL

//Methods for selecting different elements
document.getElementById("elementID")//elementID is the ID
document.getElementByClassName()
document.getElementByTagName()
document.querySelector()//returns the first element that matches a given CSS selector
document.querySelectorAll()//returns a list of all matching elements for a given CSS selector

//style property is a huge object, way to style elements
//SELECT
var tag = document.getElementById('highlight');
//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid black";
tag.style.fontSize = "70px";
//BETTER TO DEFINE STYLES IN CSS AND USE CLASSES
tag.classList.add("some-class");
tag.classList.remove("another-class");
tag.classList.toggle("class");

//textContent returns a string of all the text contained
//in a given element
tag.textContent //returns text content
tag.textContent = "blah blah blah blah";


//say you want to add event listers to mouse over lis and change their color
var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function(){
    this.classList.add("selected");//make color green maybe
  });
  lis[i].addEventListener("mouseout", function(){
    this.classList.remove("selected");
  });
  lis[i].addEventListener("mouseout", function(){
    this.classList.toggle("done");//text-decoration line through
  });

}