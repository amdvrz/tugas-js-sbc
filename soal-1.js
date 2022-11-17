// Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
// - Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
// - Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
// Hint : gunakan rumus sqrt(x)

const prompt = require("prompt-sync")();

let a = prompt("Masukkan Angka : ")

const result = Math.sqrt(a);

if (a %2 == 0) {
    return console.log(`Akar dari ${a} adalah ${result}`);
} else if (a < 0) {
    return console.log("Tidak bisa input bilangan negatif");
} else {
    return console.log("Tidak bisa input bilangan ganjil");
}