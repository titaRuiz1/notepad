const notes=["Note1","Note2","Note3","Note4"];



function printNotes(){
    const container=document.querySelector(".notesContainer");
    container.innerHTML = "";

    notes.forEach(function (note, index) {
        const div = createNoteDiv(note, index);
        container.append(div);
      });
    }
    
function createNoteDiv(note, index){
    const div=document.createElement("div");
    div.className="note";
    
    const p=document.createElement("p");
    p.textContent=note.text;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function (event) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = note.text;
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", function (event) {
          note.text = input.value;
          printNotes();
        });

        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
          printNotes();
        });

        const editContainer = document.createElement("div");
        editContainer.append(input, saveButton, cancelButton);
        div.replaceChild(editContainer, p);
        });

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.addEventListener("click",function(event){
            notes.splice(index,1);
            printNotes();
        })

    div.append(p,deleteButton, editButton);
    return div;
        
    };  


    const form=document.querySelector("form");

    form.addEventListener("submit",function(event){
    event.preventDefault();
    const newNote={
        text: event.target.elements["newNote"].value,
    }
    notes.push(newNote);
    event.target.reset();
    printNotes();

    })

printNotes();
    









