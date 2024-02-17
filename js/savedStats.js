export function loadSavedStats() {
    let savedStats = null;
    const description = document.getElementById('description');

    // checks if the connection is online or not
    if (navigator.onLine) {
        const savedStatsOnline = JSON.parse(localStorage.getItem('savedStatsOnline'));
        savedStats = savedStatsOnline;
    } else {
        const savedStatsOffline= JSON.parse(localStorage.getItem('savedStatsOffline'));
        savedStats = savedStatsOffline;
    }

    const h3 = document.createElement('h3');
    h3.innerText = 'Saved Stats';
    
    const hr = document.createElement('hr');

    // clear all the content inside the element
    $(description).empty();

    if (savedStats === null) {
        const p = document.createElement('p');
        p.innerText = 'No Saved Stats';

        description.append(hr, h3, p);
    } else {
        description.append(hr, h3);

        let counter = 1;

        for (let index = 0; index < savedStats.length; index++) {
            const fieldSet = document.createElement('fieldset');
            const legend = document.createElement('legend');
            legend.innerText = `Saved Stat #${counter}`;

            const slot1 = document.createElement('p');
            const slot2 = document.createElement('p');
            const slot3 = document.createElement('p');

            slot1.innerText = savedStats[index].attr1;
            slot2.innerText = savedStats[index].attr2;
            slot3.innerText = savedStats[index].attr3;

            fieldSet.append(legend, slot1, slot2, slot3);
            description.appendChild(fieldSet);

            counter++;
        }
    }
}