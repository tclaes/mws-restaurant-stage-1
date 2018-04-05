import idb from 'idb'

const dbPromis = () => {
    idb.open('test', 1, upgradeDB => {
        if (!upgradeDb.objectStoreNames.contains('restaurants')) {
            const restaurantOS = upgradeDb.createObjectStore('restaurants', {keyPath: 'id'});
        }
    })
}