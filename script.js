console.log("Hej")

let todoItems = [];
function newElement(){
    let x =  document.getElementById("myInput")
    console.log(x)
    //document.getElementById("myLi"). = x   
}

/* 
const addForm = document.forms["add-element"];
addForm.addEventListener("submit", function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  const li = document.createElement("li");
  const todoList = document.createElement("li");
  const deleteBtn = document.createElement("span");

  deleteBtn.textContent = "delete";
  bookName.textContent = value;

}
*/


/*
let x =  document.getElementById("myInput")
function addTodo(text) {
    const todo = {
        text, 
        checked: false, 
        id: Date.now(), 
    };

    todoItems.push(todo); 

const addButton = document.querySelector('addButton');
var inputValue = document.querySelector('input');
const container = document.querySelector('container');

class item{
    constructor(itemName) {
this.createDiv(itemName);


}

createDiv(itemName){
    let input = document.createElement('input);
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = "text";

    let itemBox = document.createElement('div');
    itemBox.classlist.add('item');


    let editButton = document.createElement('button');
    editButton.innerHTML = "EDIT"
    editButton.classlist.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.innerHTML = "REMOVE";
    removeButton.classlist.add('removeButton');
    
   
    
    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);
}
}

    





*/

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}