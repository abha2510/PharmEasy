let products=JSON.parse(localStorage.getItem("product-items"))||[];
//console.log(products)

document.querySelector("#total-items").innerText=products.length;
let total = products.reduce(function(acc,el,i){
 return acc + Number(el.price);
},0);
console.log(total);
document.querySelector("#total-cost").innerText=`₹ ${total} including taxes`;

   
    products.forEach(function (elem,index){

        let box = document.createElement("div");
       
       
        let prod_img=document.createElement("img");
        prod_img.setAttribute("src",elem.image_url);
        prod_img.setAttribute("id","p_image")
        //  console.log(prod_img)
       
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
      


       let cartitem=JSON.parse(localStorage.getItem("cart-items"))||[]
       function deleteItem(event){
      products= event.target.parentNode.remove();
     }
     localStorage.setItem("cart-items",JSON.stringify(products))
  


    
       function Delete(data,index){
       products=data.filter(function(el,i){
        return i!=index;
       })
      
       localStorage.setItem("cart-items",JSON.stringify(products))
  
   }
  