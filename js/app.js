$(document).foundation()
//variables
let products=[
    {
        name : "Soap",
        price: 10,

    }
]
//function definitions
function displayProducts(){
    content=`<div class="small-3 productContainer">
    <div class="product">
        <div class="productImagenExtra"></div>
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
for(i=0;i<30;i++){
    $(".products").append(content);
}
}
$(document).ready(function () {
displayProducts();
});