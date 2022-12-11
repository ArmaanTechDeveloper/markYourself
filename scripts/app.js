const taskInput = document.querySelector('.input-task')
const submitButton = document.querySelector('.btn');



const generateTemplate = (todo) =>{

    const template = `
    
            <tr>
                <td>
                    <div class="form-check">
                        <input class="form-check-input cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                    </div>
                </td>
                <td>${todo}</td>
              </tr>
    
    `

    return template;
}
taskInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    const todo = taskInput.input.value.trim();
    taskInput.input.value = '';
    const template = generateTemplate(todo);
    const addtodo = document.querySelector('#task-asigned-table-body');
    let temp = addtodo.innerHTML;
    temp = template + temp;
    addtodo.innerHTML = temp;
})