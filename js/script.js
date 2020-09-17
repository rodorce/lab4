var textBox = document.querySelector('.newTodo');
var todoList = document.getElementsByClassName('panel-body')[1];
var btnPost = document.querySelector('.submitButton');
var btnMarkAll = document.querySelector('.btn-success');
var btnClearAll = document.querySelector('.btn-info')
var btnDeleteAll = document.querySelector('.btn-danger')

btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    todoList.innerHTML += `<input type="checkbox" class="todoItem"></input> ${textBox.value} <br>`;
    textBox.value = ''
})

btnMarkAll.addEventListener('click', () => {
    let checkbox = document.querySelectorAll('.todoItem');
    for (let i = 0; i < checkbox.length; i++){
        checkbox[i].checked = true;
    }
})

btnClearAll.addEventListener('click', () => {
    let checkbox = document.querySelectorAll('.todoItem');
    for (let i = 0; i < checkbox.length; i++){
        checkbox[i].checked = false;
    }
})

btnDeleteAll.addEventListener('click', () => {
    todoList.innerHTML = ""
})