export function loadListMenu() {
    const listMenu = document.createElement("div");
    listMenu.className = "listMenu";

    const pageTitle = document.createElement("p");
    pageTitle.className = "title";
    pageTitle.innerText = "To Do List";

    listMenu.appendChild(pageTitle);

    const projectsList = document.createElement("ul");
    const defaultList = document.createElement("li");
    defaultList.className = "active-list";
    defaultList.innerText = "Default";
    projectsList.appendChild(defaultList);

    listMenu.appendChild(projectsList);

    const textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("placeholder", "New List Name");
    textInput.className = "newListName";

    listMenu.appendChild(textInput);

    const addLink = document.createElement("button");
    addLink.className = "addButton";
    addLink.setAttribute("type", "button");
    addLink.innerText = "Add";

    listMenu.appendChild(addLink);

    document.body.appendChild(listMenu);
}