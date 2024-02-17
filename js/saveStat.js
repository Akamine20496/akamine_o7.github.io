let array = new Array();
const savedStatsOnline = JSON.parse(localStorage.getItem('savedStatsOnline'));
const savedStatsOffline = JSON.parse(localStorage.getItem('savedStatsOffline'));

window.addEventListener('load', () => {
    // checks if the connection is online or offline and the value is not null
    if (navigator.onLine && savedStatsOffline !== null) {
        let tempArray = new Array();
        tempArray = savedStatsOffline;

        // add the offline data to the online
        tempArray.forEach(value => array.push(value));

        console.log('Connection is online!');
    } else if (!(navigator.onLine) && savedStatsOnline !== null) {
        let tempArray = new Array();
        tempArray = savedStatsOnline;

        // add the online data to the offline
        tempArray.forEach(value => array.push(value));

        console.log('Connection is offline!');
    }
});

export function saveToLocalStorage(slotStats) {
    // add the object to the array
    array.push(slotStats);

    // checks if the connection is online or offline
    if (navigator.onLine) {
        // convert the array into string and send to local storage
        localStorage.setItem('savedStatsOnline', JSON.stringify(array));
    } else {
        // convert the array into string and send to local storage
        localStorage.setItem('savedStatsOffline', JSON.stringify(array));
    }
}