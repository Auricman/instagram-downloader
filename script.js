function downloadIG() {
    const url = document.getElementById("urlInput").value;

    if (!url) {
        alert("Masukkan URL Instagram!");
        return;
    }

    // API gratis (tanpa login)
    const apiURL = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

    fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <p>Berhasil fetch URL!</p>
                <p>(Untuk download media asli, perlu API khusus)</p>
            `;
        })
        .catch(err => {
            document.getElementById("result").innerHTML = "Gagal mengambil data.";
        });
}
