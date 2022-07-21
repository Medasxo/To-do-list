import { displayTasks, getSelectedList, Task, projectArray } from "./loadMainMenu";
export function loadListMenu() {
    let idCount = 1;
    const listMenu = document.createElement("div");
    listMenu.className = "listMenu";

    const pageTitle = document.createElement("p");
    pageTitle.className = "title";
    pageTitle.innerText = "To Do List";

    listMenu.appendChild(pageTitle);

    const projectsList = document.createElement("ul");
    projectsList.id = "projectsList";
    const defaultList = document.createElement("li");
    defaultList.className = "active-list";
    defaultList.innerText = "Default";
    defaultList.id = "0";
    defaultList.addEventListener('click', () => {
        uncheckActiveList();
        defaultList.className = "active-list";
        const listTitle = document.querySelector(".listTitle");
        listTitle.textContent = defaultList.textContent;
        displayTasks();
    });
    projectsList.appendChild(defaultList);

    listMenu.appendChild(projectsList);

    const textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("placeholder", "New List Name");
    textInput.setAttribute("name", "newName");
    textInput.id = "newListName";
    textInput.className = "newListName";

    listMenu.appendChild(textInput);

    const addLink = document.createElement("button");
    addLink.className = "addButton";
    addLink.setAttribute("type", "button");
    addLink.innerText = "Add List";
    addLink.addEventListener('click', () =>{
        if(textInput.value !== ""){
            let matchCount = 0;
            let children = projectsList.children;
            
            for(let i = 0; i < children.length; i++){
                if(textInput.value === children[i].textContent){
                    matchCount++;
                }
            }
            if(matchCount === 0){
                const newList = document.createElement("li");
                newList.innerText = textInput.value;
                newList.id = idCount;
                idCount++;
                newList.addEventListener('click', () => {
                uncheckActiveList();
                newList.className = "active-list";
                const listTitle = document.querySelector(".listTitle");
                listTitle.textContent = newList.textContent;
                displayTasks();
            });
            projectsList.appendChild(newList);
        }
        }
    });

    listMenu.appendChild(addLink);

    const deleteListButton = document.createElement("button");
    deleteListButton.className = "deleteListButton";
    deleteListButton.textContent = "Delete List";
    deleteListButton.addEventListener('click', ()=>{
        let idSelected = getSelectedList();
        document.getElementById(idSelected).remove();
        defaultList.className = "active-list";
        displayTasks();
    });
    listMenu.appendChild(deleteListButton);

    document.body.appendChild(listMenu);
}
function uncheckActiveList(){
    const projectsList = document.getElementById("projectsList");
    let children = projectsList.children;
    for(let i = 0; i < children.length; i++){
        children[i].removeAttribute("class");
    }
}

