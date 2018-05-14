import DBHelper from './dbhelper';
import LazyLoad from './lazyload.min';

let restaurant;
var map;

/**
 * Initialize Google map, called from HTML.
 */
window.initMap = () => {
    fetchRestaurantFromURL((error, restaurant) => {
        if (error) { // Got an error!
            console.error(error);
        } else {
            self.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: restaurant.latlng,
                scrollwheel: false
            })

            fillBreadcrumb();
            DBHelper.mapMarkerForRestaurant(self.restaurant, self.map);
        }
    });
    fetchReviewsFromURL((error, reviews) => {
        if(error){
            console.error(error);
        }
    });
};

/**
 * Get current restaurant from page URL.
 */
const fetchRestaurantFromURL = (callback) => {
    if (self.restaurant) { // restaurant already fetched!
        callback(null, self.restaurant);
        return;
    }
    const id = getParameterByName('id');
    if (!id) { // no id found in URL
        error = 'No restaurant id in URL';
        callback(error, null);
    } else {
        DBHelper.fetchRestaurantById(id, (error, restaurant) => {
            self.restaurant = restaurant;
            if (!restaurant) {
                console.error(error);
                return;
            }
            fillRestaurantHTML();
            callback(null, restaurant)
        });
    }
};



/**
 * Create restaurant HTML and add it to the webpage
 */
const fillRestaurantHTML = (restaurant = self.restaurant) => {
    const name = document.getElementById('restaurant-name');
    name.innerHTML = restaurant.name;

    const address = document.getElementById('restaurant-address');
    address.innerHTML = restaurant.address;

    const picture = document.getElementById('restaurant-img');

    const sourceSmall = document.createElement('source');
    sourceSmall.className = 'restaurant-img';
    sourceSmall.setAttribute("data-srcset",DBHelper.imageUrlForRestaurant(restaurant) + "_small.webp");
    sourceSmall.setAttribute("media", "(min-width: 400px)")
    picture.append(sourceSmall);

    const sourceLarge = document.createElement('source');
    sourceLarge.className = 'restaurant-img';
    sourceLarge.setAttribute("data-srcset",DBHelper.imageUrlForRestaurant(restaurant) + "_large.webp");
    sourceLarge.setAttribute("media", "(min-width: 900px)")
    picture.append(sourceLarge);

    const image = document.createElement('img');
    image.className = 'restaurant-img lazy';
    image.setAttribute("data-src", DBHelper.imageUrlForRestaurant(restaurant) + "_small.jpg");
    image.alt = "An image of restaurant " + restaurant.name + " in " + restaurant.neighborhood;
    picture.append(image);

    picture.onload = new LazyLoad();

    const cuisine = document.getElementById('restaurant-cuisine');
    cuisine.innerHTML = restaurant.cuisine_type;

    const addReview = document.getElementById('restaurant-review');
    addReview.innerHTML = `
        Name: <input type="text" name="name"><br>
        Rating: 
            1 <input type="radio" name="rating" value="1">
            2 <input type="radio" name="rating" value="2">
            3 <input type="radio" name="rating" value="3">
            4 <input type="radio" name="rating" value="4">
            5 <input type="radio" name="rating" value="5">
        <br>    
        Comments: <textarea name="comments" rows="5">
        Comments
        </textarea><br>
        <button type="button" id="add-review">Add review</button>
    `

    const add = document.getElementById('add-review');
        add.addEventListener('click',()=> {
            const input = addReview.elements;
            const restaurant_id = restaurant.id;
            const name = input['name'].value;
            const rating = input['rating'].value;
            const comments = input['comments'].value;
        console.log(name + " " + rating + " " + comments);

        const review = {restaurant_id, name, rating, comments};

        DBHelper.postReview(review)
    });

};




/**
 * Get current restaurant from page URL.
 */
const fetchReviewsFromURL = (callback) => {
    if (self.reviews) { // restaurant already fetched!
        callback(null, self.reviews);
        return;
    }
    const id = getParameterByName('id');
    if (!id) { // no id found in URL
        error = 'No restaurant id in URL';
        callback(error, null);
    } else {
        DBHelper.fetchReviewsByRestaurantId(id, (error, reviews) => {
            self.reviews = reviews;
            if (!reviews) {
                console.error(error);
                return;
            }
            fillReviewsHTML();
            callback(null, reviews)
        });
    }
};

/**
 * Create all reviews HTML and add them to the webpage.
 */
const fillReviewsHTML = (reviews = self.reviews) => {
    const container = document.getElementById('reviews-container');
    const title = document.createElement('h3');
    title.innerHTML = 'Reviews';
    container.appendChild(title);

    const ul = document.getElementById('reviews-list');
    reviews.forEach(review => {
        ul.appendChild(createReviewHTML(review));
    });
    container.appendChild(ul);
};

/**
 * Create review HTML and add it to the webpage.
 */
const createReviewHTML = (review) => {
    const li = document.createElement('li');
    const name = document.createElement('p');
    name.innerHTML = review.name;
    li.appendChild(name);

    const date = document.createElement('p');
    date.innerHTML = review.createdAt;
    li.appendChild(date);

    const rating = document.createElement('p');
    rating.innerHTML = `Rating: ${review.rating}`;
    li.appendChild(rating);

    const comments = document.createElement('p');
    comments.innerHTML = review.comments;
    li.appendChild(comments);

    return li;
};

/**
 * Add restaurant name to the breadcrumb navigation menu
 */
const fillBreadcrumb = (restaurant=self.restaurant) => {
    const breadcrumb = document.getElementById('breadcrumb');
    const li = document.createElement('li');
    li.innerHTML = restaurant.name;
    breadcrumb.appendChild(li);
};

/**
 * Get a parameter by name from page URL.
 */
const getParameterByName = (name, url) => {
    if (!url)
        url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
        results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
