let theInput = document.querySelector('.add-task input')
let theAddButton = document.querySelector('.add-task .plus')
let taskContainer = document.querySelector('.tasks-content')
let taskCount = document.querySelector('.tasks-count span')
let taskCompleted = document.querySelector('.tasks-completed span')
let testMessage = document.querySelector('.no-tasks-message')

theAddButton.addEventListener('click', function (event){
    // отмена отправки формы
    event.preventDefault()
    // достать текст из поля инпут
    const text = theInput.value
    // Добавление задачи на страницу

    const TasksMsg =
        `<span class="message2">${text}
<button class="minus" data-action="delete"><img src="./img/cross.svg" alt="Done" width="18" height="18"></button>
<button class="plus" data-action="done"><img src="./img/tick.svg" alt="Done" width="18" height="18"></button>
</span>`
    taskContainer.insertAdjacentHTML('beforeend', TasksMsg)
    // очищаем поле ввода и добавляем на него фокус
    theInput.value = ''
    theInput.focus()
    if(taskContainer.children.length > 1) {
       testMessage.remove()
    }
    let qwerty1 = document.querySelector('.message2 .plus')
    qwerty1.addEventListener('click', plus)
    let qwerty2 = document.querySelector('.message2 .minus')
    qwerty2.addEventListener('click', minus)
    function plus (){
        console.log('Тест кнопки плюс')
    }
    function minus (){
        console.log('Тест кнопки минус')
    }
    let qwerty3 = document.querySelector('.message2')
    qwerty3.addEventListener('click', delete2)
    function delete2 (event){
        if (event.target.dataset.action === 'delete'){
            const testDelete = event.target.closest('.message2')
            testDelete.remove()
            console.log('почему не работает то ???')
        }
    }
})

