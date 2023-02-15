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
    
        const button=document.createElement("button");
        button.textContent="Delete";

        button.addEventListener("click",function(event){
            notes.splice(index,1);
            printNotes();
        })
    
        div.append(p,button);
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
    









