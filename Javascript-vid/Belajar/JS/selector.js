const hari = 1;
let hasil;

switch (hari) {
    case 1:
        hasil = "minggu";
        break;
    case 2:
        hasil = "senin";
        break;
    case 3:
        hasil = "selasa";
        break;
    case 4:
        hasil = "rabu";
        break;
    case 5:
        hasil = "kamis";
        break;
    case 6:
        hasil = "jumat";
        break;
    case 7:
        hasil = "sabtu";
        break;

    default:
        hasil = "hari tidak ada";
        break;
}

console.log(hasil);

const bulan = "april";
let moon;

switch (bulan) {
    case "januari":
        moon = 1;
        break;
    case "febuari":
        moon = 2;
        break;
    case "maret":
        moon = 3;
        break;
    case "april":
        moon = 4;
        break;
    case "mei":
        moon = 5;
        break;
    case "juni":
        moon = 6;
        break;
    case "juli":
        moon = 7;
        break;
    case "agustus":
        moon = 8;
        break;
    case "september":
        moon = 9;
        break;
    case "oktober":
        moon = 10;
        break;
    case "november":
        moon = 11;
        break;
    case "desember":
        moon = 12;
        break;

    default:
        moon = "belum ditemukan";
        break;
}

console.log(bulan);