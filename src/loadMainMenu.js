export let projectArray = [];
export function loadMainMenu(){
    const mainContent = document.createElement("div");
    mainContent.className = "mainMenu";

    const listTitle = document.createElement("h1");
    listTitle.className = "listTitle";
    listTitle.textContent = "Default";
    mainContent.appendChild(listTitle);

    const toDoList = document.createElement("ul");
    toDoList.className = "toDoList";

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task";
    addTaskButton.className = "addTaskButton";
    addTaskButton.addEventListener('click', () => {
        const formContainer = document.createElement("form");
        formContainer.setAttribute("onsubmit", "return false");
        formContainer.className = "formContainer";

        const exitFormButton = document.createElement("button");
        exitFormButton.className= "exitFormButton";
        exitFormButton.textContent = "X";
        exitFormButton.setAttribute("type", "button");
        exitFormButton.addEventListener('click', () => {
            if (formContainer.style.display !== "none") {
                formContainer.style.display = "none";
              } else {
                formContainer.style.display = "block";
              }
        });

        //Title form
        const titleFormContainer = document.createElement("div");
        titleFormContainer.className = "titleFormContainer";

        const titleLabel = document.createElement("label");
        titleLabel.setAttribute("for", "title");
        titleLabel.textContent = "Title:";

        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "title");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("placeholder", "Create a todo list...");
        titleInput.className = "titleInput";
        titleInput.required = true;

        //Date form
        const dateFormContainer = document.createElement("div");
        dateFormContainer.className = "dateFormContainer";

        const dateLabel = document.createElement("label");
        dateLabel.setAttribute("for", "date");
        dateLabel.textContent = "Date:";

        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");
        dateInput.setAttribute("id", "date");
        dateInput.setAttribute("name", "date");
        dateInput.className = "dateInput";
        dateInput.required = true;

        //Notes form
        const notesFormContainer = document.createElement("div");
        notesFormContainer.className = "notesFormContainer";
        const notesLabel = document.createElement("label");
        notesLabel.setAttribute("for", "notes");
        notesLabel.textContent = "Notes: (Optional)";

        const notesInput = document.createElement("input");
        notesInput.setAttribute("type", "text");
        notesInput.setAttribute("id", "notes");
        notesInput.setAttribute("name", "notes");
        notesInput.setAttribute("placeholder", "I need to finish the project before...");
        notesInput.className = "notesInput";

        const submitButton = document.createElement("input");
        submitButton.setAttribute("type", "submit");
        submitButton.className = "submitButton";
        submitButton.addEventListener('click', () =>{
            if(titleInput.value !== "" && dateInput.value !== ""){
                addTaskToList(titleInput.value, dateInput.value, notesInput.value);
                displayTasks();
                formContainer.style.display = "none";
            }
            
        });



        dateFormContainer.appendChild(dateLabel);
        dateFormContainer.appendChild(dateInput);

        titleFormContainer.appendChild(titleLabel);
        titleFormContainer.appendChild(titleInput);

        notesFormContainer.appendChild(notesLabel);
        notesFormContainer.appendChild(notesInput);

        formContainer.appendChild(exitFormButton);
        formContainer.appendChild(titleFormContainer);
        formContainer.appendChild(dateFormContainer);
        formContainer.appendChild(notesFormContainer);
        formContainer.appendChild(submitButton);
        mainContent.appendChild(formContainer);
    });

    
    mainContent.appendChild(toDoList);
    mainContent.appendChild(addTaskButton);

    document.body.appendChild(mainContent);
}

