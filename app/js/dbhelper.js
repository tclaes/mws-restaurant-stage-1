import idb from 'idb';
/**
 * Common database helper functions.
 */
class DBHelper {

  /**
   * Database URL.
   * Change this to restaurants.json file location on your server.
   */
  static get DATABASE_URL() {
    const port = 1337;
    return `http://localhost:${port}/`;
  }

  static dbPromise() {
      return idb.open('restaurantReview', 1, upgradeDb => {
          upgradeDb.createObjectStore('restaurants', {keyPath: 'id'});
          upgradeDb.createObjectStore('reviews', {keyPath: 'id'})
      });
  }

  /**
   * Fetch all restaurants.
   */
  static fetchRestaurants(callback) {
      fetch(DBHelper.DATABASE_URL + "restaurants")
          .then(response => response.json())
          .then(restaurants => {
              this.saveRestaurantDataLocally(restaurants);
              callback(null, restaurants);
          })
          .catch(
              error => {
                  console.log('Dit is de fout' + error);
                  this.getAllRestaurantsLocally()
                      .then(restaurants =>
                  callback(null, restaurants))
              }
          );
  }

  static fetchReviews(callback){
      fetch(DBHelper.DATABASE_URL + "reviews")
          .then(response => response.json())
          .then(reviews => {
              this.saveReviewDataLocally(reviews);
              callback(null, reviews);
          })
          .catch(
              error => {
                  console.log('Dit is de reviews error' + error);
                  this.getAllReviewsLocally()
                      .then(reviews =>
                          callback(null, reviews))
              }
          );
  }

  static getAllRestaurantsLocally() {
      return DBHelper.dbPromise().then(db => {
          return db.transaction('restaurants')
              .objectStore('restaurants').getAll();
      })
  }

    static getAllReviewsLocally() {
        return DBHelper.dbPromise().then(db => {
            return db.transaction('restaurants')
                .objectStore('restaurants').getAll();
        })
    }

    static saveRestaurantDataLocally(restaurants) {
        if (!('indexedDB' in window)) {return null;}
        return DBHelper.dbPromise().then(db => {
            const tx = db.transaction('restaurants', 'readwrite');
            const store = tx.objectStore('restaurants');
            return Promise.all(restaurants.map(restaurant => store.put(restaurant)))
                .catch(() => {
                    tx.abort();
                    throw Error('Events were not added to the store');
                });
        });
    }

    static saveReviewDataLocally(reviews) {
        if (!('indexedDB' in window)) {return null;}
        return DBHelper.dbPromise().then(db => {
            const tx = db.transaction('reviews', 'readwrite');
            const store = tx.objectStore('reviews');
            return Promise.all(reviews.map(review => store.put(review)))
                .catch(() => {
                    tx.abort();
                    throw Error('Events were not added to the store');
                });
        });
    }

  /**
   * Fetch a restaurant by its ID.
   */
  static fetchRestaurantById(id, callback) {
    // fetch all restaurants with proper error handling.
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error){
        callback(error, null);
      } else {
        const restaurant = restaurants.find(r => r.id == id);
        if (restaurant) { // Got the restaurant
          callback(null, restaurant);
        } else { // Restaurant does not exist in the database
          callback('Restaurant does not exist', null);
        }
      }
    });
  }

    /**
     * Fetch reviews by restaurant_id
     */

    static fetchReviewsByRestaurantId(id, callback) {

        fetch(DBHelper.DATABASE_URL + "reviews/?restaurant_id="+id)
            .then(response => response.json())
            .then(reviews => {
                this.saveReviewDataLocally(reviews);
                callback(null, reviews);
            })
            .catch(
                error => {
                    console.log('Dit is de reviews error' + error);
                    this.getAllReviewsLocally()
                        .then(reviews =>
                            callback(null, reviews))
                }
            );

    }

  /**
   * Fetch restaurants by a cuisine and a neighborhood with proper error handling.
   */
  static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        let results = restaurants;
        if (cuisine != 'all') { // filter by cuisine
          results = results.filter(r => r.cuisine_type == cuisine);
        }
        if (neighborhood != 'all') { // filter by neighborhood
          results = results.filter(r => r.neighborhood == neighborhood);
        }
        callback(null, results);
      }
    });
  }

  /**
   * Fetch all neighborhoods with proper error handling.
   */
  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all neighborhoods from all restaurants
        const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood);
        // Remove duplicates from neighborhoods
        const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)
        callback(null, uniqueNeighborhoods);
      }
    });
  }

  /**
   * Fetch all cuisines with proper error handling.
   */
  static fetchCuisines(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all cuisines from all restaurants
        const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type);
        // Remove duplicates from cuisines
        const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i);
        callback(null, uniqueCuisines);
      }
    });
  }

  /**
   * Restaurant page URL.
   */
  static urlForRestaurant(restaurant) {
    return (`./restaurant.html?id=${restaurant.id}`);
  }

  /**
   * Restaurant image URL.
   */
  static imageUrlForRestaurant(restaurant) {
    return (`/images/${restaurant.id}`);
  }

  static fetchFavorite(restaurant){
      fetch(DBHelper.DATABASE_URL + "restaurants/" + restaurant)
          .then (response => response.json())
          .then(response => {
              console.log("Fetch: " + response.is_favorite);
              return response.is_favorite;
          })
  }

    /**
     *  Favorite a restaurant
     */
    static favoriteRestaurant(restaurant_id) {
        fetch (DBHelper.DATABASE_URL + "restaurants/" + restaurant_id + "/?is_favorite=true", {
            method: 'put'
        })
            .then(response => console.log("restaurant favorited"))
    }

    /**
     * Unfavorite a restaurant
     */

    static unfavoriteRestaurant(restaurant_id) {
        fetch (DBHelper.DATABASE_URL + "restaurants/" + restaurant_id + "/?is_favorite=false", {
            method: 'put'
        })
            .then(response => console.log('Restaurant unfavorited'))
    }


    /**
   * Map marker for a restaurant.
   */
  static mapMarkerForRestaurant(restaurant, map) {
      return new google.maps.Marker({
            position: restaurant.latlng,
            title: restaurant.name,
            url: DBHelper.urlForRestaurant(restaurant),
            map: map,
            animation: google.maps.Animation.DROP
        }
    );
  }

}

export default DBHelper;