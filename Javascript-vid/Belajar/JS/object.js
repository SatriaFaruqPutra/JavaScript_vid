let objek = {
    nama : "smk revit",
    telp : 12345678,
    
    buah : ["apel","jeruk","mangga"],

    coba : function () {
        return "coba function dalam object";
    },

    boleh : true,
    "tulis aja" : 123,
}

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[1]);
console.log(objek.coba());
console.log(objek.boleh);
console.log(objek["tulis aja"]);