export function displayTasks(){

    //Deleting previously displayed list
    const tasksDelete = document.querySelectorAll(".task");
    tasksDelete.forEach(task => {
        task.remove();
    });
    const taskContainerDelete = document.querySelectorAll(".taskContainer");
    taskContainerDelete.forEach(taskContainer => {
        taskContainer.remove();
    })


    const toDoList = document.querySelector(".toDoList");
    let listNumber = getSelectedList();
    let tempArray = projectArray[listNumber];
    if(tempArray !== undefined){
        for(let i = 0; i < tempArray.length; i++){
            //Creating a  single TODO Task  
            const taskContainer = document.createElement("div");
            taskContainer.className = "taskContainer";

            const taskTitle = document.createElement("p");
            taskTitle.className = "task";
            taskTitle.textContent = tempArray[i].title;

            const dateAndDoneContainer = document.createElement("div");
            dateAndDoneContainer.className = "dateAndDoneContainer";

            const taskDate = document.createElement("p");
            taskDate.className = "task";
            taskDate.textContent = tempArray[i].dueDate;

            const taskDone = document.createElement("button");
            taskDone.setAttribute("type", "button");
            taskDone.className = "taskDone";
            taskDone.textContent = "Done";
            taskDone.setAttribute("onclick", "event.stopPropagation()");
            taskDone.addEventListener('click', () => {
                let listNumber = getSelectedList();
                taskContainer.remove();
                let arrayOfTasks = projectArray[listNumber];
                for(let j = 0;j < arrayOfTasks.length; j++){
                    if(arrayOfTasks[j] === tempArray[i]){
                        arrayOfTasks.splice(j, 1);
                        projectArray[listNumber] = arrayOfTasks;
                    }
                }

            });

            taskContainer.addEventListener('click', () => {
                

                //Remove previous notes containers if there was any.
                const noteContainers = document.querySelectorAll(".taskNotesContainer");
                noteContainers.forEach(noteContainer => {
                    
                    noteContainer.remove();
                });

                //Create a whole container (Big light blue box for elements)
                const taskNotesContainer = document.createElement("div");
                taskNotesContainer.className = "taskNotesContainer";

                //Create a container title, that just says Notes always
                const notesTitle = document.createElement("p");
                notesTitle.className = "notesTitle";
                notesTitle.textContent = "Notes";

                //Create a button, that let's us exit the notes div
                const exitNotesButton = document.createElement("button");
                exitNotesButton.className = "exitNotes";
                exitNotesButton.textContent = "X";
                exitNotesButton.addEventListener('click', () => {
                    if (taskNotesContainer.style.display !== "none") {
                        taskNotesContainer.style.display = "none";
                      } else {
                        taskNotesContainer.style.display = "block";
                      }
                });

                //Appending notes at the container from an object
                const notes = document.createElement("p");
                notes.className = "notes";
                notes.textContent = tempArray[i].notes;

                taskNotesContainer.appendChild(notesTitle);
                taskNotesContainer.appendChild(exitNotesButton);
                taskNotesContainer.appendChild(notes);

                toDoList.appendChild(taskNotesContainer);
            });
            dateAndDoneContainer.appendChild(taskDate);
            dateAndDoneContainer.appendChild(taskDone);

            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(dateAndDoneContainer);
            
            toDoList.appendChild(taskContainer);
        }
        
    }
}
//Function that gets selected list's(toggled blue) ID
export function getSelectedList(){
    const projectsList = document.getElementById("projectsList");
    let children = projectsList.children;
    for(let i = 0; i < children.length; i++){
        if(children[i].className === "active-list"){
            return children[i].id;
        } 
    }
}


export function addTaskToList(title, dueDate, notes){
    let listNumber = getSelectedList();
    let tempArray = projectArray[listNumber];
    //Checking if tempArray is defined, if not, we define 0 element with the object, so that later tempArray will be defined.
    if(tempArray === undefined){
        let tempArray = [];
        tempArray[0] = new Task(title, dueDate, notes);
        projectArray[listNumber] = tempArray;
    }
    //If defined, we just add a new object
    else{
        tempArray[tempArray.length] = new Task(title, dueDate, notes);
        projectArray[listNumber] = tempArray;
    }
}

export class Task{
    constructor(title, dueDate, notes){
        this.title = title;
        this.dueDate = dueDate;
        this.notes = notes;
    }
}




