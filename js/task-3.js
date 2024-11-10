"use strict";

class StringBuilder {
    // Приватна властивість value
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    // Метод для отримання поточного значення value
    getValue() {
        return this.#value;
    }

    // Метод для додавання рядка в кінець value
    padEnd(str) {
        this.#value += str;
    }

    // Метод для додавання рядка на початок value
    padStart(str) {
        this.#value = str + this.#value;
    }

    // Метод для додавання рядка на початок і в кінець value
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}

// Перевірки
const builder = new StringBuilder(".");
console.log(builder.getValue()); // результат: "."
builder.padStart("^");
console.log(builder.getValue()); // результат: "^."
builder.padEnd("^");
console.log(builder.getValue()); // результат: "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // результат: "=^.^="


