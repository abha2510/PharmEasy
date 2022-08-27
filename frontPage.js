

document.getElementById("button").addEventListener("click",function(){
    console.log(window.location.href);
    document.location.href="product.html";
})

  


document.getElementById("log").addEventListener("click",function(){
    console.log(window.location.href)
    document.location.href="Login.html"
})
localStorage.setItem("phoneNumber",JSON.stringify(LSData));



document.getElementById("cart").addEventListener("click",function(){
    console.log(window.location.href)
    document.location.href="cart.html"
})
localStorage.setItem("product-items",JSON.stringify(products));