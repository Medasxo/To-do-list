import './style.css';
import { loadListMenu, addList} from './loadListMenu';
import { loadMainMenu } from './loadMainMenu';

let projectArray = [];

function loadPage(){
    loadListMenu();
    loadMainMenu();
}
loadPage();
getSelectedList();

class Task{
    constructor(title, dueDate, notes){
        this.title = title;
        this.dueDate = dueDate;
        this.notes = notes;
    }
}

function getSelectedList(){
    const projectsList = document.getElementById("projectsList");
    let children = projectsList.children;
    for(let i = 0; i < children.length; i++){
        if(children[i].className === "active-list"){
            return children[i].id;
            
        } 
    }
    
    
}
function addTaskToList(title, dueDate, notes){
    let listNumber = getSelectedList();
    let tempArray = projectArray[listNumber];
    if(tempArray === undefined){
        let tempArray = [];
        tempArray[0] = new Task(title, dueDate, notes);
        projectArray[listNumber] = tempArray;
    }
    else{
        tempArray[tempArray.length] = new Task(title, dueDate, notes);
        projectArray[listNumber] = tempArray;
    }
    console.table(projectArray[listNumber]);
}


function displayTasks(){
    const toDoList = document. querySelector(".toDoList");
    let listNumber = getSelectedList();
    let tempArray = projectArray[listNumber];
    if(tempArray !== undefined){
        for(let i = 0; i < tempArray.length; i++){
            const taskContainer = document.createElement("div");
            taskContainer.className = "taskContainer";

            const taskTitle = document.createElement("p");
            taskTitle.className = "task";
            taskTitle.textContent = tempArray[i].title;

            const taskDate = document.createElement("p");
            taskDate.className = "task";
            taskDate.textContent = tempArray[i].dueDate;

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

                const notes = document.createElement("p");
                notes.className = "notes";
                notes.textContent = tempArray[i].notes;
                
                taskNotesContainer.appendChild(notesTitle);
                taskNotesContainer.appendChild(exitNotesButton);
                taskNotesContainer.appendChild(notes);

                toDoList.appendChild(taskNotesContainer);
            });

            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(taskDate);
            
            toDoList.appendChild(taskContainer);
        }
        
    }
    
}
addTaskToList("Create a page", "2021-10-10", "HEEEEEEEEEEEEEEEEEEEEEY");
addTaskToList("b", "c", "d");
displayTasks();



