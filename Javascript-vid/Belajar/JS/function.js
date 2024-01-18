function coba() {
    let belajar = "saya belajar javascript";
    console.log(belajar);
    console.log("javascript itu mudah");
}

// coba();

// for (let i = 0; i < 4; i++) {
//     coba();
// }

function persegi(l,p) {
    luas = p*l;
    console.log(luas);
}

persegi(3,5);

function out() {
    return console.log("output function");
}

function lingkaran(r) {
    luas = 3.14*r*r;
    return luas;
}

console.log(lingkaran(10)*5);

const tinggi = 5;
let tabung = lingkaran(10)*tinggi;

console.log(tabung);

function lewat(a) {
    return a;
}

console.log(lewat(10));