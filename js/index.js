showNotes();
function saveNotes() {
    let inputNote = document.getElementById('myNote');
    let myNotesArr = JSON.parse(localStorage.getItem("notesArr"));
    if (myNotesArr == null) {
        myNotesArr = [];
    }
    myNotesArr.push(inputNote.value);
    inputNote.value = "";
    localStorage.setItem("notesArr", JSON.stringify(myNotesArr));

    showNotes();
}


function showNotes() {
    let myNotesArr = JSON.parse(localStorage.getItem("notesArr"));
    let notesView=document.getElementById("notesView");
    let myhtml="";
    if (myNotesArr.length>0) {
        myNotesArr.forEach(function(ele,index){
            myhtml += `<div class="card mx-2 my-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index+1}</h5>
                        <p class="card-text">${ele}</p>
                        <button onclick="deleteNote(${index})" class="btn btn-danger">Delete Note</button>
                    </div>
                 </div>`;
        });
    }
    else{
        myhtml="<p>Nothing to show !!</p>";
    }
    notesView.innerHTML=myhtml;

}

function deleteNote(index){
    let myNotesArr = JSON.parse(localStorage.getItem("notesArr"));
    myNotesArr.splice(index,1);
    localStorage.setItem("notesArr",JSON.stringify(myNotesArr));
    showNotes();
}


let mysearch=document.getElementById('searchBtn');
mysearch.addEventListener('input',function(){
    let childrenNodes = document.getElementById('notesView').children;
    Array.from(childrenNodes).forEach((e)=>{
        
        let ptext=e.getElementsByTagName('p')[0].innerText;
        if(ptext.toLowerCase().includes(mysearch.value.toLowerCase())){
            e.style.display="block";
        }
        else{
            e.style.display="none";
        }
    });
    
})
    


