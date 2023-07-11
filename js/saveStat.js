let array = new Array();

document.body.onload = () => {
    const savedStats = JSON.parse(localStorage.getItem('savedStats'));

    if (savedStats !== null) {
        array = savedStats;
    }
};

export function saveToLocalStorage(slotStats) {
    // add the object to the array
    array.push(slotStats);
    // convert the array into string and send to local storage
    localStorage.setItem('savedStats', JSON.stringify(array));
}