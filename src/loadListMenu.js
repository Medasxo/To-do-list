export function loadListMenu() {
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
    defaultList.addEventListener('click', () => {
        uncheckActiveList();
        defaultList.className = "active-list";
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
    addLink.innerText = "Add";
    addLink.addEventListener('click', () =>{
        if(textInput.value !== ""){
            const newList = document.createElement("li");
            newList.innerText = textInput.value;
            newList.addEventListener('click', () => {
                uncheckActiveList();
                newList.className = "active-list";
            });
            projectsList.appendChild(newList);
        }
    });

    listMenu.appendChild(addLink);

    document.body.appendChild(listMenu);
}
function uncheckActiveList(){
    const projectsList = document.getElementById("projectsList");
    let children = projectsList.children;
    for(let i = 0; i < children.length; i++){
        children[i].removeAttribute("class");
    }
}