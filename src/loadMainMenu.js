
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

    
    mainContent.appendChild(toDoList);
    mainContent.appendChild(addTaskButton);

    document.body.appendChild(mainContent);
}




