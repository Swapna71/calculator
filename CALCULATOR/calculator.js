let string ='';
let button = document.querySelectorAll(".button");
button.forEach((button)=>{
button.addEventListener("click", (e)=>{
if(e.target.innerHTML == '='){
    string = eval(string);
    document.querySelector("input").value=string;
}else if(e.target.innerHTML == 'ac'){
    string = '';
    document.querySelector("input").value=string;
}
else{
    string += e.target.innerHTML;
    document.querySelector("input").value=string;
}

})
})
