
var allproducts = document.querySelectorAll(".products .card")
var div = document.querySelector("#div1")
var btn = document.querySelector("#showPrice")
var value = document.querySelector("#total")
var totalPrice = 0


allproducts.forEach(function(item){
    item.onclick = function(){
        div.innerHTML += item.textContent + " / "
        totalPrice += +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            showPrice.style.display = "block";
            showPrice.style.width  = "150px";
            showPrice.style.height  = "50px";
            showPrice.style.margintop = "50px";
            showPrice.style.border = "none";
            showPrice.style.backgroundColor  = "#457624";
            showPrice.style.color  = "white";
        }
    }
})
showPrice.onclick = function (){
   total.innerHTML =(totalPrice + "$")
}