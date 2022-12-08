function encurtarUrl() {
    let textoUrl = document.getElementById('textoUrl').value;
    let token = "fbae4fef8b7f1eb1e5b7b500cb74f7e06cb8fef9";
    // usar esse token depois: 2264d2b0c76605518df4092b5dcc50b02260e200
    fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "long_url": textoUrl, "domain": "bit.ly" })
    }).then((response) => response.json())
        .then((data) => {
            document.getElementById('textoUrl').value = data.link;
        });
}
function copiarUrl() {
    let urlCopiado = document.getElementById("textoUrl");
    urlCopiado.select();
    urlCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("O texto é: " + urlCopiado.value);
}