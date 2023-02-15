const notes=["Note1","Note2","Note3","Note4"];

function printNotes(){
    const container=document.querySelector(".notesContainer");
    container.innerHTML = "";
    
    notes.forEach(function(note,index){
    
        const div=document.createElement("div");
        div.className="note";
        console.log(note);
      
        const p=document.createElement("p");
        p.textContent=note;
    
        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";

        deleteButton.addEventListener("click",function(event){
            notes.splice(index,1);
            printNotes();
        })

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener("click", function (event) {
        const newNoteText = prompt("Write the new note text:");
        if (newNoteText) {
          notes[index] = newNoteText;
            printNotes();
      }
    });
    
        div.append(p,deleteButton, editButton);
        container.append(div);
        
    });  
}

const form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    const newNote=event.target.elements["newNote"].value;
    notes.push(newNote);
    event.target.reset();
    printNotes();

    })

printNotes();
    









