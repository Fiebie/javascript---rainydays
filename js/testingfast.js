const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', () => {
const confirmed = confirm('Would you like to add this item to cart?');
if (confirmed) {
}
});

let products = {
    data: [
        {
            productName: "m83 jacket",
            category: "mens",
            price: "30",
            image: "RainyDays_Jacket1.jpg",

        },
        {
            productName: "gelVenture jacket",
            category: "womens",
            price: "30",
            image: "RainyDays_Jacket2.jpg",

        },
        {
            productName: "Habita jacket",
            category: "mens",
            price: "30",
            image: "RainyDays_Jacket3.jpg",

        },
        {
            productName: "silverbreeze jacket",
            category: "mens",
            price: "30",
            image: "RainyDays_Jacket4.jpg",

        },
        {
            productName: "xx jacket",
            category: "womens",
            price: "30",
            image: "RainyDays_Jacket5.jpg",

        },
        {
            productName: "vitaforce jacket",
            category: "unisex",
            price: "30",
            image: "RainyDays_Jacket6.jpg",

        },
        {
            productName: "rock creek jacket",
            category: "unisex",
            price: "30",
            image: "RainyDays_Jacket7.jpg",

        },
        {
            productName: "trailblaze jacket",
            category: "unisex",
            price: "30",
            image: "RainyDays_Jacket4.jpg",

        },
        {
            productName: "akra jacket",
            category: "unisex",
            price: "30",
            image: "RainyDays_Jacket4.jpg",

        },
        {
            productName: "puddle jumper jacket",
            category: "mens",
            price: "30",
            image: "RainyDays_Jacket1.jpg",

        },
        {
            productName: "venture jacket",
            category: "mens",
            price: "30",
            image: "RainyDays_Jacket1.jpg",

        },

    ]
}

for (let i of products.data) {
    //creates product-card
    let card = document.createElement("div");
    //card should have category and should stay hidden
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img")
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

//paramter 
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
    //check if element contain category class
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



//initially display all products
window.onload = () => {
    filterProduct("all");
};