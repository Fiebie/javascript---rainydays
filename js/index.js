

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioner", () => {
        document.body.removeChild("loader");
    })
})


const jacketSection = document.getElementById('jacketSection');


async function fetchData() {
try {
const response = await fetch("https://api.noroff.dev/api/v1/rainy-days");
if (!response.ok) {
throw new Error("Failed to fetch data");
}
const data = await response.json();
console.log(data);
return data;
} catch (error) {
console.error("Error fetching data:", error);
        }
}

fetchData();

async function createJacketinHTML() {
const jackets = await fetchData();
for(var i = 1; i <=jackets.length; i++){
    console.log(jackets[i].price);
    

//product title
const jacketListItem = document.createElement("li");
jacketListItem.textContent = `${jackets[i].title}`;
jacketSection.appendChild(jacketListItem);
    
//product price
const jacketPrice = document.createElement("h3");
jacketPrice.textContent = `${jackets[i].price}`;
jacketSection.appendChild(jacketPrice);

//product descr.
const jacketDescription = document.createElement("h4");
jacketPrice.textContent = `${jackets[i].description}`;
jacketSection.appendChild(jacketDescription);


//product category
const jacketGender = document.createElement("h5");
jacketGender.textContent = `${jackets[i].gender}`;
jacketSection.appendChild(jacketGender);


}
}

createJacketinHTML();