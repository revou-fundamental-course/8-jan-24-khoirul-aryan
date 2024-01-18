function changeTab(tabId) {
  // Menyembunyikan semua tab
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('active-tab');
  });

  document.getElementById(tabId).classList.add('active-tab');
}

function hitungKeliling() {
  var sisi = parseFloat(document.getElementById('sisiKeliling').value);

  // Validasi input
  if (isNaN(sisi) || sisi <= 0) {
    alert('Panjang sisi harus merupakan angka positif.');
    return;
  }

  var keliling = 4 * sisi;

  document.getElementById("ValueKeliling").innerHTML = sisi;
  // Tampilkan hasil
  document.getElementById('NilaiKeliling').innerText = keliling;
  
  // Tampilkan container hasil
  document.getElementById('hasilKeliling').style.display = 'block';
}

function hitungLuas() {
  var sisi = parseFloat(document.getElementById('sisiLuas').value);

  // Validasi input
  if (isNaN(sisi) || sisi <= 0) {
    alert('Panjang sisi harus merupakan angka positif.');
    return;
  }

  var luas = sisi * sisi;

  document.getElementById('ValueLuas').innerText = sisi + 'x' + sisi;
  document.getElementById('NilaiLuas').innerText = luas;
  document.getElementById('hasilLuas').style.display = 'block';
}

//mereset input dan menyembunyikan container
function resetKeliling() {
  document.getElementById('kelilingForm').reset();
  document.getElementById('hasilKeliling').style.display = 'none';
}

//mereset input dan menyembunyikan container
function resetLuas() {
  document.getElementById('luasForm').reset();
  document.getElementById('hasilLuas').style.display = 'none';
}
