let input = document.querySelector("input");
let addBtn = document.querySelector(".add");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function(){

    if (input.value.trim() === ""){
        return;
    };

    let li = document.createElement("li");
    let p = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let i = document.createElement("i");

    p.innerText = input.value;

    li.classList.add("list");
    li.appendChild(p);
    deleteBtn.appendChild(i);
    i.setAttribute("class","fa-solid fa-x");
    li.appendChild(deleteBtn);
    document.querySelector("ul").appendChild(li);

    input.value="";
});

ul.addEventListener("click", function(e){
   if(e.target.nodeName == "I"){
    let listItem = e.target.parentElement;
    listItem.parentElement.remove();
   }
//    console.dir(e.target)
});