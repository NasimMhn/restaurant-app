const apiKey = "0d2ae46a0d3314ac244b0da1e2d88315";

const cityId = 61;
const cuisieId = 156;
const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisieId}`;

fetch(url, {
        headers: {
            "user-key": apiKey
        }
    })
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        json.restaurants.forEach(resto => {
            restaurant = resto.restaurant
            console.log(restaurant)
            document.getElementById("restaurants").innerHTML +=
                `<div class="restaurant">
                    <img src=${restaurant.thumb}>
                    <h4> ${restaurant.name}</h4> 
                    <p> Address: ${restaurant.location.address}</p>
                    <p> Opening hours: ${restaurant.timings}</p>
                </div>`

        });
    });