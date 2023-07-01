
function consultaCep(event) {
    let cep = document.getElementById('cep').value;  
        event.preventDefault();

    if (cep.length !== 8) {
        alert('Cep inválido!');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;


    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("localidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
        })
    });
}
