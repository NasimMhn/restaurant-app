const apiKey = "0d2ae46a0d3314ac244b0da1e2d88315";

let searchBtn = document.getElementById("search-btn")
searchBtn.disabled = true

let selectCity = document.getElementById("select-city")

const getCuisines = () => {

    let cityId = selectCity.options[selectCity.selectedIndex].value

    let api = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${cityId}`

    // Fetching city restaurants
    fetch(api, {
            headers: {
                "user-key": apiKey
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            json.cuisines.forEach(object => {
                cuisine = object.cuisine
                //console.log(cuisine)
                document.getElementById("select-cuisine").innerHTML +=
                    `<option value="${cuisine.cuisine_id}">${cuisine.cuisine_name}</option>`
            })
        });
}


const getRestaurants = () => {
    let selectCuisine = document.getElementById("select-cuisine")

    let cuisineName = selectCuisine.options[selectCuisine.selectedIndex].innerHTML
    let cityName = selectCity.options[selectCity.selectedIndex].innerHTML
    document.getElementById("city-and-cuisine").innerHTML = `${cuisineName} food in ${cityName}`

    let cuisineId = selectCuisine.options[selectCuisine.selectedIndex].value

    let cityId = selectCity.options[selectCity.selectedIndex].value

    let apiURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`
    getData(apiURL, apiKey)

}

const activateBtn = () => {
    searchBtn.disabled = false
}