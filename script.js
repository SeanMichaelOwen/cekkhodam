// script.js
document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nama = document.getElementById('nama').value.trim();
    if (nama !== '') {
        let hasil = generateKhodam(nama);
        displayResult(hasil);
    } else {
        alert('Silakan masukkan nama Anda terlebih dahulu!');
    }
});

function generateKhodam(nama) {
    // Contoh sederhana untuk generate hasil khodam
    let khodamList = [
    'Jin Keset',
    'Malaikat Ngambek',
    'Setan Kepo',
    'Tuyul Kesel',
    'Kertas Bau',
    'Teh Kotak',
    'Kadak Petir',
    'Printer Zombie',
    'Buto Ijo',
    'Badak Petir',
    'Cicak Dumbang',
    'Kasur Kuning',
    'Gila',
    'Valak Berduri',
    'Kentut Kuah',
    'Berak Berkuah',
    'Kucing Garong',
    'Cicak Numpang',
    'Jamu Gendong',
    'Sate Ajaib',
    'Tikus Sombong',
    'Kadal Gepeng',
    'Jemuran Betina',
    'Nasi Goreng Miskin',
    'Kebon Singkong',
    'Pisang Goreng Lugu',
    ];
    let randomIndex = Math.floor(Math.random() * khodamList.length);
    return khodamList[randomIndex];
}

function displayResult(hasil) {
    let hasilKhodamDiv = document.getElementById('hasilKhodam');
    hasilKhodamDiv.innerHTML = `<p>Khodam Anda adalah: <strong>${hasil}</strong></p>`;
}
