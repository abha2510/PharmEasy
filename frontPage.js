
document.getElementById("button").addEventListener("click",function(){
    console.log(window.location.href);
    document.location.href="product.html";
})
localStorage.setItem("product-items",JSON.stringify(Items));
  

