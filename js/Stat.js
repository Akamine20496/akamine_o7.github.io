export default class Stat {
    #attribute = null;
    #values = new Array();

    constructor(attribute, values) {
        if (typeof attribute === 'string' && Array.isArray(values)) {
            this.#attribute = attribute;
            this.#values = values;
        }
    }

    getAttribute() {
        return this.#attribute;
    }

    getValues() {
        return this.#values;
    }

    getValue(index) {
        return this.#values[index];
    }
}