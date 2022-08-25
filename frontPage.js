
document.getElementById("button").addEventListener("click",function(){
    console.log(window.location.href);
    document.location.href="product.html";
})
localStorage.setItem("product-items",JSON.stringify(Items));
  

let phoneno=JSON.pharse(localStorage.getItem("phone"))||[];
document.getElementById("log").addEventListener("click",function(){
    logpage.style.transform="translateX(-400px)"
})
