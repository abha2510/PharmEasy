
document.getElementById("cart").addEventListener("click",function(){
    console.log(window.location.href);
    document.location.href="cart.html";
});

let Items=JSON.parse(localStorage.getItem("product-items"))||[]

let data=[
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1654077366.jpg",
        name:"Calcimax 500 Health Supplement Tablets (500 Mg Of Calcium) Box Of 30",
        price: 304
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1654077406.jpg",
        name:"Becozym C Forte ( Vitamin B Complex + Biotin + Vitamin C )- Strip Of 15 Tablets",
        price:30.21
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/263100/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-300gm-2-1660816203.jpg",
        name:"Venusia Max Intensive Moisturizing Cream, For Dry To Very Dry Skin, Repairs & Smoothens Skin, 150g",
        price:372.91
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1654233851.jpg",
        name:"Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        price:329.45
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1654234192.jpg",
        name:"Everherb (By Pharmeasy) Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        price: 311.48
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg",
        name:"Dettol Antiseptic Liquid Bottle Of 550 Ml",
        price: 119.08
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O98495/upglam-onion-oil-shampoo-2-1659342340.jpg?dim=320x320&dpr=1&q=100",
        name:"Upglam Onion Oil Shampoo",
        price:299
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/P35255/mancode-shea-butter-body-wash-450ml-2-1655797699.jpg?dim=320x320&dpr=1&q=100",
        name:"Mancode Shea Butter Body Wash, 450ml",
        price: 296.42
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022610/benadon-vitamin-b6-40mg-tablet-10s-2-1658917336.jpg?dim=320x320&dpr=1&q=100",
        name:"Benadon Vitamin B6 40mg Tablet 10'S",
        price:24.13
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1654077366.jpg",
        name:"Calcimax 500 Health Supplement Tablets (500 Mg Of Calcium) Box Of 30",
        price:304
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1654077406.jpg",
        name:"Becozym C Forte ( Vitamin B Complex + Biotin + Vitamin C )- Strip Of 15 Tablets",
        price:30.21
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/263100/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-300gm-2-1660816203.jpg",
        name:"Venusia Max Intensive Moisturizing Cream, For Dry To Very Dry Skin, Repairs & Smoothens Skin, 150g",
        price:372.91
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1654233851.jpg",
        name:"Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        price: 329.45
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1654234192.jpg",
        name:"Everherb (By Pharmeasy) Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        price: 311.48
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg",
        name:"Dettol Antiseptic Liquid Bottle Of 550 Ml",
        price: 119.08
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O98495/upglam-onion-oil-shampoo-2-1659342340.jpg?dim=320x320&dpr=1&q=100",
        name:"Upglam Onion Oil Shampoo",
        price: 299
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/P35255/mancode-shea-butter-body-wash-450ml-2-1655797699.jpg?dim=320x320&dpr=1&q=100",
        name:"Mancode Shea Butter Body Wash, 450ml",
        price: 296.42
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022610/benadon-vitamin-b6-40mg-tablet-10s-2-1658917336.jpg?dim=320x320&dpr=1&q=100",
        name:"Benadon Vitamin B6 40mg Tablet 10'S",
        price: 24.13
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1654077366.jpg",
        name:"Calcimax 500 Health Supplement Tablets (500 Mg Of Calcium) Box Of 30",
        price: 304
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1654077406.jpg",
        name:"Becozym C Forte ( Vitamin B Complex + Biotin + Vitamin C )- Strip Of 15 Tablets",
        price:30.21
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/263100/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-300gm-2-1660816203.jpg",
        name:"Venusia Max Intensive Moisturizing Cream, For Dry To Very Dry Skin, Repairs & Smoothens Skin, 150g",
        price:372.91
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1654233851.jpg",
        name:"Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        price: 329.45
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1654234192.jpg",
        name:"Everherb (By Pharmeasy) Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        price: 311.48
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg",
        name:"Dettol Antiseptic Liquid Bottle Of 550 Ml",
        price:119.08
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O98495/upglam-onion-oil-shampoo-2-1659342340.jpg?dim=320x320&dpr=1&q=100",
        name:"Upglam Onion Oil Shampoo",
        price: 299
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/P35255/mancode-shea-butter-body-wash-450ml-2-1655797699.jpg?dim=320x320&dpr=1&q=100",
        name:"Mancode Shea Butter Body Wash, 450ml",
        price: 296.42
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022610/benadon-vitamin-b6-40mg-tablet-10s-2-1658917336.jpg?dim=320x320&dpr=1&q=100",
        name:"Benadon Vitamin B6 40mg Tablet 10'S",
        price: 24.13
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1654077366.jpg",
        name:"Calcimax 500 Health Supplement Tablets (500 Mg Of Calcium) Box Of 30",
        price:304
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1654077406.jpg",
        name:"Becozym C Forte ( Vitamin B Complex + Biotin + Vitamin C )- Strip Of 15 Tablets",
        price:30.21
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/263100/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-300gm-2-1660816203.jpg",
        name:"Venusia Max Intensive Moisturizing Cream, For Dry To Very Dry Skin, Repairs & Smoothens Skin, 150g",
        price:372.91
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1654233851.jpg",
        name:"Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        price:329.45
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1654234192.jpg",
        name:"Everherb (By Pharmeasy) Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        price: 311.48
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg",
        name:"Dettol Antiseptic Liquid Bottle Of 550 Ml",
        price: 119.08
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O98495/upglam-onion-oil-shampoo-2-1659342340.jpg?dim=320x320&dpr=1&q=100",
        name:"Upglam Onion Oil Shampoo",
        price:299
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/P35255/mancode-shea-butter-body-wash-450ml-2-1655797699.jpg?dim=320x320&dpr=1&q=100",
        name:"Mancode Shea Butter Body Wash, 450ml",
        price: 296.42
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022610/benadon-vitamin-b6-40mg-tablet-10s-2-1658917336.jpg?dim=320x320&dpr=1&q=100",
        name:"Benadon Vitamin B6 40mg Tablet 10'S",
        price:24.13
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1654077366.jpg",
        name:"Calcimax 500 Health Supplement Tablets (500 Mg Of Calcium) Box Of 30",
        price:304
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1654077406.jpg",
        name:"Becozym C Forte ( Vitamin B Complex + Biotin + Vitamin C )- Strip Of 15 Tablets",
        price:30.21
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/263100/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-300gm-2-1660816203.jpg",
        name:"Venusia Max Intensive Moisturizing Cream, For Dry To Very Dry Skin, Repairs & Smoothens Skin, 150g",
        price:372.91
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1654233851.jpg",
        name:"Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        price:329.45
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1654234192.jpg",
        name:"Everherb (By Pharmeasy) Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        price: 311.48
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg",
        name:"Dettol Antiseptic Liquid Bottle Of 550 Ml",
        price: 119.08
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O98495/upglam-onion-oil-shampoo-2-1659342340.jpg?dim=320x320&dpr=1&q=100",
        name:"Upglam Onion Oil Shampoo",
        price:299
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/P35255/mancode-shea-butter-body-wash-450ml-2-1655797699.jpg?dim=320x320&dpr=1&q=100",
        name:"Mancode Shea Butter Body Wash, 450ml",
        price: 296.42
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022610/benadon-vitamin-b6-40mg-tablet-10s-2-1658917336.jpg?dim=320x320&dpr=1&q=100",
        name:"Benadon Vitamin B6 40mg Tablet 10'S",
        price:24.13
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg",
        name:"Dettol Antiseptic Liquid Bottle Of 550 Ml",
        price: 119.08
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/O98495/upglam-onion-oil-shampoo-2-1659342340.jpg?dim=320x320&dpr=1&q=100",
        name:"Upglam Onion Oil Shampoo",
        price:299
    },
    {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/P35255/mancode-shea-butter-body-wash-450ml-2-1655797699.jpg?dim=320x320&dpr=1&q=100",
        name:"Mancode Shea Butter Body Wash, 450ml",
        price: 296.42
    },
];

data.map(function(elem){

let box=document.createElement("div");

let prod_img=document.createElement("img");
prod_img.setAttribute("src",elem.image_url);
prod_img.setAttribute("id","p_image")

let title=document.createElement("p");
title.innerText=elem.name;

let price_tag=document.createElement("p");
price_tag.innerText=`₹ ${elem. price}`;

let btn=document.createElement("button");
btn.innerText="Add to Cart";

btn.addEventListener("click",function(){
    Items.push(elem);
    localStorage.setItem("product-items",JSON.stringify(Items))
})
box.append(prod_img,title,price_tag,btn)
document.querySelector("#container").append(box);
});

