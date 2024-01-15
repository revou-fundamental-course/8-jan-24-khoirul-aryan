function changeTab(tabId) {
  // Hide all tabs
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('active-tab');
  });

  // Show the selected tab
  document.getElementById(tabId).classList.add('active-tab');
}

function hitungKeliling() {
  // Dapatkan panjang sisi dari input
  var sisi = parseFloat(document.getElementById('sisiKeliling').value);

  // Validasi input
  if (isNaN(sisi) || sisi <= 0) {
    alert('Panjang sisi harus merupakan angka positif.');
    return;
  }

  var keliling = 4 * sisi;

  // Tampilkan hasil
  document.getElementById('NilaiKeliling').innerText = keliling;

  // Tampilkan container hasil
  document.getElementById('hasilKeliling').style.display = 'block';
}

function hitungLuas() {
  // Dapatkan panjang sisi dari input
  var sisi = parseFloat(document.getElementById('sisiLuas').value);

  // Validasi input
  if (isNaN(sisi) || sisi <= 0) {
    alert('Panjang sisi harus merupakan angka positif.');
    return;
  }

  var luas = sisi * sisi;

  // Tampilkan hasil
  document.getElementById('NilaiLuas').innerText = luas;

  // Tampilkan container hasil
  document.getElementById('hasilLuas').style.display = 'block';
}

function resetKeliling() {
  // Reset input and hide result container
  document.getElementById('kelilingForm').reset();
  document.getElementById('hasilKeliling').style.display = 'none';
}

function resetLuas() {
  // Reset input and hide result container
  document.getElementById('luasForm').reset();
  document.getElementById('hasilLuas').style.display = 'none';
}
