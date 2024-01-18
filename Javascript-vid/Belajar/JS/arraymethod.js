// array -> string, number, objek, function, campuran

let nilai = [
    {Name:"budi", ipa:90, bahasa:70, matematika:80},
    {Name:"joni", ipa:90, bahasa:70, matematika:80},
    {Name:"tejo", ipa:90, bahasa:70, matematika:80},
    {Name:"siti", ipa:90, bahasa:70, matematika:80},
];

let nama = ["budi", "joni", "tejo", "siti"];
// nama.push("ani", "roma");

// console.log(nama.shift{})

// nama.unshift("babi", "roki");

// console.log(nama.slice(6,8));

let mapel = ["ipa", "bahasa", "matematika"]

// console.log(nama.concat{mapel1});

// console.log(nama.concat(["ips", "pkn", "sejarah"]));

// console.log(nama.splice(5,3));

// console.log(nama.pop())

// console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);    
// }

// nama.forEach(function (a) {
//     console.log(a);    
// });

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// });

console.log(nilai);

nilai.filter(a => (a.ipa > 80 && a.matematika > 80 ? console.log(a) : null));

// let siswa = nilai.map(function (a) {
//     return a.nama;
// })

// let siswa = nilai.map((a) => [a.ipa, a.nama, a.bahasa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function (a,b) {
//     return (a = a+b.ipa);
// }, 0);

let hasil = nilai.reduce((a,b) => (a = a+=b.ipa), 0);

console.log(hasil);