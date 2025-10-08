const addBtn = document.getElementsByTagName("button")[0];
const clearBtn = document.getElementsByTagName("button")[1];
const ul = document.getElementsByTagName("ul")[0];
const input = document.getElementsByTagName("input")[0]
const p = document.createElement("p");
const div = document.getElementsByTagName("div")[1]
function addList() {
    if (input.value === "") {
        div.appendChild(p);
        p.textContent = "Error: Submission failed because the required task list is blank."
    } else {
        const li = document.createElement("li");
        const dltBtn = document.createElement("button");
        dltBtn.textContent = "❌"
        ul.appendChild(li);
        li.textContent = input.value;
        input.value = "";
        p.textContent = "";
        li.appendChild(dltBtn);
        function rmvlist() {
            li.remove();
        }
        dltBtn.addEventListener("click", rmvlist);
        li.addEventListener("dblclick" , rmvlist );
        li.addEventListener("mouseover" , function(){
            li.style.textDecoration="line-through";
        })
    }
}

addBtn.addEventListener("click", addList)
input.addEventListener("keydown" , e=>{
    if(e.key==="Enter"){
        addList()
    }
})
clearBtn.addEventListener("click" , function() {
    ul.innerHTML="";
})