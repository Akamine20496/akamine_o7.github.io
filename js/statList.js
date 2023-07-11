import { Attributes } from "./attribute.js";
import { formatText } from "./enchantStat.js";

export function loadStatList() {
    const description = document.getElementById('description');

    // clear all the content inside the element
    $(description).empty();

    const h3 = document.createElement('h3');
    h3.innerText = 'Stat List';

    const hr = document.createElement('hr');

    description.append(hr, h3);

    Object.keys(Attributes).forEach(key => {
        // retrieved Stat Class object
        const retrievedStat = Attributes[key];
        // store the length of the array of values
        const arrLength = retrievedStat.getValues().length;

        for (let index = 0; index < arrLength; index++) {
            const p = document.createElement('p');

            if (index === arrLength - 1) {
                p.style.color = '#fc0202';
                p.style.fontWeight = 'bold';
            }
            
            p.innerText = formatText(
                retrievedStat.getAttribute(), 
                retrievedStat.getValue(index)
            );

            description.appendChild(p);
        }
    });
}