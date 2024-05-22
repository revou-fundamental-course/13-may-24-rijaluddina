var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlide(n) {
    slides[slideIndex].style.display = "none";
    slideIndex = n;
    slides[slideIndex].style.display = "block";
}

function hitungLuas() {
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;
    if (alas && tinggi) {
        var luas = 0.5 * alas * tinggi;
        document.getElementById('hasilLuas').innerHTML = "luas segitiga: " + luas;
    }
}

function hitungKeliling() {
    var sisiA = document.getElementById('sisiA').value;
    var sisiB = document.getElementById('sisiB').value;
    var sisiC = document.getElementById('sisiC').value;
    if (sisiA && sisiB && sisiC) {
        var keliling = parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC);
        document.getElementById('hasilKeliling').innerHTML = "keliling segitiga: " + keliling;
    }
}

function clearAll() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('hasilLuas').innerHTML = '';
    document.getElementById('hasilKeliling').innerHTML = '';
}

document.getElementById('themeButton').addEventListener('click', function () {
    var body = document.body;
    var darkIcon = document.getElementById('darkIcon');
    var lightIcon = document.getElementById('lightIcon');
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline';
    } else {
        darkIcon.style.display = 'inline';
        lightIcon.style.display = 'none';
    }
});