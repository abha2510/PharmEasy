let products=JSON.parse(localStorage.getItem("product-items"))||[];
//console.log(products)
document.querySelector("#total-items").innerText=products.length;
let total = products.reduce(function(acc,el,i){
 return acc + Number(el.price);
},0);
console.log(total);
document.querySelector("#total-cost").innerText=`₹ ${total} including taxes`;

   
    products.map(function (elem,index){

        let box = document.createElement("div");
       
       
        let prod_img=document.createElement("img");
        prod_img.setAttribute("src",elem.image_url);
        prod_img.setAttribute("id","p_image")
        console.log(prod_img)
       
        let title = document.createElement("p");
       title.innerText = elem.name;
       
       let price_tag = document.createElement("p");
       price_tag.innerText = `₹ ${elem. price}`;
       
       let btn=document.createElement("button");
       btn.innerText="Remove";
       btn.addEventListener("click",deleteItem);
       Delete(products,index)
       
       
        box.append(prod_img,title,price_tag,btn);
        document.querySelector("#contain").append(box);
       });
      

    function deleteItem(event){
     event.target.parentNode.remove();
     
     }
     
       
       function Delete(data,index){
       products=data.filter(function(el,i){
        return i!=index;
       })
       localStorage.setItem("product-items",JSON.stringify(products))
       let arr=JSON.parse(localStorage.getItem("product-items"))
       document.getElementById("total-items").innerText=arr.length
   }