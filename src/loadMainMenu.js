
export function loadMainMenu(){
    const mainContent = document.createElement("div");
    mainContent.className = "mainMenu";

    const listTitle = document.createElement("h1");
    listTitle.className = "listTitle";
    listTitle.textContent = "Default";
    mainContent.appendChild(listTitle);

    const toDoList = document.createElement("ul");
    toDoList.className = "toDoList";

    mainContent.appendChild(toDoList);


    document.body.appendChild(mainContent);
}




function displayTasks(){
    const toDoList = document. querySelector(".toDoList");
    
}
