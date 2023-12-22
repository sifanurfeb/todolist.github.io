let addBtn = document.getElementById("todo-btn");
addBtn.addEventListener("click", addButton);
function addButton() {
    // Function yang di panggil harusnya addtoDo
    // newToDo() ini yang sebelumnya
    addtoDo()
    clearText();
}

let todoIsi = document.getElementById("todoIsi");
let todolist = document.getElementById("todoList");

function clearText(){
    todoIsi.value = "";
}
function newToDo (itemText, completed){
    let todoItem = document.createElement("li");
    // let todoText = document.createTextNode(todoIsi.value); yang ini harusnya diisi parameter pertama yaitu itemText
    let todoText = document.createTextNode(itemText); // seperti ini

    todoItem.appendChild(todoText);

    if(completed){
        todoItem.classList.add("completed");
    }
    todolist.appendChild(todoItem);
    todoItem.addEventListener("dblclick", toggleTodo)
}

function addtoDo(){
    let itemText = todoIsi.value;
    newToDo(itemText, false);
}

function toggleTodo(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed");
    }else{
        this.classList.add("completed");
    }
}

function clearBtn(){
    let completedItems = todolist.getElementsByClassName("completed");
    while(completedItems.length > 0){
        // masih ada bug bagian ini, bisa di cek ulang
        completedItems.item(0).remove();
    }
}

function emptyBtn(){
    let todoItems = todolist.children;
    while(todoItems.length >0){
        todoItems.item(0).remove();
    }

}

let myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);
//This will alert "something to store"

let toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};

function saveBtn(){
    let toDos = [];

    for(let i = 0; i < todolist.children.length; i++){
        let toDo = todolist.children.item(i);

        let todoInfo = {
            "task":toDo.innerHTML,
            "completed":toDo.classList.contains("completed")
        };
        toDos.push(todoInfo);
    }
    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log("masuk kesini ya ");
}
function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDo(toDo.task, toDo.completed);
        }
    }
}

loadList();