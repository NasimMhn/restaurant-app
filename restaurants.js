const getData = (apiURL, apiKey) => {
    document.getElementById("restaurants").innerHTML = ""
    // Fetching results from search
    fetch(apiURL, {
            headers: {
                "user-key": apiKey
            }
        })
        .then(res => res.json())
        .then(json => {
            //console.log(json)
            json.restaurants.forEach(resto => {
                restaurant = resto.restaurant
                console.log(restaurant)

                let name = restaurant.name
                let thumb = restaurant.thumb
                if (thumb == "") {
                    thumb = "assets/no-image.png"
                }
                let location = restaurant.location.locality
                let cuisine = restaurant.cuisines

                let openhours = restaurant.timings

                let rating = restaurant.user_rating.aggregate_rating
                let ratingColor = restaurant.user_rating.rating_color
                // let ratingText = restaurant.user_rating.rating_text
                let votingText = restaurant.user_rating.votes

                let priceRange = restaurant.price_range
                let priceClass = ""

                if (priceRange == 1) {
                    priceClass = "$"
                } else if (priceRange == 2) {
                    priceClass = "$$"
                } else if (priceRange == 3) {
                    priceClass = "$$$"
                } else if (priceRange == 4) {
                    priceClass = "$$$$"
                }

                document.getElementById("restaurants").innerHTML +=
                    `<div class="restaurant">

                        <div class="thumb">
                            <img src=${thumb}>
                        </div>

                        <div class="info">
                            <h3>${name}</h3> <span class="price-class"> ${priceClass}<span> <br>
                            <span class="location"><img src="assets/location.png" height="20px"> ${location} </span><br>
                            <span class="cuisine"><img src="assets/cuisine.png" height="18px"> ${cuisine} </span><br>
                            

                        </div>

                        <div class="rating">
                            <span class="review" style="background-color:#${ratingColor}">${rating}/5</span><br>
                            <div>
                                <img class="review-icon" src="assets/review.png"><br>
                                <span>${votingText}</span>
                            </div>
                        </div>
                

                    </div>`
            });
        });

}

// For development
getData("https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&cuisines=1", "0d2ae46a0d3314ac244b0da1e2d88315")