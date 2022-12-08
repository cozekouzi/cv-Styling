var validate = document.getElementById("validate").onclick = function(){
    var shoesize = document.getElementById("shoe_size").value;
    var birthyear = document.getElementById("year").value;
var result = (shoesize * 2 + 5)* 50 - birthyear + 1766;
alert("result= "+result);
}