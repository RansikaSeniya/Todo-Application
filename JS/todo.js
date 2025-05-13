// Todo Page --> todo.html

const todoForm = document.getElementById('todoForm');
const todoListUl = document.getElementById('todoListUl');

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const todoInput = document.getElementById('todoInput');
    const li = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="flex-grow-1 me-4">
                <input type="text" class="form-control" value="${todoInput.value}" disabled>
            </div>
            <div>
                <i class="fa-solid fa-pen-to-square me-2 edit"></i>
                <i class="fa-solid fa-trash delete"></i>
            </div>
        </li>
    `
    todoListUl.innerHTML += li;
    todoInput.value = '';
});