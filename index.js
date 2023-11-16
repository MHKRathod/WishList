let todoinput= document.querySelector('.input');
let addbutton = document.querySelector(".button");
let showtodos = document.querySelector(".todos-container")
let todo;
let localData = JSON.parse(localStorage.getItem("todos"));
let todolist = localData || [];

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

addbutton.addEventListener("click", (e)  => {
    e.preventDefault();
    todo = todoinput.value;
    if(todo.length > 0){
        todolist.push({id: uuid(), todo, isCompleted: false})//*here completed is default of todo which have not been done*//
    }
    rendertodolist(todolist);
    localStorage.setItem("todos", JSON.stringify(todoList));
    todoInput.value = "";
})

showtodos.addEventListener("click",(e) => {
      let key = e.target.dataset.key;
      let delkey=e.target.dataset.todokey;
      todolist = todolist.map(todo => todo.id === key ? {...todo, isCompleted: !todo.isCompleted} : todo);
      todolist = todolist.filter(todo => todo.id !== delkey)
      localStorage.setItem("todos", JSON.stringify(todoList));
     
      console.log(todolist);
      rendertodolist(todolist);
})


 function rendertodolist(todolist){
    console.log(todolist);
    showtodos.innerHTML=todolist.map(({id,todo,isCompleted}) => `<div class="todo relative"><input id="item-${id} class="t-checkbox t-pointer" type="checkbox" data-key=${id} ${isCompleted ? "checked" : ""} ><label for"item-${id}" class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}" data-key=${id}>${todo}</label><button class="absolute right-0 button cursor"><span  data-todokey=${id}  class="del-btn material-symbols-outlined">delete
    </span></button></div>`)
 }    

 rendertodolist(todolist);