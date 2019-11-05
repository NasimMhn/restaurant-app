const apiKey = "0d2ae46a0d3314ac244b0da1e2d88315";

const cityId = 61;
const cuisieId = 156;
const searchUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisieId}`;
const cityUrl = `https://developers.zomato.com/api/v2.1/cities?city_ids=${cityId}`

// Fetching city information
fetch(cityUrl, {
        headers: {
            "user-key": apiKey
        }
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let city = json.location_suggestions[0].name
        document.getElementById("city").innerText = city
    });

// Fetching results from search
fetch(searchUrl, {
        headers: {
            "user-key": apiKey
        }
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
        json.restaurants.forEach(resto => {
            restaurant = resto.restaurant
            console.log(restaurant)

            let name = restaurant.name
            let thumb = restaurant.thumb
            let address = restaurant.location.address
            let openhours = restaurant.timings

            let rating = restaurant.user_rating.aggregate_rating
            let ratingColor = restaurant.user_rating.rating_color
            let ratingText = restaurant.user_rating.rating_text

            document.getElementById("restaurants").innerHTML +=
                `<div class="restaurant">
                    <img src=${thumb}>
                    <h4>${name}</h4>
                    <span style="background-color:#${ratingColor}">${rating} ${ratingText}</span>
                    <p> Address: ${address}</p>
                    <p> Opening hours: ${openhours}</p>
                </div>`

        });
    });