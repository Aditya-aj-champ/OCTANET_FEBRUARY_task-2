const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list")
function AddTask(){
    if(inputbox.value ===''){
        alert("You must write something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML= '&#9249;'
        li.appendChild(span)

    }
    inputbox.value='';
    Savedata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        Savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        Savedata()
    }
}, false);

function Savedata(){
    localStorage.setItem('data',listcontainer.innerHTML);
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showdata();