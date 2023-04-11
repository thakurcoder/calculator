let input = document.querySelector("input");
let button = document.querySelectorAll("button");
let len = button.length;
let string = "";

for(var i = 0;i<len;i++){
    button[i].addEventListener("click",ans);
}

function ans(){
    if(this.innerHTML == "="){
        string = eval(string);
        input.value = string;
    }
    else if(this.innerHTML == "A/C"){
        input.value = "";
        string = "";
    }
    else if(this.innerHTML == "DEL"){
        string = string.substring(0,string.length-1);
        input.value = string;
    }
    else{
        string += this.innerHTML;
        input.value = string;
    }
}
