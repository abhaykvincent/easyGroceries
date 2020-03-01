$(document).foundation()
//variables
let products=[
    {
        name : "Soap",
        price: 10,
        img: "product1"
    },
    {
        name : "Soap",
        price: 10,
        img: "product2"
    },
    {
        name : "Soap",
        price: 10,
        img: "product3"
    },
    {
        name : "Soap",
        price: 10,
        img: "product4"
    },

    
    
    {
        name : "Soap",
        price: 10,
        img: "product4"
    },
    {
        name : "Soap",
        price: 10,
        img: "product3"
    },
    {
        name : "Soap",
        price: 10,
        img: "product1"
    },
    {
        name : "Soap",
        price: 10,
        img: "product2"
    },{
        name : "Soap",
        price: 10,
        img: "product1"
    },
    {
        name : "Soap",
        price: 10,
        img: "product2"
    },
    {
        name : "Soap",
        price: 10,
        img: "product3"
    },
    {
        name : "Soap",
        price: 10,
        img: "product4"
    },

    
    
    {
        name : "Soap",
        price: 10,
        img: "product4"
    },
    {
        name : "Soap",
        price: 10,
        img: "product3"
    },
    {
        name : "Soap",
        price: 10,
        img: "product1"
    },
    {
        name : "Soap",
        price: 10,
        img: "product2"
    },{
        name : "Soap",
        price: 10,
        img: "product1"
    },
    {
        name : "Soap",
        price: 10,
        img: "product2"
    },
    {
        name : "Soap",
        price: 10,
        img: "product3"
    },
    {
        name : "Soap",
        price: 10,
        img: "product4"
    },

    
    
    {
        name : "Soap",
        price: 10,
        img: "product4"
    },
    {
        name : "Soap",
        price: 10,
        img: "product3"
    },
    {
        name : "Soap",
        price: 10,
        img: "product1"
    },
    {
        name : "Soap",
        price: 10,
        img: "product2"
    },
]
//function definitions
function displayProducts(){
    content="";
    products.forEach(product => {
        
        content+=`<div class="small-3 productContainer">
                    <div class="product">
                    <p class="productPrice">$ ${product.price}</p>
                        <div class="productImagenExtra" style="background-image: url('./img/${product.img}.jpg');">
                            <p class="productName">${product.name}</p>
                        </div>
                        <div class="addToCart_Panel">
                            <div class="counter">
                                <div class="minus"><i class="fas fa-minus-square"></i></div>
                                <p  class="count">1</p>
                                <div class="add"><i class="fas fa-plus-square"></i></div>
                            </div>
                            <div class="addToCart_button"><p>Add To Cart</p></div>
                        </div>
                    </div>
                </div>`;
    });
    $(".products").append(content);
    //Functionality
    $(".add").click(function (e) { 
        e.preventDefault();
        
    });
}
        
$(document).ready(function () {
displayProducts();
});