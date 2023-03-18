let count=0; 
let temp =0;
const colors =['red','yellow','beige','pink','green','violet','orange','blue','grey'] 
 
function creatediv(){ 
    
    if(document.getElementById('createbtn').innerHTML == "Create new note")
    {
        temp++; 
        if(temp>colors.length) 
        { 
           temp = 1; 
        } 
        count++;
        //Creating a new div
        var newDiv = document.createElement("div"); 
        newDiv.className = "newDiv"; 
        newDiv.id="newDiv"+count; 
        var newdivID = newDiv.id; 
        console.log(newdivID); 
        newDiv.style.background = colors[count]; 

        //newDiv.textContent = document.getElementById("text-area").value; 
        document.getElementById("notes").appendChild(newDiv); 

        //Paragraph element 
        let newpara = document.createElement("p"); 
        //Attributes 
        newpara.id = "newpara"+count; 
        console.log(newpara.id) 
        newpara.className = "newpara"; 
        var newparaID = newpara.id; 
        newpara.textContent = document.getElementById("text-area").value; 
        let content = newpara.textContent;
        //Append to parent 
        newDiv.appendChild(newpara); 

        //Edit button 
        let newedit = document.createElement("button"); 
        //Attributes 
        newedit.id = "newedit"+count; 
        newedit.className = "newedit"; 
        newedit.innerText = "Edit"; 
        var neweditID = newedit.id; 
        //Click Event 
        newedit.addEventListener("click",()=>edit_click(content,newpara.id),false) 
        //Append to parent 
        newDiv.appendChild(newedit); 
        console.log(newedit.id) 


        //Delete button 
        let newdelete = document.createElement("button"); 
        //Attributes 
        newdelete.id = "newdelete"+count; 
        newdelete.className = "newdelete"; 
        newdelete.textContent = "Delete"; 
        var newdeleteID = newdelete.id; 
        //Click Event 
        newdelete.addEventListener("click",()=>del_click(newdivID),false) 
        //Append to parent 
        newDiv.appendChild(newdelete); 
        console.log(newdelete.id) 
    }
    else if(document.getElementById('createbtn').innerHTML == "Edit note"){

    }
 
}

function edit_click(content,newparaID) 
{ 
    //alert(newparaID);
 if(content)
 {
    document.getElementById('text-area').value = content;
    //document.getElementById('createbtn').innerHTML = "Edit note";

    //Replacing the create button with an edit button
    var child_div = document.getElementById('createbtn');
    document.getElementById("create").removeChild(child_div);

    var newbutton = document.createElement("button");
    newbutton.id= 'editnote';
    newbutton.innerHTML = "Edit note";
    document.getElementById("create").appendChild(newbutton); 
    newbutton.addEventListener("click",()=>newedit_click(newparaID),false);
 }
 

} 
function newedit_click(newparaID){
 
    var newtext = document.getElementById('text-area').value;
    //alert(newtext);
    document.getElementById(newparaID).innerHTML = '';
    document.getElementById(newparaID).innerHTML = newtext;

    //Replacing the edit button with the create button 
    //Replacing the create button with an edit button
    var child_div = document.getElementById('editnote');
    document.getElementById("create").removeChild(child_div);

    var newbutton = document.createElement("button");
    newbutton.id= 'createbtn';
    newbutton.innerHTML = "Create new note";
    document.getElementById("create").appendChild(newbutton); 
    newbutton.addEventListener("click",()=>creatediv(),false);
}

function del_click(newdivID) 
{ 
 var child_div = document.getElementById(newdivID);
 document.getElementById("notes").removeChild(child_div);
}










































// const txtarea = document.querySelector('#text-area');

// function creatediv()
// {
//    if(document.querySelector('#text-area').value == ""){
//     alert("Not sticky enough :)");
//    }else{
//     const maindiv = document.querySelector('.notes');
//     const newDiv =  document.createElement('div');
//     maindiv.appendChild(newDiv);
//     console.log(newDiv);

//     //Delete button
//     const remove = document.createElement('button');
//     remove.className = "newdelete";
//     divel.appendChild(remove);

//     //edit button
//     const edit = document.createElement('button');
//     edit.className = "newedit";
//     divel.appendChild(edit);

//     //paragraph
//     const para = document.createElement('p');
//     para.className = "newpara";
//     para.innerHTML=document.getElementById("text-area").value;
//     divel.appendChild(para);
//     document.getElementById('text-area').value = '';
//    }
// }
// const sect = document.querySelector('.notes')
// if(document.querySelector('.notes')?.value != null)
// {
//     const divel = sect.children;
// }



// function editdelbtn(divel)
// {
    

//     return sect;
// }

