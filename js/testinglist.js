let products = {
    data:[
        
    {
        productName: "Regular White T-shirt",
        title: "Thunderbolt Jacket",
        category: "Topwear",
        price: "303",
        image: "RainyDays_Jacket1.jpg",
    },
{
        productName: "Beige Short Skirt",
        title: "VitaForce Jacket",
        category: "Bottomwear",
        price: "49",
        image: "RainyDays_Jacket2.jpg",
},
{
    productName: "Sporty Smart Watch",
    title: "M83 Jacket",
    category: "Watch",
    price: "99",
    image: "RainyDays_Jacket3.jpg",
},
{
    productName: "Basic knitted Top",
    title: "VitaForce Jacket",
        category: "Topwear",
        price: "29",
        image: "RainyDays_Jacket4.jpg",
},
{
    productName: "Black Leather Jacket",
    title: "Habita Jacket",
        category: "Jacket",
        price: "129",
        image: "RainyDays_Jacket5.jpg",
},
{
    productName: "Stylish pink trousers",
    title: "Rock creek Jacket",
        category: "Bottomwear",
        price: "89",
        image: "RainyDays_Jacket6.jpg",
},
{
    productName: "Brown Men's Jacket",
    title: "Silverbreeze Jacket",
        category: "Jacket",
        price: "189",
        image: "RainyDays_Jacket7.jpg",
},
{
    productName: "Comfy gray pants",
    title: "Puddle Jumper Jacket",
        category: "Bottomwear",
        price: "49",
        image: "RainyDays_Jacket1.jpg",
},
{
    productName: "Brown Men's Jacket",
    title: "TrailBlaze Jacket",
        category: "Jacket",
        price: "189",
        image: "RainyDays_Jacket7.jpg",
},
{
    productName: "Comfy gray pants",
    title: "XX Jacket",
        category: "Bottomwear",
        price: "49",
        image: "RainyDays_Jacket1.jpg",
},
{
    productName: "Brown Men's Jacket",
    title: "Gelventure Jacket",
        category: "Jacket",
        price: "189",
        image: "RainyDays_Jacket7.jpg",
},
{
    productName: "Comfy gray pants",
    title: "Akra Jacket",
        category: "Bottomwear",
        price: "49",
        image: "RainyDays_Jacket1.jpg",
},

],
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
        } else {
        button.classList.remove("active");
        }
    });


//select all cards
let elements = document.querySelectorAll(".card");
//loop through all cards
elements.forEach((element) => {
    //display all cards on 'all' button click
if (value == "all") {
element.classList.remove("hide");
} else {
//check if element contains category class
if (element.classList.contains(value)) {
//display element based on category
element.classList.remove("hide");
} else {
//hide other elements
element.classList.add("hide");
        }
    }
});
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
//initializations
let searchInput = document.getElementById
("search-input").value;
let elements = document.querySelectorAll(".product-name");
let cards = document.querySelectorAll(".card");


//loop through all elements
elements.forEach((element, index) => {
//check if text includes the search value
if (element.innerText.includes(searchInput.toUpperCase())){
//display matching card
cards[index].classList.remove("hide");
}
else{
//hide others
cards[index].classList.add("hide");
 }
});
});



//Initially display all products 
window.onload = () => {
    filterProduct("all"); 
};