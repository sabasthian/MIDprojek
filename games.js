document.addEventListener("DOMContentLoaded", function () {
    const minNumber = 1;
    const maxNumber = 100;
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    let attempts = 0;

    document.getElementById("check").addEventListener("click", function () {
        const guess = parseInt(document.getElementById("guess").value);

        if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
            document.getElementById("message").textContent = "Masukkan angka antara 1 dan 100.";
        } else {
            attempts++;

            if (guess < randomNumber) {
                document.getElementById("message").textContent = "Angka terlalu rendah, coba lagi!";
            } else if (guess > randomNumber) {
                document.getElementById("message").textContent = "Angka terlalu tinggi, coba lagi!";
            } else {
                document.getElementById("message").textContent = `Selamat! Anda menebak angka ${randomNumber} dalam ${attempts} percobaan.`;
            }
        }
    });
});
