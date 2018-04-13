function gumbic1(){
    var p= document.getElementById("a")
    if (p.style.getPropertyValue("background-color")==="blue"){
        p.style.setProperty("background-color","black")
    }
    else{
        p.style.setProperty("background-color","blue")

    }
}
