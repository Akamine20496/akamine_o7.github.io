import { Attributes, AttributeList } from "./attribute.js";
import { setText } from "./dialog.js";

let attr1 = null,
    attr2 = null,
    attr3 = null;

let value1 = 0,
    value2 = 0,
    value3 = 0;

export function generateStat() {
    // Generate attr1 with a 100% generation success
    attr1 = generateUniqueAttribute();

    // Generate attr2 with a 50% generation success
    if (generateNumber() < 50) {
        attr2 = generateUniqueAttribute();
    } else {
        attr2 = 'Empty';
    }

    // Generate attr3 with a 25% chance if attr2 is generated
    if (attr2 !== 'Empty') {
        if (generateNumber() < 25) {
            attr3 = generateUniqueAttribute();
        } else {
            attr3 = 'Empty';
        }
    } else {
        attr3 = 'Empty';
    }

    // Generate random value
    value1 = generateValue(attr1);
    value2 = generateValue(attr2);
    value3 = generateValue(attr3);

    // Display the stats
    displayStat();
}      

function generateUniqueAttribute() {
    let attribute = null;
    let isUnique = false;

    // loop until the attribute is unique to the attribute slots
    do {
        attribute = generateAttribute();
        isUnique = isUniqueAttribute(attribute, attr1, attr2, attr3);
    } while (!isUnique);

    return attribute;
}

function isUniqueAttribute(attribute, ...attributeSlots) {
    return !attributeSlots.includes(attribute);
}

function displayStat() {
    // empty object
    const slots = {};
    // add to the empty object
    slots.slot1 = formatText(attr1, value1);
    slots.slot2 = attr2 === 'Empty' ? attr2 : formatText(attr2, value2);
    slots.slot3 = attr3 === 'Empty' ? attr3 : formatText(attr3, value3);
    // set the stats to the dialog
    setText(slots);
    // set the values to default
    attr1 = null;
    attr2 = null;
    attr3 = null;
    value1 = 0;
    value2 = 0;
    value3 = 0;

    console.log(`Avatar Stat:\n\n${slots.slot1}\n${slots.slot2}\n${slots.slot3}`);
}

function generateAttribute() {
    // returns a random attribute
    return AttributeList[generateNumber(AttributeList.length)];
}

function generateValue(attribute) {
    // if the attribute is empty, return 0
    if (attribute === 'Empty') {
        return 0;
    } 
    // else return a random value
    else {
        // retrieved Stat Class object
        const retrievedStat = Attributes[attribute];
        
        return retrievedStat.getValue(generateNumber(retrievedStat.getValues().length));
    }
}

export function formatText(attribute, value) {
    // checks if the type is not string and number respectively
    if (typeof attribute !== 'string' && typeof value !== 'number') {
        throw new TypeError('Invalid Data Type: 1st Argument must be a string, and\n'
                            + '2nd Argument must be a number.');
    }

    // temporary
    let modifiedAtt;

    // checks if the attribute is Damage to Element
    if (isDTE(attribute)) {
        modifiedAtt = attribute.substring(0, attribute.length - 1);

        return '+%d% %s'.replace('%d', value)
                        .replace('%s', modifiedAtt);
    }
    // checks if the attribute is Aggro
    else if (isAggro(attribute)) {
        modifiedAtt = attribute.substring(0, attribute.length - 1);
        let tempString;

        switch (modifiedAtt) {
            case '+Aggro':
                tempString = '%s +%d%'.replace('%s', modifiedAtt.substr(1, 5))
                                      .replace('%d', value);
                break;
            case '-Aggro':
                tempString = '%s -%d%'.replace('%s', modifiedAtt.substr(1, 5))
                                      .replace('%d', value);
                break;
        }

        return tempString;
    }
    // checks if the attribute is percentage
    else if (isPercentage(attribute)) {
        modifiedAtt = attribute.substring(0, attribute.length - 1);

        return '%s +%d%'.replace('%s', modifiedAtt)
                        .replace('%d', value);
    }
    // return the flat attribute
    else {
        return '%s +%d'.replace('%s', attribute)
                       .replace('%d', value);
    }
}

function isDTE(attribute) {
    return attribute.substr(0, 9) === 'damage to';
}

function isAggro(attribute) {
    return attribute.substr(1, 6) === 'Aggro%'; 
}

function isPercentage(attribute) {
    return attribute.substring(attribute.length - 1) === '%';
}

function generateNumber(upperLimit) {
    // for 0 parameter
    if (arguments.length === 0) {
        return Math.floor(Math.random() * 100);
    } 
    // for 1 parameter
    else if (arguments.length === 1) {
        return Math.floor(Math.random() * upperLimit);
    }
}