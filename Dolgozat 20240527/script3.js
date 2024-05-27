function otoslotto() {
    const numbers = [];
    while (numbers.length < 5) {
        const randomNum = Math.floor(Math.random() * 90) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers.sort((a, b) => a - b);
}

// Tesztelés
const result = otoslotto();
console.log("Ötöslottó számok:", result);
