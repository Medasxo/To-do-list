
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
        formContainer.className = "formContainer";

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



        dateFormContainer.appendChild(dateLabel);
        dateFormContainer.appendChild(dateInput);

        titleFormContainer.appendChild(titleLabel);
        titleFormContainer.appendChild(titleInput);

        notesFormContainer.appendChild(notesLabel);
        notesFormContainer.appendChild(notesInput);

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




