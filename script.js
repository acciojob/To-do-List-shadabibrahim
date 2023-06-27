//your code here

let userInput = document.querySelector("#newTodoInput");

let submit = document.querySelector("#addTodoBtn");
let ol = document.querySelector("#todoList");

submit.addEventListener('click', function (e) {
    // e.preventDefault();
    let li = document.createElement('li');
    li.innerHTML = userInput.value;
    if (userInput.value === "") {
        alert("Please enter a todo item")
    } else {
        ol.appendChild(li);
    }

})
