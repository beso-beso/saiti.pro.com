var menu = document.querySelector("#menu");
var menubar = document.querySelector(".menubar");
var close = document.querySelector("#close");
var html = document.querySelector("html");
var shecvla = document.querySelector('#shecvla');
var shecvla2 = document.querySelector('#shecvla2');
var shecvla3 = document.querySelector('#shecvla3');
var shecvla4 = document.querySelector('#shecvla4');
var shecvla5 = document.querySelector('#shecvla5');
var shecvla6 = document.querySelector('#shecvla6');
var shecvla7 = document.querySelector('#shecvla7');
var satauri = document.querySelector("#satauri")
var foni = document.querySelector('.foni');


shecvla.addEventListener("click", function(){
    document.body.style.backgroundColor = 'blue'
    satauri.style.color = "black"
    
})
shecvla2.addEventListener("click", function(){
    document.body.style.backgroundColor = 'red'
    satauri.style.color = "black"
})
shecvla3.addEventListener("click", function(){
    document.body.style.backgroundColor = 'green'
    satauri.style.color = "black"
})
shecvla4.addEventListener("click", function(){
    document.body.style.backgroundColor = 'yellow'
    satauri.style.color = "black"
})
shecvla5.addEventListener("click", function(){
    document.body.style.backgroundColor = 'black'
    satauri.style.color = "white"
})
shecvla6.addEventListener("click", function(){
    document.body.style.backgroundColor = 'cyan'
    satauri.style.color = "black"
})
shecvla7.addEventListener("click", function(){
    document.body.style.backgroundColor = 'pink'
    satauri.style.color = "black"
})

menu.addEventListener("click", () => {

    menubar.style.display = "block"
    close.style.visibility = "visible"
    menu.style.cursor= "default"
    
});
foni.addEventListener("click", function(){
    shecvla.style.display = "block"
    shecvla2.style.display = "block"
    shecvla3.style.display = "block"
    shecvla4.style.display = "block"
    shecvla5.style.display = "block"
    shecvla6.style.display = "block"
    shecvla7.style.display = "block"
});

close.addEventListener("click", function(){

    menubar.style.display = "none"
    close.style.visibility = "hidden"
    menu.style.cursor= "pointer"
    

});


document.addEventListener("scroll", function(){
  menubar.style.display= "none"
  close.style.visibility = "hidden"
  menu.style.cursor = 'pointer'
    
})