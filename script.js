// Sayaç başlangıç değeri
let sayac = 0;

// SADECE DÖNGÜDE KULLANILACAK İKİ RESİM
const resimler = [
    "resim1.jpg", 
    "resim2.jpg" 
];

// HTML elementlerine erişim
const sayacElementi = document.getElementById('sayacDegeri');
const resimElementi = document.getElementById('dinamikResim');
const butonElementi = document.getElementById('artirButonu');

// YENİ EKLEME: Ses elementine erişim
const slapSound = document.getElementById('slap-sound'); 

// Butona tıklandığında çalışacak ana fonksiyon
function sayaciArtirVeResmiDegistir() {
    // 1. Sayaç Değerini Artır
    sayac++;

    // 2. Sayaç Değerini Güncelle
    sayacElementi.textContent = sayac;

    // 3. Resim Index'ini Hesapla (Döngünün Ana Mantığı)
    const resimIndex = sayac % 2; 

    // 4. Resmi Değiştir
    resimElementi.src = resimler[resimIndex];

    // 5. YENİ EKLEME: Sesi Çal
    slapSound.currentTime = 0; // Sesi başa sar (hızlı tıklama için)
    slapSound.play();          // Sesi çalma komutu

    // 6. YENİ EKLEME: Buton Animasyonu (İsteğe bağlı, style.css'te ayarlanması gerekir)
    butonElementi.classList.add('vurdu'); // Örneğin 'vurdu' adında bir CSS sınıfı ekleyelim
    setTimeout(() => {
        butonElementi.classList.remove('vurdu');
    }, 100); 
}

// Butonun tıklama olayını dinle ve fonksiyonu bağla
butonElementi.addEventListener('click', sayaciArtirVeResmiDegistir);

// Sayfa yüklendiğinde başlangıç değerlerini ayarla
sayacElementi.textContent = sayac;
resimElementi.src = resimler[0]; // Başlangıçta ilk resmi (resim1.jpg) göster