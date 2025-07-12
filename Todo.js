let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input")

btn.addEventListener("click",function(){
    console.log("Added")
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "DONE";
    delbtn.classList.add("delete")

    item.appendChild(delbtn)
    ul.appendChild(item);
    inp.value = "";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
})

inp.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        console.log("Added")
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "DONE";
    delbtn.classList.add("delete")

    item.appendChild(delbtn)
    ul.appendChild(item);
    inp.value = "";
    }
})