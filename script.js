var current="player1";
var db={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0};

function clickFun(){
    if(db[this.id]){
        return;
    }
    if(current=="player1"){
        this.innerHTML="<img src='asset/close.png'>";
        db[this.id]=1;
        this.removeEventListener("click",clickFun);
        check();
        document.querySelector("#player1").classList.remove("active");
        document.querySelector("#player2").classList.add("active");
        current="player2";
    }else{
        this.innerHTML="<img src='asset/o.png'>";
        db[this.id]=2;
        this.removeEventListener("click",clickFun);
        check();
        document.querySelector("#player2").classList.remove("active");
        document.querySelector("#player1").classList.add("active");
        current="player1";
    }
}
function reset(){
    db={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0};
    current="player1";
    document.querySelector("table").style.cursor="pointer";
    document.querySelector("#player1").innerHTML="<h3>Player1</h3>";
    document.querySelector("#player2").innerHTML="<h3>Player2</h3>";
    document.querySelector("#player1").classList.remove("bg-success");
    document.querySelector("#player2").classList.remove("bg-success");
    document.querySelector("#player1").classList.remove("bg-secondary");
    document.querySelector("#player2").classList.remove("bg-secondary");
    document.querySelector("#player1").classList.remove("text-white");
    document.querySelector("#player2").classList.remove("text-white");
    document.querySelector("#player1").classList.add("active");
    document.querySelector("#player2").classList.remove("active");
    document.querySelectorAll("td").forEach(element => {
        element.innerHTML="";
        element.addEventListener("click",clickFun);
    })
}
function winner(){
    document.querySelector("table").style.cursor="not-allowed";
    if(current=="player1"){
        document.querySelector("#player1").innerHTML="<h3>Winner!</h3>";
        document.querySelector("#player1").classList.add("bg-success");
        document.querySelector("#player1").classList.add("text-white");
        document.querySelector("#player2").innerHTML="<h3>Reset</h3>";
        document.querySelector("#player2").addEventListener("click",reset);
    }else{
        document.querySelector("#player2").innerHTML="<h3>Winner!</h3>";
        document.querySelector("#player2").classList.add("bg-success");
        document.querySelector("#player2").classList.add("text-white");
        document.querySelector("#player1").innerHTML="<h3>Reset</h3>";
        document.querySelector("#player1").addEventListener("click",reset);
    }
    document.querySelectorAll("td").forEach(element => {
        element.removeEventListener("click",clickFun);
    })  
}
function check(){
    if(current=="player1"){
        if(db['a']==1 && db['b']==1 && db['c']==1){winner()}
        else if(db['d']==1 && db['e']==1 && db['f']==1){winner()}
        else if(db['g']==1 && db['h']==1 && db['i']==1){winner()}
        else if(db['a']==1 && db['d']==1 && db['g']==1){winner()}
        else if(db['b']==1 && db['e']==1 && db['h']==1){winner()}
        else if(db['c']==1 && db['f']==1 && db['i']==1){winner()}
        else if(db['a']==1 && db['e']==1 && db['i']==1){winner()}
        else if(db['c']==1 && db['e']==1 && db['g']==1){winner()}
        else if(db['a'] && db['b'] && db['c'] && db['d'] && db['e'] && db['f'] && db['g'] && db['h'] && db['i']){draw();}
    }else{
        if(db['a']==2 && db['b']==2 && db['c']==2){winner()}
        else if(db['d']==2 && db['e']==2 && db['f']==2){winner()}
        else if(db['g']==2 && db['h']==2 && db['i']==2){winner()}
        else if(db['a']==2 && db['d']==2 && db['g']==2){winner()}
        else if(db['b']==2 && db['e']==2 && db['h']==2){winner()}
        else if(db['c']==2 && db['f']==2 && db['i']==2){winner()}
        else if(db['a']==2 && db['e']==2 && db['i']==2){winner()}
        else if(db['c']==2 && db['e']==2 && db['g']==2){winner()}
        else if(db['a'] && db['b'] && db['c'] && db['d'] && db['e'] && db['f'] && db['g'] && db['h'] && db['i']){draw();}
    }
}
function draw(){
    if(current=="player1"){
        document.querySelector("#player1").innerHTML="<h3>Draw!</h3>";
        document.querySelector("#player1").classList.add("bg-secondary");
        document.querySelector("#player1").classList.add("text-white");
        document.querySelector("#player2").innerHTML="<h3>Reset</h3>";
        document.querySelector("#player2").addEventListener("click",reset);
    }else{
        document.querySelector("#player2 h3").innerHTML="<h3>Draw!</h3>";
        document.querySelector("#player2").classList.add("bg-secondary");
        document.querySelector("#player2").classList.add("text-white");
        document.querySelector("#player1").innerHTML="<h3>Reset</h3>";
        document.querySelector("#player1").addEventListener("click",reset);
    }
}
reset();